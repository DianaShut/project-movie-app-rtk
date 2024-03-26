import {useAppDispatch, useAppSelector} from "../../../hooks";
import {ChangeEvent, useEffect} from "react";

import {movieActions} from "../../../store";
import {Movie} from "../Movie";
import css from './Movies.module.css'
import {Pagination} from "@mui/material";

const Movies = () => {
    const {movies, currentPage, totalPages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll(currentPage.toString()))
    }, [currentPage]);

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        dispatch(movieActions.setPage(value));
    };

    return (
        <div>
            <h2>All Films</h2>
            <div className={css.movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
                <div className={css.pagination}>
                    <Pagination count={totalPages}
                                page={currentPage} onChange={handlePageChange} variant="outlined" shape="rounded" />
                </div>
        </div>
    );
};

export {Movies};