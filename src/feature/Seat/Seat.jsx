import React, { useState } from "react";
import "./Seat.css";
import { nanoid } from "nanoid";
import MovieDetail from "./MovieDetail";
import { getSeatDetail } from "../../api/movie";
import { message } from "antd";

export default function Seat(props) {
  // id, status,
  //false 已选 true 可选 2 已选中

  const [seats, setSeats] = useState(
    Array.from({ length: 10 }, () =>
      Array.from({ length: 12 }, () => ({
        id: nanoid(),
        isSold: false,
      }))
    )
  );

  const movieDetail = getSeatDetail(props.movieId, props.cinemaId, props.scnId)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      message.error("无法拉取电影详情");
    });
  const changeSeatStatus = (rowIndex, colIndex) => {
    let copy = [...seats];
    copy[rowIndex][colIndex].isSold = !copy[rowIndex][colIndex].isSold;
    setSeats(copy);
  };

  return (
    <div className="seats-content">
      <div className="seats-block">
        <div className="screen-container" style={{ left: "5px" }}>
          <div className="screen">银幕中央</div>
        </div>

        <div className="seats-wrapper">
          <div style={{ padding: "0 40px", width: "580px" }}>
            {seats.map((items, rowIndex) =>
              items.map((item, colIndex) => (
                <span key={colIndex} style={{paddingBottom:'20px'}}>
                  <span
                    className={
                      item.isSold === false
                        ? "seat selectable item"
                        : "seat sold item"
                    }
                    onClick={() => changeSeatStatus(rowIndex, colIndex)}
                  />
                </span>
              ))
            )}
          </div>
        </div>
      </div>
      <div>
        <MovieDetail movieDetail={movieDetail} />
      </div>
    </div>
  );
}
