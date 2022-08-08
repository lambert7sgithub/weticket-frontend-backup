import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Affix } from "antd";
import Navigation from "./Navigation";

const { Content, Footer, Header } = Layout;
const WeTicketLayout = () => {
  const env = process.env;
  console.log(env);

  const [bottom,setBottom] = useState(10)
  return (
    <div>
      <Layout>
        <Header style={{ background: "#fff" }}>
          <Navigation />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Affix offsetBottom={bottom}>
          <Footer>Footer</Footer>
        </Affix>
      </Layout>
    </div>
  );
};

export default WeTicketLayout;
