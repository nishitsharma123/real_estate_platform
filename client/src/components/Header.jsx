// import React from 'react';
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);



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


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };


   useEffect(() => {
    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean up
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Close menu on clicking outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Use a proxy to bypass CORS
  // const avatarUrl = `${proxyUrl}${currentUser.avatar}`;

  return (
    <header
      className={`bg-blue-400 bg-opacity-40 backdrop-blur-sm fixed z-20 w-screen transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl ml-4 md:mx-auto p-1">
        <Link to="/">
          <h1
            className={`font-bold text-3xl sm:text-4xl flex flex-wrap mb-2 transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <span className="text-red-600">i</span>
            <span className="text-white ">Buyr</span>
          </h1>
        </Link>
        <div className="sm:hidden">
  <button onClick={toggleMenu} className="text-white text-2xl">
    {isMenuOpen ? <FaTimes className="mr-3" /> : <FaBars className="mr-3" />}
  </button>
</div>

        {/* <form className="bg-white p-3 rounded-lg flex items-center ">
          <input
            type="text"
            id="search"
            placeholder="Search...."
            className="bg-transparent focus:outline-none w-24 sm:w-64 text-black"
          />
          <FaSearch className="text-black" />
        </form> */}
        <ul
          className={`flex gap-4 items-center transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-60 opacity-0"
          } ${
    isMenuOpen
      ? "flex flex-col fixed top-14 right-0 bg-blue-400 bg-opacity-40 backdrop-blur-md p-4 w-2/3 h-screen"
      : "hidden"
  } sm:flex sm:flex-row  `}>
          <Link to="/dashboard">
            <li onClick={closeMenu} className="w-56 text-center rounded-xl md:rounded-3xl p-2 sm:inline bg-blue-500 bg-opacity-30 md:bg-transparent text-white md:text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out ">
              Dashboard
            </li>
          </Link>
          <Link to="/price-prediction">
            <li onClick={closeMenu} className="w-56 text-center rounded-xl bg-opacity-30 md:rounded-3xl text-white bg-blue-500 p-2 md:bg-transparent sm:inline  md:text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out ">
              PropValue
            </li>
          </Link>
          <Link to="/faq">
            <li onClick={closeMenu} className="w-56 text-center rounded-xl bg-opacity-30 md:rounded-3xl text-white bg-blue-500 md:bg-transparent p-2 sm:inline md:text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out ">
              FAQs
            </li>
          </Link>
           <Link to="/contact-us">
            <li onClick={closeMenu} className="w-56 text-center rounded-xl bg-opacity-30 md:rounded-3xl text-white bg-blue-500 md:bg-transparent p-2 sm:inline md:text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out ">
              Contact us
            </li>
          </Link>
          <Link to="/about">
            <li onClick={closeMenu} className="w-56 text-center rounded-xl md:rounded-3xl p-2 bg-opacity-30 bg-blue-500 sm:inline text-white md:text-white md:bg-transparent hover:bg-white hover:text-black transition duration-300 ease-in-out ">
              About
            </li>{" "}
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img onClick={closeMenu}
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
              <li onClick={closeMenu} className="w-56 text-center rounded-xl md:rounded-3xl p-2 bg-opacity-30 bg-blue-500 sm:inline text-white md:text-white md:bg-transparent hover:bg-white hover:text-black transition duration-300 ease-in-out">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
