import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect} from "react";

import {genresActions} from "../../../store";
import {Genre} from "../Genre";
import css from './Genres.module.css'



const Genres = () => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.getAll())
    }, []);

    return (
        <div className={css.genres}>
            <h2>Genres</h2>
            {Array.isArray(genres) && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};