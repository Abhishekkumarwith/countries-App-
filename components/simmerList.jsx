import React from "react";
import "./simmerList.css";



export default function SimmerList() {
  return (
    <div className="country-container">
      {Array.from({ length: 10 }).map((el, i) => {
        return <div key={i} className="skeleton-card"></div>;
      })}
    </div>
  );
}
