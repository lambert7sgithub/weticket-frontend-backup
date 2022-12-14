import { Table, Tag, message } from "antd";
import "./Pay.css";
import Clock from "./Clock";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import dayjs from "dayjs";
import { getBookingSeats } from "../../api/movie";
import { useNavigate } from "react-router-dom";

const Pay = (props) => {
  const navigate = useNavigate();
  let movieDetail = JSON.parse(localStorage.getItem("movieDetail"));
  let selectSeats = JSON.parse(localStorage.getItem("selectSeats"));
  let screeningId = JSON.parse(localStorage.getItem("screening"));
  let willingPair = JSON.parse(localStorage.getItem("willingPair"));
  let seats = [];
  selectSeats.map((seat) => seats.push([seat.x, seat.y]));
  let seatBookingRequest = {
    bookings: seats,
    willingPair: willingPair,
  };

  const confirmOrder = () => {
    getBookingSeats(screeningId, seatBookingRequest)
      .then((response) => {
        message.success({ content: "订单支付成功！" });
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const columns = [
    {
      title: "电影",
      dataIndex: "pictureAddress",
      width: "400px",
      render: (record) => (
        <div className="movieName">
          <div>
            <span>
              <img src={movieDetail.picture} alt="" className="photo" />{" "}
            </span>
          </div>
          <div>
            <div className="nameSpan">
              <div>{movieDetail.movieName} </div>{" "}
              <div>片长：{movieDetail.movieLength}分钟 </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "场次",
      className: "column-money",
      dataIndex: "screening",
      align: "center",
      render: (recod) => (
        <div className="divFontSize">
          <div>{movieDetail.cinema}</div>
          <div>{movieDetail.screeningRoom}</div>
          <div>{dayjs(movieDetail.date).format("YYYY-MM-DD HH:mm")}</div>
        </div>
      ),
    },
    {
      title: "票数/座位",
      dataIndex: "seat",
      align: "center",
      render: () => (
        <div className="divFontSize">
          <div>{selectSeats.length}张</div>
          <div>
            <Tag className="divFontSize">
              {selectSeats.map((seat, index) => {
                return (
                  <div key={index}>
                    {seat.x + 1}排{seat.y + 1}座
                  </div>
                );
              })}
            </Tag>
          </div>
        </div>
      ),
    },
    {
      title: "单价",
      dataIndex: "money",
      align: "center",
      render: () => <div className="moneyStyle">￥{movieDetail.price} /张</div>,
    },
  ];

  const data = [
    {
      key: "",
      pictureAddress: {
        picture: "",
        name: "",
      },
      money: "",
      address: "",
    },
  ];

  const paginationProps = {
    hideOnSinglePage: true,
  };

  return (
    <div className="pay-panel">
      <div className="remindPay">
        <Clock duration={900} />
      </div>
      <Table
        columns={columns}
        bordered
        dataSource={data}
        pagination={paginationProps}
        title={() => "订单详情"}
        footer={() => (
          <div className="footerStyle">
            实付款：
            <span className="moneyStyle">
              {selectSeats.length * movieDetail.price}
            </span>
          </div>
        )}
      />
      <div className="buyButtonDiv">
        <Button
          type="primary"
          shape="round"
          icon={<CheckCircleOutlined />}
          size="large"
          block="true"
          className="buyButton"
          onClick={confirmOrder}
        >
          确认订单，立即支付
        </Button>
      </div>
    </div>
  );
};

export default Pay;
