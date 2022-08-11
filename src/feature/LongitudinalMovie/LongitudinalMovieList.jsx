import React from "react";
import LongitudinalMovieItem from "./LongitudinalMovieItem";
import "./LongitudinalMovie.css";
const LongitudinalMovieList = () => {
  const movieList = [
    {
      movieName: "独行月球",
      picture: "/list/1.jpg",
      showTime: "2022-07-29 09:00",
      movieType: "喜剧,科幻",
    },
    {
      movieName: "永不独行",
      picture: "/list/2.jpg",
      showTime: "2022-04-30",
      movieType: "剧情",
    },
    {
      movieName: "杀死伊人 第一季",
      picture: "/list/3.jpg",
      showTime: "2018-04-08",
      movieType: "电视剧,惊悚",
    },
    {
      movieName: "活着",
      picture: "/list/4.jpg",
      showTime: "2020-06-24",
      movieType: "动作,惊悚,灾难",
    },
    {
      movieName: "黄金三镖客",
      picture: "/list/5.jpg",
      showTime: "1996-12-23",
      movieType: "西部,冒险",
    },
    {
      movieName: "独行侠",
      picture: "/list/6.jpg",
      showTime: "2013-10-05",
      movieType: "动作,西部,冒险",
    },
    {
      movieName: "黄昏双镖客",
      picture: "/list/7.jpg",
      showTime: "1965-12-18",
      movieType: "动作,西部,惊悚,剧情",
    },
    {
      movieName: "独行杀手",
      picture: "/list/8.jpg",
      showTime: "1967-10-25",
      movieType: "惊悚,犯罪",
    },
  ];
  return (
    <div className="movie-panel">
      <div className="movie-flex">
        {movieList.map((item, index) => {
          return (
            <LongitudinalMovieItem
              key={index}
              movieName={item.movieName}
              picture={item.picture}
              showTime={item.showTime}
              movieType={item.movieType}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LongitudinalMovieList;
