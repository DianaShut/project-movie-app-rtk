import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices/movieSlice";
import {genresReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer
    }
})

export {store}