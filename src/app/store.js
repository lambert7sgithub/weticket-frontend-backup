import {configureStore} from "@reduxjs/toolkit";
import movieSlice from "../app/movieSlice";
import socialContactReducer from '../app/socialContactSlice';

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    socialContact: socialContactReducer
  },
});
