import React from "react";

export default function Seat() {
  const seats = new Array(120).fill(0)
  console.log(seats);



  return (
    <div>
        <div class="seats-block">
          <div class="seats-container">
            <div class="screen-container" style="left: 5px">
              <div class="screen">银幕中央</div>
              <div class="c-screen-line"></div>
            </div>

            <div class="seats-wrapper">
              <div style="padding: 0 40px;width: 500px">
                {
                    seats.map((seat,index) => {
                      <span className="seat sold item" key={index}>
                        
                      </span>
                    }
                    )
                }
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
