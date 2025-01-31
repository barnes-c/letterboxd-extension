# Letterboxd Watchlist Randomizer

## Overview

Letterboxd Watchlist Randomizer is a Chrome extension that helps you pick a random movie from your Letterboxd watchlist. If you're struggling to decide what to watch, this extension makes the choice easy by selecting a random film with a valid poster from your list.

## Features

- Adds a "Pick random movie" button to the Letterboxd watchlist interface.
- Adds a "Find Top4 Twin" button to the user homepage. Shows you who else has your top 4 movies.

## Usage

1. Visit your Letterboxd watchlist (`https://letterboxd.com/YOUR_USERNAME/watchlist/`).
2. Click the **Pick random movie** button in the actions panel.
3. A random movie with a valid poster will be displayed.
4. Click on the poster to open the movie’s Letterboxd page.

## Technical Details

- Uses a MutationObserver to wait for the Letterboxd page to load.
- Scrolls through the page to load all movies before selecting one.
- Ensures only valid movies with posters are chosen.
- Works seamlessly with Letterboxd’s UI.

## License

This project is open-source under the MIT License.

## Contribution

Feel free to submit issues, suggestions, or pull requests to improve the extension!

## Acknowledgments

Built for Letterboxd users who love movies but hate making decisions. 🎬🍿
