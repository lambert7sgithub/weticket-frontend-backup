import React, {useEffect, useState} from "react";
import {Button, Col, Divider, Radio, Row, Table} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import "./ScheduleTable.css";
import {getCinema} from "../../api/cinema";
import {getSchedule, getScheduleByTime} from "../../api/Schedule";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";

const {Column} = Table;

const ScheduleTable = (props) => {
  const navigate = useNavigate();
  const passMovieId = props.movieId;

  const [cinemas, setCinemas] = useState([]);
  const [date, setDate] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);

  const [chosenDate, setChosenDate] = useState(dayjs());
  const [chosenCinemaId, setChosneCinemaId] = useState(0);
  const [chosenCinemaName, setChosenCinemaName] = useState("");
  const [chosenLocation, setChosenLocation] = useState("");

  useEffect(() => {
    getCinema().then((response) => {
      setCinemas(response.data);
      setChosenCinemaName(response.data[0].cinemaName);
      setChosenLocation(response.data[0].location);
      getSchedule(response.data[0].cinemaId, passMovieId).then((response) => {
        setScheduleData(response.data);
      });
    });
    setDate([dayjs(), dayjs().add(1, "day"), dayjs().add(2, "day")]);
  }, [passMovieId]);
  useEffect(() => {
  }, []);
  useEffect(() => {
    // TODO
    if (!dayjs().isSame(chosenDate, "day")) {
      getScheduleByTime(
          chosenCinemaId,
          passMovieId,
          chosenDate.format("YYYY-MM-DD 00:00:00")
      ).then((response) => {
        setScheduleData(response.data);
      });
    } else {
      getScheduleByTime(
        chosenCinemaId,
        passMovieId,
        chosenDate.format("YYYY-MM-DD HH:mm:ss")
      ).then((response) => {
        setScheduleData(response.data);
      });
    }
  }, [chosenCinemaId, passMovieId, chosenDate]);

  const updateCinema = (event) => {
    setChosneCinemaId(event.target.value);
    setChosenCinemaName(event.target.cinemaName);
    setChosenLocation(event.target.address);
  };
  const updateDate = (event) => {
    setChosenDate(event.target.dayDate);
  };

  const toSeat = (screeningId) => {
    navigate(
        "/Scheduling/" + passMovieId + "/screening/" + screeningId + "/seat"
    );
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
                      <Radio.Button
                          key={item.cinemaId}
                          value={item.cinemaId}
                          cinemaName={item.cinemaName}
                          address={item.location}
                      >
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
                      <Radio.Button key={index} value={index} dayDate={item}>
                        {dayjs(item).format("MM[月]DD[日]")}
                      </Radio.Button>
                  );
                })}
              </Radio.Group>
            </div>
          </Col>
        </Row>
      </div>
      <div className="address">
        <span className="cinema-name">{chosenCinemaName}</span>
        <span className="cinema-address">地址：{chosenLocation}</span>
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
                  <div className="start-time">
                    {dayjs(record.startDate).format("HH:mm")}
                  </div>
                  <div className="end-time">
                    预计{dayjs(record.endTime).format("HH:mm")}结束
                  </div>
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
          dataIndex="auditoriumName"
          key="auditoriumName"
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
          render={(record) => (
            <Button type="primary" onClick={() => toSeat(record.screeningId)}>
              选座购票
            </Button>
          )}
        />
      </Table>
    </div>
  );
};

export default ScheduleTable;
