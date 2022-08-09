import React, { useState } from "react";
import { Col, Input, Menu, Row } from "antd";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const { Search } = Input;
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const register = () => {};

  const login = () => {};

  return (
    <div>
      <Row>
        <Col span={5} offset={4}>
          <NavLink to={"/"}>
            <div className="favicon"></div>
          </NavLink>
        </Col>
        <Col span={8}>
          <Menu
            theme="light"
            onClick={onClick}
            mode="horizontal"
            selectedKeys={[current]}
          >
            <Menu.Item key="index">
              <NavLink to={"/"}>首页</NavLink>
            </Menu.Item>
            <Menu.Item key="movie">
              <NavLink to={"/movie"}>电影</NavLink>
            </Menu.Item>
            <Menu.Item key="food">
              <NavLink to={"/food"}>美食</NavLink>
            </Menu.Item>
            <Menu.Item key="friend">
              <NavLink to={"/friend"}>交友</NavLink>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={6}>
          <div>
            <Search
              style={{ width: 250, marginTop: "15px" }}
              placeholder="搜索电影"
              enterButton
            />
            <label className="right">
              <b onClick={register}>
                <NavLink to={"register"}>注册</NavLink>
              </b>
              <b onClick={login}>
                <NavLink to={"login"}>登录</NavLink>
              </b>
            </label>
          </div>
        </Col>
      </Row>
    </div>
  );
}
