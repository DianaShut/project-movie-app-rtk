import {Genres, Movies} from "../../components";
import css from './MoviesPage.module.css'
import SearchResults from "../../components/SearchContainer/SearchResults/SearchResults";
const MoviesPage = () => {
 return (
  <div className={css.MoviesPage}>
      <div className={css.genresList}>
          <Genres/>
      </div>
      <div>
          <div className={css.search}><SearchResults/></div>
          <Movies/>
      </div>

  </div>
 );
};

export {MoviesPage};