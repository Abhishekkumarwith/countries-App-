import React from "react";
import { Link } from "react-router-dom";

export default function CountriesCard({name,flag,capital,region,population,data}) {
  
  return (
    <Link
      to={`/${name}`}
      key={name}
      className="countryCard"
      state={data}
    >
    <div className="flag-container">
        <img src={flag}  alt={name}/>
    </div>
      <div className="text-tital">
        <h3 className="country-name">{name}</h3>
        <p>
          <b>Population:</b>{" "}
          <span>{population.toLocaleString("en-IN")}</span>
        </p>
        <p>
          <b>Region:</b> <span>{region}</span>
        </p>
        <p>
          <b>Capital:</b> <span>{capital}</span>
        </p>
      </div>
    </Link>
  );
}
