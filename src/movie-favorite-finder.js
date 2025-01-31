/* global MutationObserver */
(function () {
  if (!/^\/[^/]+\/$/.test(window.location.pathname)) return;

  function getFavoriteMovies() {
    return [...document.querySelectorAll('#favourites .poster-container img')]
      .map((img) => img.alt.trim().replace(/\s+/g, '-'))
      .filter((title) => title);
  }

  function createSearchLink(movies) {
    const searchQuery = movies
      .map((title) => `fan:${encodeURIComponent(title)}`)
      .join('+');
    const searchUrl = `https://letterboxd.com/search/${searchQuery}/?adult`;

    const link = document.createElement('a');
    link.href = searchUrl;
    link.classList.add('all-link');
    link.innerText = 'Find Top4 Mutuals';
    link.target = '_blank';

    return link;
  }

  function injectAllLink() {
    const sectionHeading = document.querySelector(
      '#favourites .section-heading',
    );
    if (!sectionHeading) return;

    const favoriteMovies = getFavoriteMovies();
    if (favoriteMovies.length === 0) return;

    sectionHeading.appendChild(createSearchLink(favoriteMovies));
  }

  const observer = new MutationObserver(() => {
    const sectionHeading = document.querySelector(
      '#favourites .section-heading',
    );
    if (sectionHeading) {
      observer.disconnect();
      injectAllLink();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
