import {Genres, Movies} from "../../components";
import css from './MoviesPage.module.css'
const MoviesPage = () => {
 return (
  <div className={css.MoviesPage}>
      <div className={css.genresList}>
          <Genres/>
      </div>
   <Movies/>
  </div>
 );
};

export {MoviesPage};