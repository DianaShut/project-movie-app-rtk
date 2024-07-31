import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../store";
import css from './MovieDetails.module.css'
import {Rating} from "@mui/material";

const MovieDetails = () => {
    const {movieDetails} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(movieActions.getById(+id))
    }, [id]);

    const {title, original_title, original_language, release_date, vote_count, video, backdrop_path, poster_path, overview, adult,  popularity, vote_average} = movieDetails;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const addToFavorites = () => {
        dispatch(movieActions.addToFavorites(movieDetails))
    }

    return (
        <div>
        <div className={css.MoviesDetails}>
            <img src={imageUrl} alt={title}/>
            <div className={css.infoBlock}>
                <div className={css.info}>
                    <h1 className={css.title}>{title}</h1>
                    <div onClick={addToFavorites}><p>Add to Favorite</p></div>
                    <Rating className={css.Rating} name="customized-10" defaultValue={vote_average} precision={0.1} max={10} size="small" readOnly />
                    <p className={css.title}>{original_title}</p>
                    <div>Original title: {original_title}</div>
                    <br/>
                    <div>Original language: {original_language}</div>
                    <br/>
                    <div>Release date: {release_date}</div>
                </div>
                <div className={css.overview}>
                    {overview}
                </div>
            </div>
        </div>
    <div className={css.trailer}>
        <h2>Trailer</h2>
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movieDetails.video}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //allowfullscreen
        ></iframe>
    </div>
    </div>
    );
};

export {MovieDetails};