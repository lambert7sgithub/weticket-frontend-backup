import React, {useEffect, useState} from "react";
import {Button, Divider, Layout} from "antd";
import "./MovieDetails.css";
import {RightCircleOutlined, SearchOutlined} from "@ant-design/icons";
import {getMovieById} from "../../api/movie";
import {NavLink, useParams} from "react-router-dom";
import dayjs from 'dayjs';

const MovieDetails = () => {
    let {movieId} = useParams();
    const {Content} = Layout;

    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovieById(movieId)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                alert(error);
            });
    }, [movieId]);

    return (
        <Layout className="movie-page">
            <Layout>
                <Content>
                    <div className="film">
                        <div className="film-card-des">
                            <div className="film-card">
                                <img src={movie.picture} alt=""></img>
                            </div>
                            <div className="film-des">
                                <div className="p1">
                                    <RightCircleOutlined/> {movie.movieName}
                                </div>
                                <Divider/>
                                <div className="p2">
                                    <p>
                                        导演：
                                        {movie.actor}
                                    </p>
                                    <p>
                                        主演：
                                        {movie.directedBy}
                                    </p>
                                    <p>
                                        语言：
                                        {movie.language}
                                    </p>
                                    <p>
                                        上映时间：
                                        {dayjs(movie.showTime).format("YYYY-MM-DD HH:mm")}
                                    </p>
                                    <p>
                                        片长：
                                        {movie.length}
                                    </p>
                                </div>
                                <div className="film-button">
                                    <Button type="primary" shape="round" size="large">
                                        <NavLink to={"/Scheduling/" + movieId}>进 入 购 票</NavLink>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="film-content">
              <span>
                <SearchOutlined/> 剧情描述:
              </span>
                            <Divider/>
                            <div className="film-info">
                                <div> {movie.info}</div>
                            </div>
                        </div>

                        <br/>
                    </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MovieDetails;
