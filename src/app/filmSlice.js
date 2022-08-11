import {createSlice} from "@reduxjs/toolkit";

const filmSlice = createSlice({
    name: "Film",
    initialState: {
        films: [],
    },
    reducers: {
        addFilms: (state, action) => {
            return {films: action.payload};
        },
    },
});

export const {addFilms} = filmSlice.actions;
export default filmSlice.reducer;

