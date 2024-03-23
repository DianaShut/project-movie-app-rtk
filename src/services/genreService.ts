import {IRes} from "../types";
import {IData, IGenre} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constans";

const genreService = {
    getAll: (): IRes<IGenre[]> => apiService.get(urls.genres),
    getByIdMovie: (page:string, with_genres: string): IRes<IData> => apiService.get(urls.movies.base, {params: {page, with_genres}})
}

export {genreService}