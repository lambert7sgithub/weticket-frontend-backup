import React from 'react';
import {Card, Divider, Rate} from "antd";
import '../css/filmItem.css';
import {NavLink} from "react-router-dom";

const {Meta} = Card;
const FilmItem = (props) => {
    const {film} = props;

    const toMovieDetails = () => {
        console.log(film);
        console.log(film.score / 20);
        console.log('hello');
    }

    const cardStyle = {
        width: 240,
    }

    return (
        <div onClick={toMovieDetails}>
            <NavLink to={"/MovieDetails/" + film.movieId}>

                <Card
                    hoverable
                    style={cardStyle}
                    cover={<img alt="example" src={film.picture} className="filmItemImage"/>}
                >
                    <Meta title={film.movieName} description=""/>
                    <h1 className="filmComment">
                        评分：
                        <span className="filmScore">
                            {film.score? film.score / 10:'暂无评分'}
                        </span>
                    </h1>
                    <Divider/>
                    <Rate allowHalf disabled defaultValue={film.score / 20}/>
                </Card>
            </NavLink>
        </div>
);
}

export default FilmItem;
