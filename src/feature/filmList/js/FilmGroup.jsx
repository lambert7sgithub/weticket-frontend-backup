import React from 'react';
import {Col, Row} from "antd";
import FilmItem from "./FilmItem";
import {useSelector} from "react-redux";

const FilmGroup = () => {

    const films = useSelector((state) => state.film.films);

    return (
        <div>
            <Row gutter={16}>
                <Col offset={2}/>
                {
                    films.map((film) =>
                        <Col className="gutter-row" span={4}>
                            <FilmItem key={film.id} film={film}/>
                        </Col>
                    )
                }
            </Row>
        </div>
    );

}

export default FilmGroup;
