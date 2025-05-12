import React from "react";

function Card({ capital, countryName, interestingFact, population }) {
  return (
    <div className="about-card max-w-64 p-4 rounded-2xl space-y-2">
      <h3 className="max-sm:text-base lg:text-xl tracking-tighter font-bold">
        {countryName}
      </h3>
      <p className="text-base max-sm:text-sm font-semibold ">
        Capital:
        <span className="text-[var(--light-text)] font-light">
          {" " + capital}
        </span>
      </p>
      <p className="text-base max-sm:text-sm font-semibold ">
        Population:
        <span className="text-[var(--light-text)] font-light">
          {" " + population}
        </span>
      </p>
      <p className="text-base max-sm:text-sm font-semibold ">
        Fact:
        <span className="text-[var(--light-text)] font-light">
          {" " + interestingFact}
        </span>
      </p>
    </div>
  );
}

export default Card;
