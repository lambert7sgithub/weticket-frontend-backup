import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "Movie",
    initialState: {
        movie: {},
        id: 0,
    },
    reducers: {
        getDetails: (state, action) => {
            state.movie = (action.payload);
        },
        setMovieId: (state, action) => {
            state.id = action.payload;
        }
    },
});

export const { getDetails, setMovieId } = movieSlice.actions;
export default movieSlice.reducer;
