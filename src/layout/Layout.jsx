import React from 'react';
import {Outlet} from "react-router-dom";

const Layout = () => {
    const env = process.env;
    console.log(env);
    return (
    <div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
)
    ;
};

export default Layout;
