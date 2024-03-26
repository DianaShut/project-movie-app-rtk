import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices/movieSlice";
import {genresReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
        theme: themeReducer
    }
})

export {store}