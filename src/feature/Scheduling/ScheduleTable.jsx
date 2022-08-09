import React from "react";
import { Table, Button, Divider, Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
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
  const date = ["8月9日", "8月10日", "8月11日"];
  const cinemaName = [
    "a cinema(qwertyuiopas)",
    "corn cinema",
    "a cinema(qwertyuiopas) to test",
    "a cinema(qwertyuiopas)",
    "a cinema(qwertyuiopas)",
    "cinema(qwertyuiopas)",
    "test cinema",
    "no name cinema",
  ];
  return (
    <div className="schedule-table">
      <span className="title">选座购票</span>
      <Divider className="divider"></Divider>
      <div className="search">
        <Row className="search-row">
          <Col span={4} className="search-header">
            选择影院
          </Col>
          <Col span={20} className="search-content">
            <p className="contents">
              {cinemaName.map((item, index) => {
                return (
                  <span key={index} className="cinema">
                    {item}
                  </span>
                );
              })}
              <p className="more-cinema">
                更多
                <ArrowRightOutlined style={{ marginLeft: "5px" }} />
              </p>
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={4} className="search-header">
            选择时间
          </Col>
          <Col span={20} className="search-content">
            <p className="date-contents">
              {date.map((item, index) => {
                return (
                  <text key={index} className="cinema">
                    {item}
                  </text>
                );
              })}
            </p>
          </Col>
        </Row>
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
          render={(_, record) => <Button type="primary">选座购票</Button>}
        />
      </Table>
    </div>
  );
};

export default ScheduleTable;
