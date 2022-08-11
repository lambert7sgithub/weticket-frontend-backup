import React from 'react';
import {Col, Row} from "antd";
import FilmItem from "./FilmItem";
import {useSelector} from "react-redux";

const FilmGroup = () => {

    const films = useSelector((state) => state.film.films);

    return (
        <div>
            <Row gutter={16}>
                {

                    films.map((film) =>
                        <Col gutter={16} className="gutter-row" span={5} offset={2} key={film.movieId}>
                            <FilmItem film={film}/>
                        </Col>
                    )
                }
            </Row>
        </div>
    );

};

export default FilmGroup;
