// import React, { useState } from "react";
// import "./personorder.css";
// import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import {
  TagOutlined,
  SolutionOutlined,
  RedEnvelopeOutlined,
  UserOutlined,
  LikeOutlined,
} from "@ant-design/icons";
// const PersonOrder = () => {
//   return (
//     <div className="orderList">

//         <div className="nav">
//           <div>
//             <NavLink to="/" exact>
//               <SolutionOutlined />
//               &nbsp;&nbsp;个人中心
//             </NavLink>
//           </div>
//           <div>
//             <NavLink to="/MyOrders">
//               <TagOutlined />
//               &nbsp;&nbsp;我的订单
//             </NavLink>
//           </div>
//           <div>
//             <NavLink to="/" exact>
//               <RedEnvelopeOutlined />
//               &nbsp;&nbsp;账户余额
//             </NavLink>
//           </div>
//           <div>
//             <NavLink to="/" exact>
//               <UserOutlined />
//               &nbsp;&nbsp;个人资料
//             </NavLink>
//           </div>
//           <div>
//             <NavLink to="/" exact>
//               <LikeOutlined />
//               &nbsp;&nbsp;我的评论
//             </NavLink>
//           </div>
//         </div>

//         <div className="views">

//         </div>

//     </div>

//   );
// };

// export default PersonOrder;

// import { AuditOutlined } from "@ant-design/icons";
// import { Radio, Space, Tabs } from "antd";
// import React, { useState } from "react";
// const { TabPane } = Tabs;

// const PersonOrder = () => {
//   const [tabPosition, setTabPosition] = useState("left");

//   const changeTabPosition = (e) => {
//     setTabPosition(e.target.value);
//   };

//   return (
//     // <Space
//     //   style={{
//     //     marginBottom: 24,

//     //   }}
//     // >
//     //   {/* Tab position:
//     //   <Radio.Group value={tabPosition} onChange={changeTabPosition}>
//     //     <Radio.Button value="top">top</Radio.Button>
//     //     <Radio.Button value="bottom">bottom</Radio.Button>
//     //     <Radio.Button value="left">left</Radio.Button>
//     //     <Radio.Button value="right">right</Radio.Button>
//     //   </Radio.Group> */}
//     // </Space>
//     <div className="orderList">

//         <Tabs tabPosition={tabPosition} className="views">
//           <TabPane tab="个人中心" key="1">
//             Content of Tab 1
//           </TabPane>
//           <TabPane tab="我的订单" key="2">
//             Content of Tab 2
//           </TabPane>
//           <TabPane tab="我的评论" key="3">
//             Content of Tab 3
//           </TabPane>
//         </Tabs>

//     </div>
//   );
// };

// export default PersonOrder;

import React, { Component } from "react";
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
          <div onClick={() => this.tabClick(1)}>
            <UserOutlined />
            &nbsp;&nbsp;个人资料
          </div>
          <div onClick={() => this.tabClick(2)} >
            <RedEnvelopeOutlined />
            &nbsp;&nbsp;美食记录
          </div>
          <div onClick={() => this.tabClick(3)}>
            <LikeOutlined />
            &nbsp;&nbsp;交友记录
          </div>
        </div>
        <div className="tabs-content">
          {<section>{this.changeComponent(this.state.cur)}</section>}
        </div>
        
      </div>
      //  <div className="tabs-title">
      //     <ul>
      //       {this.state.tabItem.map((item, index) => (
      //         <li onClick={() => this.tabClick(index)}>{item.name}</li>
      //       ))}
      //     </ul>
      //   </div>

        
      
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
