import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices/movieSlice";
import {genresReducer, themeReducer, trailerReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
        theme: themeReducer,
        trailers: trailerReducer
    }
})

export {store}