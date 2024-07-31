# Project Movie App RTK

This project is a movie application built using React, Redux Toolkit (RTK), and TypeScript. It fetches data from The Movie Database (TMDb) API to display movies, their details, and genres. Users can also add movies to their list of favorites.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/DianaShut/project-movie-app-rtk.git
    cd project-movie-app-rtk
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Add a `.env` file in the root directory with your TMDb API key:
    ```
    REACT_APP_TMDB_API_KEY=your_tmdb_api_key
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- **Movie List**: Displays a list of popular movies.
- **Movie Details**: Shows detailed information about a selected movie.
- **Genres**: Lists movies by genre.
- **Favorites**: Allows users to add movies to their list of favorites.
- **Theme Switch**: Toggles between light and dark themes.

## Folder Structure

```plaintext
src/
├── components/          # Reusable components
│   ├── Header/
│   ├── MoviesContainer/
│   └── SearchContainer/
├── constans/            # Constants for the project
├── hooks/               # Custom hooks
├── pages/               # Page components
├── services/            # API services
├── store/               # Redux store and slices
│   ├── slices/
│   └── store.ts
└── index.tsx            # Main entry point
