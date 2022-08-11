import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "../feature/Navigation/Navigation";
import "./WeTicketLayout.css";
import DefineFooter from "../feature/Footer/Footer";
const { Content, Footer, Header } = Layout;

const WeTicketLayout = () => {
  return (
    <div>
      <Layout className="layout">
        <Header style={{ background: "#fff" }}>
          <Navigation />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>
          <DefineFooter></DefineFooter>
        </Footer>
      </Layout>
    </div>
  );
};

export default WeTicketLayout;
