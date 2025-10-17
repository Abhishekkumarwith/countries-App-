import React, { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard.jsx";
import SimmerList from "./simmerList.jsx";

export default function CountryList({ setQuery }) {
  const [countriesData, setCountries] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/independent";
    fetch(url)
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  return (
    <>
      {!countriesData.length ? (
        <SimmerList />
      ) : (
        <div className="country-container">
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(setQuery)  || country.region.toLowerCase().includes(setQuery)
            )
            .map((country) => {
              return (
                <CountriesCard
                  key={country.name.common}
                  flag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  name={country.name.common}
                  capital={country.capital}
                  data={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
}
