import React from 'react';
import {Button, Col, Row} from "antd";

const FilmListHeader = () => {

    return (
        <div>
            <Row>
                <Col span={8} >
                    <h1>正在热映(10部)</h1>
                </Col>
                <Col offset={8} span={8}>
                    <Button type="text" size="lager" danger>所有></Button>
                </Col>
            </Row>
        </div>
    );
}

export default FilmListHeader;
