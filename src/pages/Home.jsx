import React from "react";
import { NavLink } from "react-router";
import About from "./About";
import { IoIosArrowRoundForward } from "react-icons/io";

function Home() {
  return (
    <>
      <main className="w-full grid lg:grid-cols-2 sm:grid-cols sm:my-20 max-sm:my-10  max-sm:grid-cols-1 lg:px-40 sm:px-10 max-sm:px-5">
        <div className="left flex flex-col items-start justify-center  gap-4 max-sm:gap-2">
          <h1 className="max-sm:text-2xl text-5xl font-bold">
            Explore the World, One Country at a Time.
          </h1>
          <p className="text-base max-sm:text-sm text-[var(--light-text)] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, odio
            itaque ratione iure nemo consequatur in saepe voluptatibus totam
            numquam quos.
          </p>
          <NavLink to={"country"}>
            <button className="px-4 py-2 flex items-center gap-2 rounded-lg border-2 border-[var(--dark-bg)] cursor-pointer bg-[var(--dark-bg)] hover:bg-transparent transition-colors duration-300 ease-in-out active:scale-95">
              Start Exploring <IoIosArrowRoundForward size={20} />
            </button>
          </NavLink>
        </div>
        <div className="right flex justify-center items-center">
          <div className="img-container w-full">
            <img
              src="/images/world.png"
              alt="world"
              className="w-full h-auto object-center object-cover"
            />
          </div>
        </div>
      </main>
      <About />
    </>
  );
}

export default Home;
