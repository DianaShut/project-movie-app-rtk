import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresMoviesPage, MovieDetailsPage, MoviesPage} from "./pages";


const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movie/:id', element: <MovieDetailsPage/>},
            {path: 'genres/:id', element: <GenresMoviesPage/>}
        ]}
])

export {router}