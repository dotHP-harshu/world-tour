import React, { useEffect, useState } from "react";
import countryApi from "../api/countryApi";
import { NavLink, useParams } from "react-router";
import Loader from "../components/ui/Loader";
import { BiArrowBack } from "react-icons/bi";

function CountryDetail() {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await countryApi.get(`alpha?codes=${cca3}`);
        console.log(response);
        const data = await response.data;
        setCountry(data[0]);
        setError(null);
        setIsLoading(false);
      } catch (err) {
        console.log("Error occurs on fetching data." + err);
        setIsLoading(false);
        setError(err.msg);
      }
    };
    fetchData();
  }, [cca3]);

  if (isLoading)
    return (
      <div className="mt-10 max-sm:mt-5 lg:px-40 sm:px-10 max-sm:px-5 min-h-dvh">
        <Loader />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-20 max-sm:mt-5 lg:px-40 sm:px-10 max-sm:px-5 min-h-dvh flex justify-center items-center">
      {country ? (
        <div className="w-full grid lg:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-1 bg-[var(--dark-bg)] px-4 py-6 rounded-2xl">
          <div className="flag-container w-full flex justify-center items-center">
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              className="lg:w-3/4   h-auto object-center "
            />
          </div>
          <div className="content px-4 py-6 space-y-4 ">
            <h1 className="text-lg font-serif text-[var(--dark-text)] font-bold">
              {country.name.common}
            </h1>
            <div className="names space-y-2">
              <h1 className="text-base font-semibold text-[var(--light-text)]  ">
                Official Name:
                <span className=" text-[var(--dark-text)] font-mono">
                  {" " + country.name.official}
                </span>
              </h1>
              <h1 className="text-base font-semibold text-[var(--light-text)]  ">
                Native Names:
                <span className=" text-[var(--dark-text)] font-mono">
                  {country.name.nativeName
                    ? " " +
                      Object.values(country.name.nativeName)
                        .map((i) => i.official)
                        .join(", ")
                    : "N/A"}
                </span>
              </h1>
            </div>
            <div className="area space-y-2">
              <h1 className="text-base font-semibold text-[var(--light-text)]  ">
                Capital:
                <span className=" text-[var(--dark-text)] font-mono">
                  {" " + country.capital[0]}
                </span>
              </h1>
              <h1 className="text-base font-semibold text-[var(--light-text)]  ">
                Region
                <span className=" text-[var(--dark-text)] font-mono">
                  {" " + country.region}
                </span>
              </h1>
              <h1 className="text-base font-semibold text-[var(--light-text)]  ">
                Sub region
                <span className=" text-[var(--dark-text)] font-mono">
                  {" " + country.subregion}
                </span>
              </h1>
            </div>
            <div className="language-population-currency">
              <h1 className="text-base font-semibold text-[var(--light-text)]  ">
                Language:
                <span className=" text-[var(--dark-text)] font-mono">
                  {country.languages
                    ? " " + Object.values(country.languages).join(", ")
                    : "N/A"}
                </span>
              </h1>
              <h1 className="text-base font-semibold text-[var(--light-text)]  ">
                Population:
                <span className=" text-[var(--dark-text)] font-mono">
                  {" " + country.population.toLocaleString()}
                </span>
              </h1>
              <h1 className="text-base font-semibold text-[var(--light-text)]  ">
                Currencies
                <span className=" text-[var(--dark-text)] font-mono">
                  {country.currencies
                    ? " " +
                      Object.values(country.currencies)
                        .map((i) => i.name)
                        .join(", ")
                    : "N/A"}
                </span>
              </h1>
            </div>
            <div className="space-y-2">
              <h1 className="text-base font-semibold text-[var(--light-text)]  ">
                Time zones:
                <span className=" text-[var(--dark-text)] font-mono">
                  {" " + country.timezones.join(", ")}
                </span>
              </h1>
            </div>
            <div>
              <NavLink to={"/country"}>
                <button className="px-4 py-2 flex items-center gap-2 rounded-lg border-2 border-[var(--light-bg)] cursor-pointer bg-[var(--dark-bg)] hover:bg-transparent transition-colors duration-300 ease-in-out active:scale-95">
                  <BiArrowBack /> Go Back
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <h2> There is a problem in fetching data.</h2>
      )}
    </div>
  );
}

export default CountryDetail;
