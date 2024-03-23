import {IRes} from "../types";
import {IInfo, IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constans";

const movieService = {
    getAll:(page: string): IRes<IInfo[]> => apiService.get(urls.movies.base, {params:{page}}),
    getById: (id:number): IRes<IMovie> => apiService.get(urls.movies.byId(id))
}

export {movieService}