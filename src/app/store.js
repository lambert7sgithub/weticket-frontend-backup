import {configureStore} from "@reduxjs/toolkit";
import movieSlice from "../app/movieSlice";
import socialContactReducer from '../app/socialContactSlice';
import filmReducer from '../app/filmSlice';

export const store = configureStore({
  reducer: {
    movie: movieSlice,
      socialContact: socialContactReducer,
      film: filmReducer
  },
});
