# Letterboxd Companion

![Letterboxd Companion Logo](src/assets/Banner.png)

## Overview

Letterboxd Companion is a Chrome extension designed to enhance your Letterboxd experience. It helps you pick a random movie from your watchlist when you can't decide what to watch and allows you to find other users who share your top 4 favorite films.

## Features

- Adds a "Pick random movie" button to the Letterboxd watchlist interface.
- Adds a "Find Top4 Mutuals" button to the user homepage. Shows you who else has your top 4 movies.

## Usage

### Random Watchlist Picker

1. Visit your Letterboxd watchlist (`https://letterboxd.com/YOUR_USERNAME/watchlist/`).
2. Click the **Pick random movie** button in the actions panel.
3. A random movie with a valid poster will be displayed.
4. Click on the poster to open the movie’s Letterboxd page.

### Top 4 Mutual Lookup

1. Visit your Letterboxd profile (`https://letterboxd.com/YOUR_USERNAME/`).
2. Click the **Find Top4 Mutuals** button next to your favorite films.
3. The extension will generate a search query linking to Letterboxd users who have the same top 4 favorite movies as you. If the search results are empty you are a special one ;)

## Technical Details

- Uses a MutationObserver to wait for the Letterboxd page to load.
- Scrolls through the page to load all movies before selecting one.
- Ensures only valid movies with posters are chosen.
- Generates a dynamic search query for top 4 mutuals based on movie titles.
- Works seamlessly with Letterboxd’s UI.

## License

This project is open-source under the MIT License.

## Contribution

Feel free to submit issues, suggestions, or pull requests to improve the extension!

## Acknowledgments

Built for Letterboxd users who love movies but hate making decisions. 🎬🍿
