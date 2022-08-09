import React, { useState } from "react";
import { Input, Menu } from "antd";
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
    <div style={{ height: "70px", width: "100%" }}>
      <div className="header-logo">
        <NavLink to={"/"}>
          <div className="favicon"></div>
        </NavLink>
      </div>
      <div className="header-links">
        <Menu
          theme="light"
          onClick={onClick}
          mode="horizontal"
          selectedKeys={[current]}
        >
          <Menu.Item key="index" style={{paddingRight:"100px"}}>
            <NavLink to={"/"}>首页</NavLink>
          </Menu.Item>
          <Menu.Item key="movie" style={{paddingRight:"100px"}}>
            <NavLink to={"/movie"}>电影</NavLink>
          </Menu.Item>
          <Menu.Item key="food" style={{paddingRight:"100px"}}>
            <NavLink to={"/food"}>美食</NavLink>
          </Menu.Item>
          <Menu.Item key="friend">
            <NavLink to={"/friend"}>交友</NavLink>
          </Menu.Item>
        </Menu>
      </div>
      <div className="header-search">
        <Search placeholder="搜索电影" enterButton />
      </div>
      <label className="header-user">
        <b onClick={register}>
          <NavLink to={"register"}>注册</NavLink>
        </b>
        <b onClick={login}>
          <NavLink to={"login"}>登录</NavLink>
        </b>
      </label>
    </div>
  );
}
