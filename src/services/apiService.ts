import axios from "axios";

import {baseURL} from "../constans";

const apiService = axios.create({baseURL})

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjAwNWExYmFkZThlNmVlZjI5ZmE1ZGMyYjkwMzE1NCIsInN1YiI6IjY1NDY2ZDI2Mjg2NmZhMDBlMWVlY2YxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mEcL-nRVjGcNSy7vtLTJyIFkognHEVufcUdCLwmEKKw'

apiService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${token}`
    return request
})

export {apiService}