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
  // const { role } = useSelector((state) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



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
      <div className="flex justify-between items-center max-w-6xl ml-2 md:mx-auto p-1">
        <Link to="/">
          <h1
            className={`font-bold text-3xl sm:text-4xl flex flex-wrap mb-2 transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            {/* <span className="text-red-600">i</span>
            <span className="text-white ">Buyr</span> */}
            <img
              src="https://media-hosting.imagekit.io//de8a3bbc13fe4d5f/download.png?Expires=1831983289&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GC32uDZCalqMKDyt-y7tgsdltZ124DmVaDJLllY2HAsqJMY2EcwgoimoD5AAh2VGgoOy8pscdLr6okH4X50ksezFlyJ-MKnE229o9-wYdXL4wacyNd~8POirbEtYpEy-aqfxLfd7HInqTdfkPVGRcz2yw~XM16H1ZcBlEHx4ZCi4ZHSct36cEwct~pfJeQu7-29srrjt8w~R1oFd42ZGKHiJenSV7LyzX58sWK0Qsc5mgBWYK0OSxHPpI9zCZzWr7xOa0gf7XdAjObCw89RWJL8au653cpl79E4owrooeCcod4Z1M4cB7IHfMMXQImO4iZB5Hx4D1YSsXKZBD2Xc-g__"
              className="h-10 sm:h-14 object-contain "
            />
          </h1>
        </Link>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? (
              <FaTimes className="mr-3" />
            ) : (
              <FaBars className="mr-3" />
            )}
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
              ? "flex flex-col fixed top-20 right-0 bg-blue-400 bg-opacity-40 backdrop-blur-md p-4 w-2/3 h-screen"
              : "hidden"
          } sm:flex sm:flex-row  `}
        >
         
          {/* <Link to="/property-dashboard"> */}
            <button
              // onClick={closeMenu}
              onClick={toggleDropdown}
              className=" w-56 sm:w-fit relative text-center rounded-xl md:rounded-3xl p-2 sm:inline bg-blue-500 bg-opacity-90 md:bg-transparent text-white md:text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out "
            >
              Properties
             {isDropdownOpen && (

               <ul className="absolute left-0 mt-4 w-60  bg-blue-500 rounded-lg shadow-lg">
              <li  onClick={closeMenu}>
                <Link
                  to="/sell-your-home"
                  className="block px-4 py-2 hover:bg-blue-300 rounded-lg m-2"
                >
                  Sell your home
                </Link>
              </li>
              <li  onClick={closeMenu}>
                <Link
                  to="/property-dashboard"
                  className="block px-4 py-2 hover:bg-blue-300 rounded-lg m-2"
                >
                  Buy your dream home
                </Link>
              </li>
            </ul>
             )}
                </button>
          {/* </Link> */}
          {currentUser && currentUser.role === "admin" && (
            <Link to="/create-listing">
              <li
                onClick={closeMenu}
                className="w-56 text-center rounded-xl md:rounded-3xl p-2 sm:inline bg-blue-500 bg-opacity-90 md:bg-transparent text-white md:text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out "
              >
                Create Listing
              </li>
            </Link>
          )}
          {currentUser && currentUser.role === "admin" && (
            <Link to="/show-listing">
              <li
                onClick={closeMenu}
                className="w-56 text-center rounded-xl md:rounded-3xl p-2 sm:inline bg-blue-500 bg-opacity-90 md:bg-transparent text-white md:text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out "
              >
                Show Listing
              </li>
            </Link>
          )}
          <Link to="/price-prediction">
            <li
              onClick={closeMenu}
              className="w-56 text-center rounded-xl bg-opacity-90 md:rounded-3xl text-white bg-blue-500 p-2 md:bg-transparent sm:inline  md:text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out "
            >
              PropValue
            </li>
          </Link>
          <Link to="/faq">
            <li
              onClick={closeMenu}
              className="w-56 text-center rounded-xl bg-opacity-90 md:rounded-3xl text-white bg-blue-500 md:bg-transparent p-2 sm:inline md:text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out "
            >
              FAQs
            </li>
          </Link>
          <Link to="/contact-us">
            <li
              onClick={closeMenu}
              className="w-56 text-center rounded-xl bg-opacity-90 md:rounded-3xl text-white bg-blue-500 md:bg-transparent p-2 sm:inline md:text-white hover:bg-white hover:text-black  transition duration-300 ease-in-out "
            >
              Contact us
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={closeMenu}
              className="w-56 text-center rounded-xl md:rounded-3xl p-2 bg-opacity-90 bg-blue-500 sm:inline text-white md:text-white md:bg-transparent hover:bg-white hover:text-black transition duration-300 ease-in-out "
            >
              About
            </li>{" "}
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <div onClick={closeMenu} className=" w-56 md:w-auto text-center place-content-center flex flex-row md:text-green-600 text-white gap-2 items-center md:bg-white bg-blue-500 hover:text-black p-2 md:rounded-xl rounded-xl">
              <img
                onClick={closeMenu}
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
              <p>{currentUser.username}</p>
              </div>
            ) : (
              <li
                onClick={closeMenu}
                className="w-56 text-center rounded-xl md:rounded-3xl p-2 bg-opacity-90 bg-blue-500 sm:inline text-white md:text-white md:bg-transparent hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
