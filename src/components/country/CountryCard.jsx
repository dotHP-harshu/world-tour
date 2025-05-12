import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { NavLink } from "react-router";

function CountryCard({ c }) {
  return (
    <div className=" country-card max-w-64 p-4 h-fit rounded-2xl  justify-self-center">
      <div className="flag-container w-full min-h-40 flex justify-center items-center">
        <img src={c.flags.png} alt={c.flags.alt} className="w-full h-auto" />
      </div>
      <h2 className="text-xl max-sm:text-base font-semibold ">
        {" " + c.name.common}
      </h2>
      <p className="text-base font-semibold max-sm:texts-m">
        Population:
        <span className="font-light text-[var(--light-text)]">
          {" " + c.population}
        </span>
      </p>
      <p className="text-base font-semibold max-sm:texts-m">
        Region:
        <span className="font-light text-[var(--light-text)]">
          {" " + c.region}
        </span>
      </p>
      <p className="text-base font-semibold max-sm:texts-m">
        Capital:
        <span className="font-light text-[var(--light-text)]">
          {" " + c.capital}
        </span>
      </p>
      <div className="w-full flex justify-end mt-4">
        <NavLink to={"/country/" + c.cca3}>
          <button className="px-2 py-1 flex items-center gap-2 rounded-lg border-2 border-[var(--light-text)] cursor-pointer bg-[var(--light-bg)] hover:bg-transparent transition-colors duration-300 ease-in-out active:scale-95">
            Read more <IoArrowForward />
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default CountryCard;
