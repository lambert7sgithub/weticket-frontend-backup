import React from "react";
import './Footer.css';
import {Divider} from 'antd';

const Footer = () => {


    return (
        <div>
        <div>
        <Divider>Introduce</Divider>
        </div>
        <div className="footer">
            <div className="favicon"></div>
            <div className="introduct">
                <div className="text">We Ticket</div>
                <div>Made By: 404-BRAIN-NOT-FOUND</div>
                <div>0756-8822680</div>
            </div>
        </div>
        </div>
    )
}

export default Footer;