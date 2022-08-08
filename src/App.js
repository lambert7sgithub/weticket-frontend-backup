import WeTicketLayout from "./layout/WeTicketLayout";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./feature/home/Home";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetails from "./feature/MovieShow/MovieDetails"
import MovieShow from "./feature/MovieShow/MovieShow";
import Food from "./pages/Food";
import Friend from "./pages/Friend";
import Login from "./Login/Login";
import Register from './Register/Register.jsx'

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
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="MovieDetials" element={<MovieDetails/>} />
            </Routes>
        </div>
    );
}

export default App;
