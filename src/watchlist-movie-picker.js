(function () {
  if (!window.location.pathname.includes('/watchlist/')) return;

  let moviesLoaded = false;
  let allMovies = [];

  function loadAllPosters(callback) {
    if (moviesLoaded) return callback();

    let lastHeight = 0;
    const scrollStep = 5000;

    function scrollAndCheck() {
      window.scrollBy(0, scrollStep);
      setTimeout(() => {
        if (document.body.scrollHeight === lastHeight) {
          moviesLoaded = true;
          allMovies = [
            ...document.querySelectorAll('.poster-list .poster-container'),
          ];
          window.scrollTo(0, 0);
          callback();
        } else {
          lastHeight = document.body.scrollHeight;
          scrollAndCheck();
        }
      }, 50);
    }

    scrollAndCheck();
  }

  function pickRandomMovie() {
    loadAllPosters(() => {
      const movies = allMovies.length
        ? allMovies
        : [...document.querySelectorAll('.poster-list .poster-container')];
      if (!movies.length) return alert('No movies found in your watchlist.');

      let validMovie;
      for (let i = 0; i < movies.length; i++) {
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        const movieImage = randomMovie.querySelector('img');
        if (movieImage && !movieImage.src.includes('empty-poster')) {
          validMovie = randomMovie;
          break;
        }
      }

      if (!validMovie) return alert('No valid movies with posters found.');

      const movieImage = validMovie.querySelector('img');
      const moviePosterUrl = movieImage.src;
      const moviePageUrl =
        validMovie.querySelector('.frame.has-menu')?.href || '#';

      let existingPoster = document.getElementById('random-movie-poster');
      if (!existingPoster) {
        existingPoster = document.createElement('img');
        Object.assign(existingPoster, {
          id: 'random-movie-poster',
          width: 230,
          height: 345,
          style: 'display:block;margin-top:10px;cursor:pointer;',
        });
        document.querySelector('.actions-panel')?.appendChild(existingPoster);
      }

      existingPoster.src = moviePosterUrl;
      existingPoster.alt = 'Random Movie';
      existingPoster.onclick = () => (window.location.href = moviePageUrl);
    });
  }

  function injectPickerButton() {
    const actionsPanel = document.querySelector('.actions-panel ul');
    if (!actionsPanel) return;

    const newItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.innerText = 'Pick random movie';
    newLink.href = '#';
    newLink.addEventListener('click', (e) => {
      e.preventDefault();
      pickRandomMovie();
    });

    newItem.appendChild(newLink);
    actionsPanel.appendChild(newItem);
  }

  const observer = new MutationObserver(() => {
    if (document.querySelector('.actions-panel ul')) {
      observer.disconnect();
      injectPickerButton();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
