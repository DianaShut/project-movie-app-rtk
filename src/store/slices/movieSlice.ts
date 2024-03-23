import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IData, IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
}

const getAll = createAsyncThunk<IData, void>(
    'movieSlice/getAll',
    async (page:string, {rejectWithValue}) => {
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

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll
}

export {movieReducer, movieActions}