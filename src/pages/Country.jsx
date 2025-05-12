import React, { useEffect, useState } from "react";
import countryApi from "../api/countryApi";
import CountryCard from "../components/country/CountryCard";
import { RiLoader4Line } from "react-icons/ri";

function Country() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [regions, setRegions] = useState([
    "All",
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Oceania",
  ]);
  const fetchData = async () => {
    try {
      if (selectedRegion === "All") {
        const response = await countryApi.get(`all`);
        setIsLoading(false);
        setCountries(response.data);
        return;
      }
      const response = await countryApi.get(`region/${selectedRegion}`);
      setIsLoading(false);
      setCountries(response.data);
    } catch (error) {
      setIsLoading(false);
      console.log("An error uccured ", error);
    }
  };

  const searchCountry = () => {
    return countries.filter((country) => {
      let name = country.name.common.toLowerCase();
      if (name.includes(searchKeyword)) {
        return country;
      }
    });
  };
  const countryCopy = searchCountry();

  useEffect(() => {
    fetchData();

    return () => {
      setCountries([]);
    };
  }, [selectedRegion]);

  if (isLoading)
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <RiLoader4Line size={50} />
      </div>
    );

  return (
    <div className="mt-20 max-sm:mt-5 space-y-10 lg:px-40 sm:px-10 max-sm:px-5  ">
      <h1 className="text-4xl max-sm:xl font-bold text-center">Countries</h1>
      <div className="filters flex justify-between flex-wrap gap-4">
        <input
          onChange={(e) => {
            setSearchKeyword(e.target.value.toLowerCase());
            searchCountry();
          }}
          type="text"
          value={searchKeyword}
          className="border-2 w-48  border-[var(--dark-bg)] outline-none px-2 py-1 rounded-lg "
          placeholder="Search by name"
        />

        <select
          value={selectedRegion}
          name="region"
          id="region"
          className="border-2 border-[var(--dark-bg)] outline-none px-2 py-1 rounded-lg "
          onChange={(e) => {
            setSelectedRegion(e.target.value);
          }}
        >
          {regions.map((r, i) => {
            return (
              <option
                key={i}
                className="bg-[var(--dark-bg)] border-2 border-[var(--light-bg)] outline-none"
                value={r}
              >
                {r}
              </option>
            );
          })}
        </select>
      </div>
      {countryCopy.length > 0 ? (
        <>
          <h1 className="text-[var(--light-text)] font-serif font-semibold text-2xl max-sm:text-base text-center mb-6">
            {countryCopy.length} Countries found.
          </h1>
          <div className="card-container w-full min-h-dvh grid lg:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6">
            {countryCopy.map((c, i) => {
              return <CountryCard key={c.cca3} c={c} />;
            })}
          </div>
        </>
      ) : (
        <div className="flex justify-center min-h-dvh">
          <h1> No country found</h1>
        </div>
      )}
    </div>
  );
}

export default Country;
