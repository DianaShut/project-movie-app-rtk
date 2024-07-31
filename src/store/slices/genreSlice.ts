import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IData, IGenre, IGenres, IMovie} from "../../interfaces";
import {AxiosError} from "axios";
import {genreService} from "../../services";

interface IState {
    genres: IGenre[],
    moviesByGenres: IMovie[],
    currentPage: number,
    totalPages: number
}


const initialState:IState = {
    genres: [],
    moviesByGenres: [],
    currentPage: 1,
    totalPages: 1
}

const getAll = createAsyncThunk<IGenres, void>(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try{
            const {data} = await genreService.getAll();
            return data
        } catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getMoviesByGenres = createAsyncThunk<IData, {page:string, with_genres: string}>(
    'genreSlice/getMoviesByGenres',
    async ({page, with_genres}, {rejectWithValue}) =>{
        try {
            const {data} = await genreService.moviesByGenres(page, with_genres)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{
        setPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) =>{
                state.genres = action.payload.genres
            })
            .addCase(getMoviesByGenres.fulfilled, (state, action) =>{
                state.moviesByGenres = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
})

const {reducer: genresReducer, actions} = genreSlice;

const genresActions = {
    ...actions,
    getAll,
    getMoviesByGenres
}

export {genresReducer, genresActions}