// Home.jsx

import React, { useContext, useState } from 'react';

import SearchCountry from "./SearchCountry";
import FilterOption from "./FilterOption";
import CountryList from "./CountryList";
import { ThemeContext } from '../contexts/ThemeContext';

export default function Home() {
  const [query, setCountry] = useState("");
  

 const [isdark]= useContext(ThemeContext)



  return (

    <main className={
      isdark ? 'dark' : ''}>
      <div className="filter-search-container">
        <SearchCountry setCountry={setCountry} />
        <FilterOption setRegion={setCountry} />
      </div>
      {query === "unmount" ? "" : <CountryList setQuery={query} />}
    </main>
  );
}