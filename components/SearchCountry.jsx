import React from "react";

export default function SearchCountry({setCountry}) {
  return (
    <div className="search-country">
      <label htmlFor="search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>
      <input
        type="text"
        name="text"
        placeholder="Search for a country"
        id="search"
        onInput={(e)=>setCountry(e.target.value.toLowerCase())}
      />
    </div>
  );
}
