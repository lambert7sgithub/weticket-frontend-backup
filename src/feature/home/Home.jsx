import React from "react";
import { Divider } from "antd";
import MainCarousel from "./MainCarousel";
import MovieShow from "../MovieShow/MovieShow";

const Home = () => {
  return (
    <div>
      <MainCarousel />
      <Divider />
      <MovieShow />
    </div>
  );
};

export default Home;
