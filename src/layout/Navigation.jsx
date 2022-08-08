import React, { useState } from "react";
import { Menu, Col, Row, Input, Image } from "antd";
import { NavLink } from "react-router-dom";
import imgLogo from "./logo.png";

export default function Navigation() {
  const { Search } = Input;
  const [current, setCurrent] = useState("home");
  const onSearch = (value) => console.log(value);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const register = () => {};

  const login = () => {};

  return (
    <div>
      <Row>
        <Col span={4} offset={4} style={{ marginTop: "15px" }}>
          <Image src={imgLogo} style={{ float: "left" }} />
        </Col>
        <Col span={4}>
          <Menu
            theme="light"
            onClick={onClick}
            mode="horizontal"
            selectedKeys={[current]}
          >
            <Menu.Item key="index">
              <NavLink to={"/"}> 首页 </NavLink>
            </Menu.Item>
            <Menu.Item key="movie">
              <NavLink to={"/movie"}> 电影 </NavLink>
            </Menu.Item>
            <Menu.Item key="food">
              <NavLink to={"/food"}> 美食 </NavLink>
            </Menu.Item>
            <Menu.Item key="friend">
              <NavLink to={"/friend"}> 交友 </NavLink>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={8}>
          <div style={{ float: "right" }}>
            <Search
              placeholder="搜索电影"
              style={{ width: 250, marginTop: "15px" }}
              enterButton
            />
            <label style={{ marginLeft: "10px" }}>
              <b onClick={register} style={{marginRight:"10px"}}>
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
