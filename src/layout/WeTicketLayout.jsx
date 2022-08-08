import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "./Navigation";

const { Content, Footer, Header } = Layout;
const WeTicketLayout = () => {
  const env = process.env;
  console.log(env);
  return (
    <div>
      <Layout>
        <Header style={{ background: "#fff" }}>
          <Navigation />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer style={{ position: "absolute", bottom: "0", width: "100%" }}>
          Footer
        </Footer>
      </Layout>
    </div>
  );
};

export default WeTicketLayout;
