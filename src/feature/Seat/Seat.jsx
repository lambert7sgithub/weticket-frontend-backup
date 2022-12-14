import React, {useEffect, useState} from "react";
import "./Seat.css";
import MovieDetail from "./MovieDetail";
import {  getAllSeats, getMovieDetail } from "../../api/movie";
import { useParams } from "react-router-dom";

export default function Seat() {

  let { screeningId } = useParams();
  const [seats, setSeats] = useState([]);
  const sortedSeats = [];
  const [userSelectedSeats, setUserSelectedSeats] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});


  
  const judge = (status)=>{
    if(status === 1){
      return 'seat sold item'
    }else if(status === 3){
      return 'seat love item'
    }else if(status === 0)
      return 'seat selectable item'
    }
    // item.status === 0 ? "seat selectable item" : "seat sold item"
  

  useEffect(() => {
    getAllSeats(screeningId)
      .then((response) => {
        const seats = response.data;
        for (let i = 0; i < 12; i++) {
          for (let j = 0; j < 12; j++) {
            let seat = seats.filter((seat) => seat.x === i && seat.y === j);
            const { x, y, status } = seat[0];
            sortedSeats.push({ x, y, status });
          }
        }
        console.log(sortedSeats)
        setSeats(sortedSeats);
        console.log(sortedSeats);
      })
      .catch((error) => {
        alert(error);
      });
// eslint-disable-next-line
  }, []);

  useEffect(() => {
    getMovieDetail(screeningId).then((response) => {
      setMovieDetail(response.data);
    });
// eslint-disable-next-line
  }, []);
  const changeSeatStatus = (seatIndex) => {
    let seat = seats[seatIndex];
    if (seat.status === 0) {
      seat.status = 1;
    } else {
      seat.status = 0;
    }

    let newUserSelectedSeats = [...userSelectedSeats];

    newUserSelectedSeats.push(seat);

    let filterSeat = newUserSelectedSeats.filter((seat) => {
      return seat.status === 1;
    });
    setUserSelectedSeats(filterSeat);

    let newSeats = [...seats];
    newSeats[seatIndex] = seat;
    setSeats(newSeats);
  };

  return (
    <div className="seats-content">
      <div className="seats-block">
        <div className="screen-container" style={{ left: "5px" }}>
          <div className="screen">????????????</div>
        </div>

        <div className="seats-wrapper">
          <div style={{ padding: "0 40px", width: "580px" }}>
            {seats.map((item, seatIndex) => (
              <span key={seatIndex} style={{ paddingBottom: "20px" }}>
                <span
                  className={judge(item.status)}
                  onClick={() => changeSeatStatus(seatIndex)}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <MovieDetail
          movieDetail={movieDetail}
          screening={screeningId}
          seats={userSelectedSeats}
        />
      </div>
    </div>
  );
}
