import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constans";

const trailerService = {
    getTrailer: (id:number):IRes<any> => apiService.get(urls.trailer(id))
}

export {trailerService}