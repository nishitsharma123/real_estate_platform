import React from "react";
import images from "../data/images.jsx";
import Loader from "../components/Loader";
import CustomSlider from "../components/custom.slider";
import { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const companyNames = [
  "Google",
  "Microsoft",
  "Amazon",
  "Apple",
  "Tesla",
  "Netflix",
  "Meta",
  "IBM",
  "Intel",
  "Adobe",
];
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();

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
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Home">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomSlider>
            {images.map((image, index) => (
              <div key={index} style={{ position: "relative" }}>
                <img
                  src={image.imgURL}
                  alt={image.imgAlt}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />

                <div className="absolute left-1/2 top-1/2 ml-10 flex flex-col  transform -translate-x-1/2 -translate-y-1/2 text-white bg-black p-5  bg-opacity-50 rounded-2xl w-3/4 h-auto">
                  <div className=" p-3 font-bold text-6xl ">
                    {image.heading}
                  </div>
                  <div className="p-3">{image.text}</div>
                </div>
              </div>
            ))}
          </CustomSlider>

          <div className="flex flex-col w-4/5+96 min-h-screen bg-blue-100">
            {/* Section 1 */}
            <div className=" flex flex-row mt-10 p-9">
              <div className="flex-1">
                <img
                  src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Section 1"
                  className="rounded-3xl shadow-2xl shadow-black h-96"
                />
              </div>
              <div className=" flex-1">
                <h1 className="text-6xl font-bold text-center font-sans">
                  Use our advance AI model
                </h1>
                <p className="text-lg font-medium text-gray-700 text-center p-5">
                  This is the first section with some descriptive text. Tailwind
                  CSS makes it easy to style inline and keep designs consistent!
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam rem porro tempore perferendis! Impedit nemo vel illo
                  ratione eligendi sapiente iure labore eum reiciendis soluta?
                </p>
                <Link to="/price-prediction">
                  <div className="rounded-3xl bg-black p-3 text-white text-center w-40 m-auto">
                    Click here
                  </div>
                </Link>
              </div>
            </div>

            {/* Section 2 (Reversed Layout) */}
            <div className=" flex flex-row mt-10 p-9 ">
              <div className="flex-1">
                <h1 className="text-6xl font-bold text-center font-sans">
                  Create listing here
                </h1>
                <p className="text-lg font-medium text-gray-700 text-center p-5">
                  This is the first section with some descriptive text. Tailwind
                  CSS makes it easy to style inline and keep designs consistent!
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam rem porro tempore perferendis! Impedit nemo vel illo
                  ratione eligendi sapiente iure labore eum reiciendis soluta?
                </p>
                <Link to="/create-listing">
                  <div className="rounded-3xl bg-black p-3 text-white text-center w-40 m-auto">
                    Click here
                  </div>
                </Link>
              </div>
              <div className=" flex-1">
                <img
                  src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg"
                  alt="Section 2"
                  className="rounded-3xl shadow-2xl shadow-black h-96"
                />
              </div>
            </div>

            {/* Section 3 */}
            <div className=" flex flex-row mt-10 p-9">
              <div className=" flex-1">
                <img
                  src="https://cdn.pixabay.com/photo/2019/09/15/14/22/fishermans-hut-4478427_1280.jpg"
                  alt="Section 3"
                  className="rounded-3xl shadow-2xl shadow-black h-96"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-6xl font-bold text-center font-sans">
                  Read about us
                </h1>
                <p className="text-lg font-medium text-gray-700 text-center p-5">
                  This is the first section with some descriptive text. Tailwind
                  CSS makes it easy to style inline and keep designs consistent!
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam rem porro tempore perferendis! Impedit nemo vel illo
                  ratione eligendi sapiente iure labore eum reiciendis soluta?
                </p>
                <Link to="/about">
                  <div className="rounded-3xl bg-black p-3 text-white text-center w-40 m-auto">
                    Click here
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <footer className="bg-black text-white p-8 flex flex-col items-center w-full h-96 justify-between">
            {/* Top Section */}
            <div className="flex flex-wrap justify-between w-full max-w-6xl mb-8">
              {/* Logo and Description */}
              <div className="flex-1 mb-6 md:mb-0">
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
                <p className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, ducimus laborum. Veniam numquam minus rerum at quis
                  facilis fugiat tempora unde repellat quasi reprehenderit esse
                  labore alias ipsa commodi eos temporibus, tenetur error
                  ratione fuga voluptate, adipisci hic! Tempore et explicabo
                  quasi, illum nesciunt tenetur reprehenderit porro fuga totam.
                  Numquam.
                </p>
                <div className="flex gap-4 mt-4">
                  <i className="fab fa-facebook text-2xl cursor-pointer"></i>
                  <i className="fab fa-linkedin text-2xl cursor-pointer"></i>
                  <i className="fab fa-twitter text-2xl cursor-pointer"></i>
                </div>
                <div className="mt-4 flex flex-row gap-4 text-3xl">
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex justify-around text-sm">
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:underline">
                    Property listing
                  </li>
                  <li className="cursor-pointer hover:underline">Agents</li>
                </ul>
                <ul className="space-y-2">
                  <Link to="/about">
                    <li className="cursor-pointer hover:underline p-2">
                      About us
                    </li>
                  </Link>
                  <Link to="/contact-us">
                    <li className="cursor-pointer hover:underline p-2">
                      Contact
                    </li>
                  </Link>
                  <Link to="/About">
                    <li className="cursor-pointer hover:underline p-2">
                      Privacy Policy
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full max-w-6xl border-t border-white pt-4 text-xs flex justify-between">
              <p>Copyright ©2021 All rights reserved</p>
              <p className="text-[#b0c4de]">Created by Nishit sharma</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
