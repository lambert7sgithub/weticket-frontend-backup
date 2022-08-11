import React, { useState } from "react";
import { Button, Input, Menu } from "antd";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
export default function Navigation() {
  const navigate = useNavigate();
  const { Search } = Input;
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    setCurrent(e.key);
  };
  const logout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    window.location.replace("/");
    navigate("/");
  };
  const searchMovie = () => {
    navigate("/result");
  };
  const getUsername = () => {
    const username = sessionStorage.getItem("username");
    return username;
  };
  const toProile=()=>{
      navigate("/personorder");
  }
  const showLoginStatus = () => {
    const username = sessionStorage.getItem("username");
    if (username === undefined || username === null || username.length === 0) {
      return (
        <div>
          <b onClick={() => {}}>
            <NavLink to={"register"}>注册</NavLink>
          </b>
          <b onClick={() => {}}>
            <NavLink to={"login"}>登录</NavLink>
          </b>
        </div>
      );
    } else {
      return (
        <div className="nav-user">
          <div className="header-username" onClick={() => {}}>
            <Button onClick={toProile} >{getUsername()}</Button>
          </div>
          <div className="nav-btn">
            <Button onClick={logout} to={<Login />}>
              登出
            </Button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="header">
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
          <Menu.Item key="index" className="menu-item">
            <NavLink to={"/"}>首页</NavLink>
          </Menu.Item>
          <Menu.Item key="movie" className="menu-item">
            <NavLink to={"/movie"}>电影</NavLink>
          </Menu.Item>
          <Menu.Item key="food" className="menu-item">
            <NavLink to={"/food"}>美食</NavLink>
          </Menu.Item>
          <Menu.Item key="friend" className="menu-item">
            <NavLink to={"/friend"}>交友</NavLink>
          </Menu.Item>
        </Menu>
      </div>

      <div className="header-search">
        <Search placeholder="搜索电影" enterButton onSearch={searchMovie} />
      </div>

      <label className="header-user">{showLoginStatus()}</label>
    </div>
  );
}
