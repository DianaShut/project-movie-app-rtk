import {useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {genresActions} from "../../store";
import {Genres, Movie, Movies} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from './GenresMoviesPage.module.css'

const GenresMoviesPage = () => {
    const {moviesByGenres, genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams()
    const page = query.get('page')
    const {id} = useParams<string>()

    const genre = genres.find(genre => genre.id === Number(id));

    const genreName = genre ? genre.name : '';

    useEffect(() => {
        dispatch(genresActions.getMoviesByGenres({page,with_genres: id}))
    }, [page, id]);

    const prev = () => {
        setQuery(prev=>{
            const prevPage = prev.set('page', `${+prev.get('page')-1}`)
            return prev
        })
    };
    const next = () => {
        setQuery(prev=>{
            const nextPage = prev.set('page', `${+prev.get('page')+1}`)
            return prev
        })
    };
    const prevPage = +page > 1

 return (
  <div className={css.container}>
      <div><Genres/></div>
      <div className={css.moviesBox}>
          <h2>{genreName}</h2>
          <div className={css.movies}>
              {moviesByGenres.map(movieByGenres => <Movie key={movieByGenres.id} movie={movieByGenres}/>)}
          </div>
          <div className={css.buttons}>
              <button onClick={prev} disabled={!prevPage}>prev</button>
              <div>page {page}   </div>
              <button onClick={next}>next</button>
          </div>
      </div>

  </div>
 );
};

export {GenresMoviesPage};