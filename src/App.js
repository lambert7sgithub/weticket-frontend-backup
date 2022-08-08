import WeTicketLayout from "./layout/WeTicketLayout";

import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./feature/home/Home";
import NotFoundPage from "./pages/NotFoundPage";

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
            </Routes>
        </div>
    );
}

export default App;
