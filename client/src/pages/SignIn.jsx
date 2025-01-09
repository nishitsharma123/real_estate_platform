import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth.jsx";
// import bgVideo from '../data/bgvideo.mp4';
import { FaUser } from "react-icons/fa";

const adminEmail = import.meta.env.ADMIN_EMAIL;
const adminPassword = import.meta.env.ADMIN_PASSWORD;

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  // const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Clear the error state when the component mounts
    dispatch(signInFailure(null));
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => {
      setTimeout(timer);
      setAnimate(false);
    };
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure("Please fill in all the fields"));
      return;
    }

    try {
      dispatch(signInStart());
      // -----------------------
      if (
        formData.email === adminEmail &&
        formData.password === adminPassword
      ) {
        const adminData = { ...formData, role: "admin" };
        dispatch(signInSuccess(adminData));
        navigate("/create-listing");
        return;
      }
      // ------------------

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      if (data.role === "admin") {
        navigate("/create-listing"); // Admin dashboard route
      } else {
        navigate("/dashboard"); // Regular user dashboard route
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
    // console.log(data);
  };

  // console.log(formData);

  return (
    <div className="absolute min-h-screen w-screen bg-blue-100">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
      /> */}
      <div
        className={` bg-blue-100 md:bg-blue-200 relative flex flex-wrap-reverse  mt-24 w-full md:w-fit m-auto rounded-3xl h-300px transition-all duration-[2000ms] ${
          animate ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className=" z-10 p-20 max-w-lg mx-auto flex-1 w-full md:w-auto">
          <div className="flex flex-row items-center">
            <FaUser className="text-center text-3xl m-3" />
            <span
              className={`text-3xl text-center font-semibold my-7 transition-all duration-[2000ms] ${
                animate
                  ? "translate-x-0 opacity-full"
                  : "-translate-x-60 opacity-0"
              }`}
            >
              Sign In
            </span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="email"
              className="p-3 bg-blue-100 rounded-lg border-solid border-black border-2"
              id="email"
              onChange={handleChange}
            />

            <input
              type="password"
              placeholder="password"
              className="border-solid bg-blue-100 border-black border-2 p-3 rounded-lg"
              id="password"
              onChange={handleChange}
            />

            <button className="bg-black text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              {loading ? "Loading..." : "Sign in"}
            </button>
            <OAuth />
          </form>
          <div className="flex gap-2 mt-5 justify-between">
            <p>Don't have an account?</p>
            <Link to={"/sign-up"}>
              <span className="text-blue-600 text-semibold rounded-lg text-center hover:bg-black p-1 hover:text-white ">
                Sign up
              </span>
              {/* <button onClick={() => setIsSignUp(true)} className="text-blue-600 text-semibold rounded-lg text-center hover:bg-black p-1 hover:text-white ">Sign up</button> */}
            </Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>

        <div
          className={`z-10 p-10 max-w-lg mx-auto bg-black flex-1 rounded-3xl m-2 mr-2 ml-2 md:mr-2 text-white transition-all duration-[2000ms] ${
            animate
              ? "translate-x-0 opacity-full"
              : "translate-x-full opacity-0"
          }`}
        >
          <h1 className="text-3xl text-semibold">Welcome Back!</h1>
          <br />
          <p>Your new property is just a step away.</p>
          <p>
            Access personalized recommendations, saved searches, and exclusive
            listings tailored for you.
          </p>
          <br />
          <h3 className="text-2xl">🏠 Sign in to:</h3>
          <ul className="list-disc list-inside">
            <li>Save your favorite properties</li>
            <li>See your saved searches</li>
            <li>Continue your property hunt seamlessly</li>
          </ul>
          <br />
          <h4 className="text-xl">"Let's pick up where you left off!"</h4>
        </div>
      </div>
    </div>
  );
}
