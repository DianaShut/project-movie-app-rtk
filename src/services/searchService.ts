import {IRes} from "../types";
import {IData} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constans";

const searchService = {
    getBySearch: (query: string, page: string):IRes<IData> => apiService.get(urls.search, {params:{query, page}})
}

export {searchService}