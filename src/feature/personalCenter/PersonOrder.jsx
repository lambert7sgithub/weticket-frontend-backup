import {RedEnvelopeOutlined, SolutionOutlined, TagOutlined,} from "@ant-design/icons";
import React, {Component} from "react";
import MyFriend from "./MyFriend";
import PersonMessage from "./PersonMessage";
import MyOrders from "./MyOrders";
import MyFoot from "./MyFoot";
import "./personorder.css";

export default class PersonOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cur: 0,
      tabItem: [
        { name: "个人中心" },
        { name: "我的订单" },
        { name: "账户余额" },
        { name: "个人资料" },
        { name: "我的评论" },
      ],
      // ComponentTab: [Message, AddressBook, MyGroups],
    };
  }
  render() {
    return (
      <div className="orderList">
        <div className="nav">
          <div>
            <SolutionOutlined />
            &nbsp;&nbsp;个人中心
          </div>
          <div  onClick={() => this.tabClick(0)}>
            <TagOutlined />
            &nbsp;&nbsp;我的订单
          </div>
          <div onClick={() => this.tabClick(2)} >
            <RedEnvelopeOutlined />
            &nbsp;&nbsp;美食订单
          </div>
          
        </div>
        <div className="tabs-content">
          {<section>{this.changeComponent(this.state.cur)}</section>}
        </div>
        
      </div>
        
    );
  }
  tabClick(index) {
    this.setState({
      cur: index,
    });
  }

  changeComponent(index) {
    switch (index) {
      case 0:
        return <MyOrders />;
      case 1:
        return <PersonMessage />;
      case 2:
        return <MyFoot />;
      case 3:
        return <MyFriend />;
      default:
        break;
    }
  }
}
