import React from "react";

export default function FilterOption({setRegion}) {
  return (
    <select className="filter-by-region" onChange={(e)=>{
      setRegion(e.target.value.toLowerCase())
    }}>
      <option hidden value="Filter by Region" >
        Filter by a Region
      </option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
