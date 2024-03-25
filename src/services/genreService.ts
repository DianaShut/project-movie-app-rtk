import {IRes} from "../types";
import {IData, IGenres} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constans";

const genreService = {
    getAll: (): IRes<IGenres> => apiService.get(urls.genres),
    moviesByGenres: (page:string, with_genres: string): IRes<IData> => apiService.get(urls.movies.base, {params: {page, with_genres}})
}

export {genreService}