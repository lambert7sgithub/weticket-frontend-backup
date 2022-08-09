import {getScreening} from "../../api/movie";
import {Button, Table} from "antd";
import './Screening.css'

const Screening = (props) => {
  const {movieId, cinemaId} = props;
  const res = getScreening(movieId, cinemaId)
      .then(res => {return res.data})
      .catch(err => {
        console.log(err);
      });
  const columns = [
      {
          title: (<div className="scn-time-header">放映时间</div>),
          dataIndex: 'screeningTime',
          render: (timeDetail) => (
              <div className="scn-time-detail">
                  <div className="scn-begin-time">{timeDetail.beginTime}</div>
                  <div className="scn-leave-time">{timeDetail.leaveTime}</div>
              </div>
          )
      },
      {
          title: '语言版本',
          dataIndex: 'screeningLang',
          render: (lang) => (
              <div className="scn-lang">
                  {lang}
              </div>
          )
      },
      {
          title: '放映厅',
          dataIndex: 'screeningRoom',
          render: (room) => (
              <div className="scn-room">
                  {room}
              </div>
          )
      },
      {
          title: '现价/影院价',
          dataIndex: 'screeningPrice',
          render: (price) => (
              <div className="scn-price">
                  {price}
              </div>
          )
      },
      {
          title: '选座购票',
          dataIndex: 'seatAndTicket',
          render: (screeningId) => (
              <div className="scn-booking-btn">
                  <Button onClick={() => handleBooking(screeningId)} >选座购票</Button>
              </div>
          )
      },
  ];
  const data = res.tableData;
  // demo data should be removed before prod
  // const data = [
  //     {
  //         key:'1',
  //         screeningTime: {
  //             beginTime: 111,
  //             leaveTime: 222,
  //         },
  //         screeningLang: 'Chinese',
  //         screeningRoom: 'Room N1',
  //         screeningPrice: 1.11,
  //         seatAndTicket: '213132123'
  //     }
  // ];

    function handleBooking(bookingDetail) {

    }

    return (
      <div className="scn-table">
          <div className="scn-list-header">
              <div className="cnm-name">
                  {/*{res.cinemaName}*/}
                  Cinema Name
              </div>
              <div className="cnm-loc">
                  {res.cinemaLocation}
                  Cinema Location
              </div>
              <div className="cnm-show-on-map">
                  <a href="/">[Show on map]</a>
              </div>
              <div className="cnm-contact">Phone Number</div>
          </div>
          <Table columns={columns} dataSource={data}/>
      </div>
  );
}
export default Screening;
