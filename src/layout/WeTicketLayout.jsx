import React from "react";
import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import Navigation from "../Navigation/Navigation";

const {Content, Footer, Header} = Layout;
const WeTicketLayout = () => {

    return (
        <div>
            <Layout>
                <Header style={{background: "#fff"}}>
                    <Navigation/>
                </Header>
                <Content>
                    <Outlet/>
                </Content>

                <Footer>Made By ❤ 404-BRAIN-NOT-FOUND</Footer>
            </Layout>
        </div>
    );
};

export default WeTicketLayout;
