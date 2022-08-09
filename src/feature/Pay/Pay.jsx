import React from 'react';
import { Table,Tag } from 'antd';
import './Pay.css';


const Pay = () => {
    const columns = [
        {
            title: '电影',
            dataIndex: 'pictureAddress',
            width: "400px",
            render: (record) => 
            <div className="movieName">
            <div>
            <span><img src={record.picture} alt="" className="photo" /> </span>
            </div>
            <div>
            <span className="nameSpan">{record.name} </span>片长：120分钟  
            </div>
            </div>,
        },
        {
            title: '场次',
            className: 'column-money',
            dataIndex: 'money',
            align: 'center',
            render: (record) =><div className="divFontSize"><div>珠海英皇电影城</div><div>4号激光厅</div><div>8月8日(周一)22:20</div></div> ,
        },
        {
            title: '票数/座位',
            dataIndex: 'address',
            align: 'center',
            render: (record) =><div className="divFontSize"><div>1张</div><div><Tag className="divFontSize">9排02座</Tag></div></div> ,
        },
        {
            title: '金额小计',
            dataIndex: 'address',
            align: 'center',
            render: (record) =><div className="moneyStyle">￥39.90</div> ,
        },
    ];
    const data = [
        {
            key: '1',
            pictureAddress: {
                picture: '/photos/1.jpg',
                name: "旅行记"
            },
            money: '￥300,000.00',
            address: 'New York No. 1 Lake Park',
        },
    ];

    return (
        <div>
            <div></div>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() => '订单号：'}
                footer={() => <div className="footerStyle">实付款：<span className="moneyStyle">￥39.90</span></div>}
            />
        </div>
    );

}

export default Pay;