import {IRes} from "../types";
import {IData, IInfo} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constans";

const movieService = {
    getAll:(page: string): IRes<IData> => apiService.get(urls.movies.base, {params:{page}}),
    getById: (id:number): IRes<IInfo> => apiService.get(urls.movies.byId(id))
}

export {movieService}