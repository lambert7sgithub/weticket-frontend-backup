import React from "react";
import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import Navigation from "../feature/Navigation/Navigation";

const {Content, Footer, Header} = Layout;
const WeTicketLayout = () => {

    return (
        <div>
            <Layout>
                <Header style={{background: "#fff",padding:'0'}}>
                    <Navigation/>
                </Header>
                <Content style={{padding:'0'}}>
                    <Outlet/>
                </Content>

                <Footer style={{padding:'0'}}>Made By ❤ 404-BRAIN-NOT-FOUND</Footer>
            </Layout>
        </div>
    );
};

export default WeTicketLayout;
