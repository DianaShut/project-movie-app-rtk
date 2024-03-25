import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IData, IInfo, IMovie} from "../../interfaces";
import {movieService} from "../../services";


interface IState {
    movies: IMovie[],
    currentPage: number,
    totalPages: number,
    movieDetails: IInfo
}

const initialState: IState = {
    movies: [],
    currentPage: 1,
    totalPages: 1,
    movieDetails: {}
}

const getAll = createAsyncThunk<IData, string>(
    'movieSlice/getAll',
    async (page, {rejectWithValue}) => {
        try{
            const {data} = await movieService.getAll(page);
            return data
        } catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getById = createAsyncThunk<IInfo, number>(
    'movieSlice',
    async (id, {rejectWithValue}) =>{
        try {
           const {data} = await movieService.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        setPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .
            addCase(getById.fulfilled, (state, action) =>{
                state.movieDetails =action.payload;
            })
})

const {reducer: moviesReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getById
}

export {moviesReducer, movieActions}