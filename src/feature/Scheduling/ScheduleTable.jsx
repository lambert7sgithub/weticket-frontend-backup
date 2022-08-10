import React, { useState } from "react";
import { Button, Col, Divider, Radio, Row, Table } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./ScheduleTable.css";
import { getCinema } from "../../api/cinema";
import { getSchedule } from "../../api/Schedule";
import { useEffect } from "react";
import dayjs from "dayjs";
const { Column } = Table;
const ScheduleTable = (props) => {
  const passMovieId = props.movieId;
  const [cinemas, setCinemas] = useState([]);
  const [date, setDate] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);

  const [chosenDate, setChosenDate] = useState(0);
  const [chosenCinemaId, setChosneCinemaId] = useState(0);

  const [searchDateString, setSearchDateString] = useState("");
  const format = "MM月DD日";
  useEffect(() => {
    getCinema().then((response) => {
      setCinemas(response.data);
    });
    getSchedule(chosenCinemaId, passMovieId).then((response) => {
      setScheduleData(response.data);
    });
  }, [chosenCinemaId, passMovieId]);
  useEffect(() => {
    setDate([dayjs(), dayjs().add(1, "day"), dayjs().add(2, "day")]);
  }, []);
  useEffect(() => {
    // TODO
    if (chosenDate !== 0) {
      searchDateString.format("YYYY/MM/DD 00:00:00");
      console.log(searchDateString);
    }
  }, [chosenCinemaId, chosenDate, searchDateString]);

  const updateCinema = (event) => {
    setChosneCinemaId(event.target.value);
  };
  const updateDate = (event) => {
    setChosenDate(event.target.value);
    setSearchDateString(date[chosenDate]);
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
            <div className="contents">
              <Radio.Group
                defaultValue={1}
                size="small"
                className="cinema"
                buttonStyle="solid"
                onChange={updateCinema}
              >
                {cinemas.map((item) => {
                  return (
                    <Radio.Button key={item.cinemaId} value={item.cinemaId}>
                      {item.cinemaName}
                    </Radio.Button>
                  );
                })}
              </Radio.Group>

              <p className="more-cinema">
                更多
                <ArrowRightOutlined className="arrow" />
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={4} className="search-header">
            选择时间
          </Col>
          <Col span={20} className="search-content">
            <div className="date-contents">
              <Radio.Group
                defaultValue={0}
                size="small"
                className="cinema"
                buttonStyle="solid"
                onChange={updateDate}
                style={{
                  marginTop: 16,
                }}
              >
                {date.map((item, index) => {
                  return (
                    <Radio.Button key={index} value={index}>
                      {item.format(format)}
                    </Radio.Button>
                  );
                })}
              </Radio.Group>
            </div>
          </Col>
        </Row>
      </div>
      <Table
        dataSource={scheduleData}
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
          dataIndex="moviePrice"
          key="moviePrice"
          align="center"
          render={(_, record) => (
            <div>
              <span className="current-price">￥{record.moviePrice}</span>
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
