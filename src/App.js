import React from "react";
import "./styles.css";

export default function App() {
  const userDataArr = [
    {
      place: "Arrival",
      time: "Sep 4th, 2020 at 7:30pm"
    },
    {
      place: "Departure",
      time: "Sep 6th, 2020 at 10:30pm"
    },
    {
      place: "Room",
      time: "Business Suite"
    }
  ];

  return (
    <div className="panel-container">
      <div className="left">
        <h2>Karthick Rajan Hotel</h2>

        {userDataArr.map((el, idx) => (
          <div key={idx}>
            <h3>{el.place}</h3>
            <p>{el.time}</p>
          </div>
        ))}

        <button>Confirm Reservation</button>
      </div>
      <div className="right"></div>
    </div>
  );
}
