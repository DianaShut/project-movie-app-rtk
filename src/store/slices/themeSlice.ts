import {createSlice} from "@reduxjs/toolkit";

type Theme = 'dark' | 'light'

interface IState {
    theme: Theme
}

const initialState:IState = {
    theme: "dark"
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        switchTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', state.theme)
        }
    }
})

const {reducer: themeReducer, actions} = themeSlice;

const themeActions = {
    ...actions
}

export {themeReducer, themeActions}