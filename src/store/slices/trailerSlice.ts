import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {trailerService} from "../../services";
import {AxiosError} from "axios";

interface TrailerState {
    trailers: [];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: TrailerState = {
    trailers: [],
    status: 'idle',
    error: null,
};

const getTrailer = createAsyncThunk(
    'trailerSlice/getTrailer',
    async (id: number, {rejectWithValue}) => {
        try {
            const {data} = await trailerService.getTrailer(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }

    }
);

const trailerSlice = createSlice({
    name: 'trailerSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTrailer.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTrailer.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.trailers = action.payload;
            })
            .addCase(getTrailer.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

const {reducer: trailerReducer, actions} = trailerSlice;

const trailerActions = {
    ...actions,
    getTrailer
}

export {trailerReducer, trailerActions}