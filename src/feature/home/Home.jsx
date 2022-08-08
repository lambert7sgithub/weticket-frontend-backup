import React from 'react';
import {Divider} from "antd";
import Carousel from "../Carousel/Carousel";
import MovieShow from "../MovieShow/MovieShow";

const Home = () => {

    return (
        <div>
            <Carousel/>
            <Divider/>
            <MovieShow/>
        </div>
    );
};

export default Home;