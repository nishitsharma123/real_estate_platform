// import React from 'react';
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { FaHome } from 'react-icons/fa';
import { useDispatch } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();
  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the header
        setShowHeader(false);
      } else {
        // if scroll up show the header
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    // Clear the error state when the component mounts
    // dispatch(signUpFailure(null));
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => {
      clearTimeout(timer);
      setAnimate(false);
    };
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Use a proxy to bypass CORS
  // const avatarUrl = `${proxyUrl}${currentUser.avatar}`;

  return (
    <header
      className={`bg-black  bg-opacity-40 backdrop-blur-sm fixed z-20 w-screen transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1
            className={`font-bold text-3xl sm:text-4xl flex flex-wrap mb-2 transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <span className="text-red-600">i</span>
            <span className="text-white ">Buy</span>
          </h1>
        </Link>
        <form className="bg-white p-3 rounded-lg flex items-center ">
          <input
            type="text"
            id="search"
            placeholder="Search...."
            className="bg-transparent focus:outline-none w-24 sm:w-64 text-black"
          />
          <FaSearch className="text-black" />
        </form>
        <ul
          className={`flex gap-4 items-center transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}>
          <Link to="/dashboard">
            <li className="hidden rounded-3xl p-2 sm:inline text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out ">
              Dashboard
            </li>
          </Link>
           <Link to="/contact-us">
            <li className="hidden rounded-3xl p-2 sm:inline text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out ">
              Contact us
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden rounded-3xl p-2 sm:inline text-white hover:bg-white hover:text-black transition duration-300 ease-in-out ">
              About
            </li>{" "}
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={
                  currentUser?.avatar ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="Profile"
                onError={(e) =>
                  (e.target.src =
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
                }
              />
            ) : (
              <li className="text-white rounded-3xl p-2  hover:bg-white hover:text-black hover:backdrop-blur-sm transition duration-300 ease-in-out">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
