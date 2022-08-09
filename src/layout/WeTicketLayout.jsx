import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Affix } from "antd";
import Navigation from "../Navigation/Navigation";

const { Content, Footer, Header } = Layout;
const WeTicketLayout = () => {

  const [bottom] = useState(10)
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
