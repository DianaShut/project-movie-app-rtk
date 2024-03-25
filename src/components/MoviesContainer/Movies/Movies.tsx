import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect} from "react";

import {movieActions} from "../../../store";
import {Movie} from "../Movie";
import css from './Movies.module.css'

const Movies = () => {
    const {movies, currentPage, totalPages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll(currentPage.toString()))
    }, [currentPage]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            dispatch(movieActions.setPage(currentPage + 1));
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            dispatch(movieActions.setPage(currentPage - 1));
        }
    };

    return (
        <div>
            <div className={css.movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.buttons}>
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export {Movies};