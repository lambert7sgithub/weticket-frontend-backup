
import React, { useState } from "react";
import "./Seat.css";
import { nanoid } from "nanoid";
import MovieDetail from "./MovieDetail";

export default function Seat(props) {
  // id, status,
  //false 已选 true 可选 2 已选中
  
//   const seats =  useState(new Array(10).fill(new Array(12).fill(seat)));

  const [seats,setSeats] = useState(Array.from({length:10},()=>Array.from({length:12},()=>({
    id: nanoid(),
    isSold: false,
  }))))
  console.log(seats);


  const changeSeatStatus = (rowIndex,colIndex) => {
    let copy = [...seats];
    copy[rowIndex][colIndex].isSold= !copy[rowIndex][colIndex].isSold;
    setSeats(copy);
  }

  return (
    <div>
      <div className="seat-movie-detail" >
          <MovieDetail movieId={props.movieId} cinemaId={props.cinemaId} scnId={props.scnId}/>
      </div>
      <div className="seats-block">
        <div className="seats-container">
          <div className="screen-container" style={{ left: "5px" }}>
            <div className="screen">银幕中央</div>
            <div className="c-screen-line"></div>
          </div>

          <div className="seats-wrapper">
            <div style={{ padding: "0 40px", width: "580px" }}>
              {seats.map((items,rowIndex) =>
                items.map((item, colIndex) => (
                  <span key={colIndex}>
                    <span className= {item.isSold === false ? "seat selectable item" : "seat sold item"} onClick={() => changeSeatStatus(rowIndex,colIndex)}/>
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

