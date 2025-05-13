import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router";

function Header() {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const toggleMenu = () => setIsShowingMenu((prev) => !prev);
  return (
    <header className="w-full fixed top-0 left-0 bg-[var(--dark-bg)] text-[var(--dark-text)] grid grid-cols-2 h-14 lg:px-20  sm:px-10 max-sm:px-5  ">
      <div className="logo h-full flex items-center justify-start">
        <a
          className="lg:text-3xl sm:text-xl max-sm:text-lg font-semibold font-mono"
          href="/"
        >
          World Tour
        </a>
      </div>

      <nav className="flex justify-end items-center">
        <button className="sm:hidden z-20" onClick={toggleMenu}>
          {isShowingMenu ? <RxCross2 size={25} /> : <FaBars size={25} />}
        </button>

        <ul
          className={`sm:hidden fixed top-0 right-0 h-full w-2/3 bg-gray-800 p-6 transition-transform duration-100 space-y-4 pt-10 ${
            isShowingMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <NavLink
              onClick={toggleMenu}
              to={"/"}
              className={({ isActive }) =>
                `px-2 border-b-2 ${
                  isActive ? "border-b-white" : "border-b-transparent"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              to={"/about"}
              className={({ isActive }) =>
                `px-2 border-b-2 ${
                  isActive ? "border-b-white" : "border-b-transparent"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              to={"/country"}
              className={({ isActive }) =>
                `px-2 border-b-2 ${
                  isActive ? "border-b-white" : "border-b-transparent"
                }`
              }
            >
              Country
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              to={"/contact"}
              className={({ isActive }) =>
                `px-2 border-b-2 ${
                  isActive ? "border-b-white" : "border-b-transparent"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* desctop menu */}

        <ul
          className={` max-sm:hidden flex justify-center items-center lg:gap-6 sm:gap-4  `}
        >
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `px-2 border-b-2 ${
                  isActive ? "border-b-white" : "border-b-transparent"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `px-2 border-b-2 ${
                  isActive ? "border-b-white" : "border-b-transparent"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/country"}
              className={({ isActive }) =>
                `px-2 border-b-2 ${
                  isActive ? "border-b-white" : "border-b-transparent"
                }`
              }
            >
              Country
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `px-2 border-b-2 ${
                  isActive ? "border-b-white" : "border-b-transparent"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
