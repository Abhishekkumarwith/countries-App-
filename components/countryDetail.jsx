import React, { useContext, useEffect, useState } from "react";
import "./country.css";
import { Link, useLocation,  useParams } from "react-router-dom";
import CountryDetailSimmer from "./countryDetailSimmer";
import { ThemeContext } from "../contexts/ThemeContext";
export default function CountryDetail() {
  const[ isDark]=useContext(ThemeContext)
  const params = useParams();
  const countryName = params.country;
  const [country, setCountry] = useState(null);
  const { state } = useLocation();
  function updateCountrydata(data) {
    setCountry({
      name: data.name.common,
      flag: data.flags.svg,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      capital: data.capital.join(","),
      subregion: data.subregion,
      domain: data.tld.join(","),
      language: Object.values(data.languages).join(" , "),
      currency: Object.values(data.currencies)
      .map((c) => c.name)
      .join(" , "),
      borders: [],
    });
    
    if (!data.borders) data.borders = [];
    
    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderName]) => borderName.name.common);
      })
    ).then((borders) => setCountry((prevState) => ({ ...prevState, borders })));
  }
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (state) {
      updateCountrydata(state);
      return;
    }
    
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(([data]) => {
      updateCountrydata(data);
    })
    .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) return <div>country not Found</div>;

  return (
    <>
      {!country ? (
        
          <CountryDetailSimmer />
       
      ) : (
        <main className={`${isDark? 'dark':''}`}>
          <div className="country-detail-container">
            <span className="back-button " onClick={() => history.back()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"></path>
              </svg>{" "}
              &nbsp;Back
            </span>

            <div className="country-details">
              <img src={country.flag} />
              <div className="country-text-container">
                <h1>{country.name}</h1>
                <div className="detail-text">
                  <p>
                    <b>Native Name: </b>
                    <span className="native-name">{country.nativeName}</span>
                  </p>
                  <p>
                    <b>population: </b>
                    <span className="population">
                      {country.population.toLocaleString("en-IN")}
                    </span>
                  </p>
                  <p>
                    <b>Region: </b>
                    <span className="Region">{country.region}</span>
                  </p>
                  <p>
                    <b>Sub Region: </b>
                    <span className="sub-Region">{country.subregion}</span>
                  </p>
                  <p>
                    <b>Capital: </b>
                    <span className="capital">{country.capital}</span>
                  </p>
                  <p>
                    <b>Top Leble Domain: </b>
                    <span className="domain">{country.domain}</span>
                  </p>
                  <p>
                    <b>Currencies: </b>
                    <span className="currency">{country.currency}</span>
                  </p>
                  <p>
                    <b>Languages: </b>
                    <span className="lang">{country.language}</span>
                  </p>
                </div>

                {country.borders.length !== 0 && (
                  <div className="border-countries">
                    <b>Border Countries: </b>
                    {country.borders.map((border) => (
                      <Link to={`/${border}`} key={border}>
                        {border}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
  
        </main>
      )}
    </>
  );
}
