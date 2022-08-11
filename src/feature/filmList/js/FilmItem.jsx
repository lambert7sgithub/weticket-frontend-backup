import React from 'react';
import {Card, Divider, Rate} from "antd";
import '../css/filmItem.css';
import {NavLink} from "react-router-dom";


const FilmItem = (props) => {
    const {film} = props;

    const cardStyle = {
        width: 400,
        marginTop: 20
    };

    return (
        <div>
            <NavLink to={"/MovieDetails/" + film.movieId}>

                <Card
                    hoverable
                    style={cardStyle}
                    cover={<img alt="example" src={film.picture} className="filmItemImage"/>}
                >
                    <h1>
                        {film.movieName}
                    </h1>
                    <Rate allowHalf disabled defaultValue={film.score / 20}/>
                    <Divider/>
                    <h1>
                        <span className="filmScore">
                            {film.score ? film.score / 10 : '暂无评分'}
                        </span>
                    </h1>
                </Card>
            </NavLink>
        </div>
    );
};

export default FilmItem;
