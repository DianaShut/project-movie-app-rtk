import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IData, IMovie} from "../../interfaces";
import {movieService} from "../../services";


interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
}

const getAll = createAsyncThunk<IData, string>(
    'movieSlice/getAll',
    async (page, {rejectWithValue}) => {
        try{
            const {data} = await movieService.getAll({page});
            return data
        } catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
            })
})

const {reducer: moviesReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll
}

export {moviesReducer, movieActions}