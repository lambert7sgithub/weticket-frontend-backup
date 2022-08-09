import React, {useState} from "react";
import {Button, Col, Divider, Radio, Row, Table} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import "./ScheduleTable.css";

const {Column} = Table;
const ScheduleTable = () => {
  const data = [
    {
      screeningId: 1,
      movieId: 1,
      audioriumId: 1,
      auditoriumNmae: "work",
      startTime: "12:00",
      endTime: "12:30",
      seatSituation: "有",
      language: "国语2D",
      price: 10,
    },
    {
      screeningId: 2,
      movieId: 1,
      audioriumId: 1,
      auditoriumNmae: "work",
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
      auditoriumNmae: "work",
      startTime: "13:30",
      endTime: "14:50",
      language: "国语2D",
      seatSituation: "有",
      price: 20,
    },
    {
      screeningId: 4,
      movieId: 1,
      audioriumId: 1,
      auditoriumNmae: "work",
      startTime: "13:30",
      endTime: "14:50",
      language: "国语2D",
      seatSituation: "有",
      price: 20,
    },
    {
      screeningId: 5,
      movieId: 1,
      audioriumId: 1,
      auditoriumNmae: "work",
      startTime: "13:30",
      endTime: "14:50",
      language: "国语2D",
      seatSituation: "有",
      price: 20,
    },
  ];
  const date = ["8月9日", "8月10日", "8月11日"];
  const cinemaName = [
    "a1 cinema(qwertyuiopas)",
    "corn cinema",
    "a2 cinema (qwertyuiopas) to test",
    "a3 cinema (qwertyuiopas)",
    "a4 cinema (qwertyuiopas)",
    "cinema(qwertyuiopas)",
    "test cinema",
    "no name cinema",
  ];
  const [chosenDate, setChosenDate] = useState(0);
  const [chosenCinema, setChosneCinema] = useState(0);

  const updateCinema = (event) => {
    setChosneCinema(event.target.value);
    console.log(chosenCinema);
    console.log(cinemaName[chosenCinema + 1]);
  };
  const updateDate = (event) => {
    setChosenDate(event.target.value);
    console.log(date[chosenDate]);
  };
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
                <Radio.Group
                    defaultValue={chosenCinema}
                    size="small"
                    className="cinema"
                    buttonStyle="solid"
                    onChange={updateCinema}
                    style={{
                      marginTop: 16,
                    }}
                >
                  {cinemaName.map((item, index) => {
                    return <Radio.Button value={index}>{item}</Radio.Button>;
                  })}
                </Radio.Group>

                <p className="more-cinema">
                  更多
                  <ArrowRightOutlined style={{marginLeft: "5px"}}/>
                </p>
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={4} className="search-header">
              选择时间
            </Col>
            <Col span={20} className="search-content">
              <div className="date-contents">
                <Radio.Group
                    defaultValue={chosenDate}
                    size="small"
                    className="cinema"
                    buttonStyle="solid"
                    onChange={updateDate}
                    style={{
                      marginTop: 16,
                    }}
                >
                  {date.map((item, index) => {
                    return <Radio.Button value={index}>{item}</Radio.Button>;
                  })}
                </Radio.Group>
              </div>
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
                    <div className="start-time">{record.startTime}</div>
                    <div className="end-time">预计{record.endTime}结束</div>
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
                    <span className="current-price">￥{record.price}</span>
                  </div>
              )}
          />
          <Column
              title="选座购票"
              key="action"
              align="center"
              render={(_) => <Button type="primary">选座购票</Button>}
          />
        </Table>
    </div>
  );
};

export default ScheduleTable;
