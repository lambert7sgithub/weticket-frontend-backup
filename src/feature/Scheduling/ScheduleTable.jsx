import React from "react";
import { Table, Button, Divider } from "antd";

import "./ScheduleTable.css";
const { Column } = Table;
const ScheduleTable = () => {
  const data = [
    {
      screeningId: 1,
      movieId: 1,
      audioriumId: 1,
      auditoriumNmae: "Don't want to work",
      startTime: "12:00",
      address: "New York No. 1 Lake Park",
      endTime: "12:30",
      seatSituation: "12/30",
      language: "国语2D",
      price: 10,
    },
    {
      screeningId: 2,
      movieId: 1,
      audioriumId: 1,
      auditoriumNmae: "Don't want to work",
      startTime: "12:30",
      endTime: "13:30",
      language: "国语2D",
      seatSituation: "有",
      price: 15,
    },
    {
      screeningId: 3,
      movieId: 1,
      audioriumId: 1,
      auditoriumNmae: "Don't want to work",
      startTime: "13:30",
      endTime: "14:50",
      language: "国语2D",
      seatSituation: "Sidney No. 1 Lake Park",
      price: 20,
    },
  ];

  return (
    <div className="schedule-table">
      <span className="title">选座购票</span>
      <Divider className="divider"></Divider>
      <div className="search">
        
      </div>
      <Table
        dataSource={data}
        pagination={false}
        rowClassName={(record, index) => (index % 2 === 0 ? "even" : "odd")}
      >
        <Column
          title="放映时间"
          dataIndex="firstName"
          key="firstName"
          align="center"
          render={(_, record) => (
            <div>
              <div class="start-time">{record.startTime}</div>
              <div class="end-time">预计{record.endTime}结束</div>
            </div>
          )}
        />
        <Column
          title="语言版本"
          dataIndex="language"
          key="language"
          align="center"
        />

        <Column
          title="放映厅"
          dataIndex="auditoriumNmae"
          key="auditoriumNmae"
          align="center"
        />
        <Column
          title="座位情况"
          dataIndex="seatSituation"
          key="seatSituation"
          align="center"
        />
        <Column
          title="价格"
          dataIndex="price"
          key="price"
          align="center"
          render={(_, record) => (
            <div>
              <span class="current-price">￥{record.price}</span>
            </div>
          )}
        />
        <Column
          title="选座购票"
          key="action"
          align="center"
          render={(_, record) => (
            <Button
              type="primary"
              style={{ background: "red", borderColor: "red" }}
            >
              选座购票
            </Button>
          )}
        />
      </Table>
    </div>
  );
};

export default ScheduleTable;
