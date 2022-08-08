import React from 'react';
import {Outlet} from "react-router-dom";
import {Layout} from "antd";

const {Content, Footer, Header} = Layout;
const WeTicketLayout = () => {
    const env = process.env;
    console.log(env);
    return (
    <div>
        <Layout>
            <Header>
                Menu
            </Header>
            <Content>
                <Outlet/>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    </div>
)
    ;
};

export default WeTicketLayout;
