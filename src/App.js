import WeTicketLayout from "./layout/WeTicketLayout";
import {Route, Routes} from "react-router-dom";
import React from "react";
import "./App.less";
import Home from "./feature/home/Home";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetails from "./feature/MovieShow/MovieDetails";
import MovieShow from "./feature/MovieShow/MovieShow";
import Food from "./feature/Food/Food";
import Friend from "./pages/Friend";
import Login from "./feature/Login/Login";
import Pay from "./feature/Pay/Pay";
import Seat from "./feature/Seat/Seat";
import Scheduling from "./feature/Scheduling/Scheduling";
import Register from "./feature/Register/Register";
import Order from './feature/orders/Order'
import PersonOrder from './feature/personalCenter/PersonOrder'
import LongitudinalMovieList from "./feature/LongitudinalMovie/LongitudinalMovieList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WeTicketLayout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<MovieShow />} />
          <Route path="food" element={<Food />} />
          <Route path="friend" element={<Friend />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="MovieDetails/:movieId" element={<MovieDetails />} />
          <Route path="Pay" element={<Pay />} />
          <Route path="Scheduling/:movieId" element={<Scheduling />} />
          <Route path="Cinema/:cinemaId/screening/:screeningId/Scheduling/:movieId/seat" element={<Seat />} />
          <Route path="order" element={<Order />}/>
          <Route path="personorder" element={<PersonOrder />}/>
          <Route path="result" element={<LongitudinalMovieList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

