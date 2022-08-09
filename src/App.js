import WeTicketLayout from "./layout/WeTicketLayout";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./feature/home/Home";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetails from "./feature/MovieShow/MovieDetails";
import MovieShow from "./feature/MovieShow/MovieShow";
import Food from "./pages/Food";
import Friend from "./pages/Friend";
import Login from "./Login/Login";
import Register from './Register/Register.jsx';
import Pay from './feature/Pay/Pay';
import "./App.css";
import ScheduleTable from "./feature/Scheduling/Scheduling";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<WeTicketLayout />}>
                    <Route index element={<Home />} />
                    <Route path='movie' element={<MovieShow />} />
                    <Route path='food' element={<Food />} />
                    <Route path='friend' element={<Friend />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="MovieDetials/:movieId" element={<MovieDetails />} />
                    <Route path="Pay" element={<Pay />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="s" element={<ScheduleTable/>} />

            </Routes>
        </div>
    );
}

export default App;
