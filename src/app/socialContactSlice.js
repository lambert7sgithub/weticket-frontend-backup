import {createSlice} from "@reduxjs/toolkit";

const socialContactSlice = createSlice({
    name: "SocialContact",
    initialState: {
        films: [],
        cinemas: []
    },
    reducers: {
        addFilms: (state, action) => {
            return {...state, films: action.payload};
        },
        addCinemas: (state, action) => {
            return {...state, cinemas: action.payload};
        },
    },
});

export const {addFilms, addCinemas} = socialContactSlice.actions;
export default socialContactSlice.reducer;