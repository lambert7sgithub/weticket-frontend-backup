import React, { useEffect, useState } from "react";
import { Divider, Layout, Button } from "antd";
import "./MovieDetails.css";
import { RightCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { getMovieById } from "../../api/movie";
import { NavLink, useParams } from "react-router-dom";

const MovieDetails = () => {
  let { movieId } = useParams();
  const { Content } = Layout;

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
    <Layout>
      <Layout>
        <Content>
          <div className="film">
            <div className="film-header"></div>
            <div className="film-card">
              <img src={movie.picture} alt=""></img>
            </div>
            <div className="film-des">
              <div className="p1">
                <RightCircleOutlined /> {movie.movieName}
              </div>

              <Divider />
              <div className="p2">
                <span>导演：</span>
                {movie.actor}
              </div>
              <div className="p2">
                <span>主演：</span>
                {movie.directedBy}
              </div>
              <div className="p2">
                <span>语言：</span>
                {movie.language}
              </div>
              <div className="p2">
                <span>片长：</span>
                {movie.length}
              </div>
              <div className="p2">
                <span>上映时间：</span>
                {movie.length}
              </div>

              <div className="film-button">
                <Button
                  type="primary"
                  danger
                  shape="round"
                  size="large"
                >
                  <NavLink to={"/Scheduling/" + movieId}>Buy Ticket</NavLink>
                </Button>
              </div>
            </div>
            <div className="film-content">
              <span>
                <SearchOutlined /> 剧情描述:
              </span>
              <Divider />
            </div>

            <div className="film-info">
              <p> {movie.info}</p>
            </div>
            <br />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MovieDetails;
