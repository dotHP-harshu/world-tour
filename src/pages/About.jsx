import React from "react";
import Card from "../components/about/Card";
import cardData from "../api/countryData.json";

function About() {
  return (
    <div className=" flex justify-center items-center gap-10 flex-col lg:px-40 sm:px-10 max-sm:px-5 mt-20">
      <h1 className="text-3xl max-sm:text-lg font-bold text-center w-2/3 max-sm:w-full">
        Here are some Interesting Facts, we're proud of
      </h1>
      <div className="card-container grid lg:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6">
        {cardData.map((card) => {
          const { capital, countryName, id, interestingFact, population } =
            card;
          return (
            <Card
              key={id}
              capital={capital}
              countryName={countryName}
              interestingFact={interestingFact}
              population={population}
            />
          );
        })}
      </div>
    </div>
  );
}

export default About;
