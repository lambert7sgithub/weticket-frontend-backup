import WeTicketLayout from "./layout/WeTicketLayout";

import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./feature/home/Home";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetails from "./feature/MovieShow/MovieDetails"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WeTicketLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="MovieDetials" element={<MovieDetails/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
