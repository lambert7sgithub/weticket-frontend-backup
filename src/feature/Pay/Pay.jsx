import React from 'react';
import { Table } from 'antd';


const Pay = ()=>{
    const columns = [
        {
          title: '电影',
          dataIndex: 'pictureAddress',
          align: 'center',
          render: (record) => <img src={record} alt="" />,
        },
        {
          title: '场次',
          className: 'column-money',
          dataIndex: 'money',
          align: 'center',
        },
        {
          title: '票数/座位',
          dataIndex: 'address',
          align: 'center',
        },
        {
            title: '金额小计',
            dataIndex: 'address',
            align: 'center',
          },
      ];
      const data = [
        {
          key: '1',
          pictureAddress: '../../../public/photos/1.jpg',
          money: '￥300,000.00',
          address: 'New York No. 1 Lake Park',
        },
        // {
        //   key: '2',
        //   name: 'Jim Green',
        //   money: '￥1,256,000.00',
        //   address: 'London No. 1 Lake Park',
        // },
        // {
        //   key: '3',
        //   name: 'Joe Black',
        //   money: '￥120,000.00',
        //   address: 'Sidney No. 1 Lake Park',
        // },
      ];

    return(
        <div>
        <div> <img src="../../../public/photos/1.jpg" alt=""></img></div>
        <div style={{margin:"0 auto"}}><Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => '订单号：'}
        footer={() => 'Footer'}
      /></div>
      </div>
    );

}

export default Pay;