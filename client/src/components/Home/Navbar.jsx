/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  let menu;

  if (showMenu) {
    menu = (
      <div className="w-full top-0 left-0 min-h-[150vh] fixed bg-bg-c flex flex-col gap-8 text-lg font-text animate-slide-in z-50">
        <div className="flex justify-between px-[1em] pb-[0.8em] mt-[1.5em] mb-[1em] border-b border-gray-300">
          <article className="flex flex-row items-center gap-2">
            <h3 className="text-2xl font-bold font-header">Easy Booking</h3>
            <div>
              <img src={logo} alt="Easy Booking Logo" />
            </div>
          </article>
          <AiOutlineClose
            onClick={() => setShowMenu(false)}
            className="cursor-pointer"
          />
        </div>
        <ul className="flex flex-col gap-6 text-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Tour</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <article className="gap-5 flex flex-col items-center">
          <button type="button" className="text-[#FD8D3A] font-bold">
            <Link to="/login">Login</Link>
          </button>

          <button className="bg-bg-o text-white rounded-md w-[8rem] p-2 drop-shadow-xl font-bold">
            <Link to="/register">Sign Up</Link>
          </button>
        </article>
      </div>
    );
  }

  return (
    <nav className="pt-6 font-text">
      <div className="flex lg:justify-around justify-between px-5 md:px-10 lg:px-0 items-center">
        <article className="flex flex-row items-center gap-2">
          <h3 className="text-2xl font-bold font-header">Easy Booking</h3>
          <div>
            <img src={logo} alt="Botel Logo" />
          </div>
        </article>
        <article className="hidden lg:inline-block">
          <ul className="flex flex-row gap-6">
            <li className="hover:scale-110 hover:text-gray-600 transition-all">
              <a href="#">Home</a>
            </li>
            <li className="hover:scale-110 hover:text-gray-600 transition-all">
              <a href="#">About</a>
            </li>
            <li className="hover:scale-110 hover:text-gray-600 transition-all">
              <a href="#">Destination</a>
            </li>
            <li className="hover:scale-110 hover:text-gray-600 transition-all">
              <a href="#">Tour</a>
            </li>
            <li className="hover:scale-110 hover:text-gray-600 transition-all">
              <a href="#">Blog</a>
            </li>
          </ul>
        </article>

        <span className="lg:hidden text-lg">
          <AiOutlineBars
            onClick={() => setShowMenu(true)}
            className="cursor-pointer"
          />
        </span>

        <article className="gap-5 hidden lg:flex">
          <button type="button" className="text-[#FD8D3A] font-bold">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-bg-o text-white rounded-md w-[8rem] p-2 drop-shadow-xl font-bold signup-btn">
            <Link to="/register">Sign up</Link>
          </button>
        </article>
      </div>

      {menu}
    </nav>
  );
};

export default Navbar;
