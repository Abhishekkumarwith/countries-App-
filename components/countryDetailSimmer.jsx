import React from "react";

import "./simmerList.css";

export default function CountryDetailSimmer() {
  return (
    <div className="country-detail-container">
      <div className="container">
        <div className="btn skeleton"></div>

        <div className="simmer">
            <div className="flag skeleton"></div>
          <div className="details">
            {" "}
            <div className="title skeleton"></div>
            <div className="line full skeleton"></div>
            <div className="line medium skeleton"></div>
            <div className="line short skeleton"></div>
            <div className="line medium skeleton"></div>
            <div className="border-boxes">
              <div className="border-box skeleton"></div>
              <div className="border-box skeleton"></div>
              <div className="border-box skeleton"></div>
              <div className="border-box skeleton"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
