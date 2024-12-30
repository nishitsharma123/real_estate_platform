import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import { useDispatch } from "react-redux";
const Dashboard = () => {
     const [animate, setAnimate] = useState(false);
     const dispatch = useDispatch();
  const [stats, setStats] = useState({
    clients: "",
    agents: "",
    properties: "",
  });

  useEffect(() => {
    axios
      .get("/api/stats")
      .then((response) => setStats(response.data))
      .catch((error) => console.error("Error fetching stats:", error));
  }, []);
  const [agents, setAgents] = useState([]);
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

  // Mock data for agents
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: "Dolly Simpson",
        title: "Realtor",
        description: "Mauris vitae ultricies leo integer malesuada nunc.",
        image:
          "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
      },
      {
        id: 2,
        name: "Kyla Stewart",
        title: "Real Estate Agent",
        description: "Varius vel pharetra vel turpis nunc eget lorem dolor.",
        image:
          "https://cdn.pixabay.com/photo/2019/09/15/14/22/fishermans-hut-4478427_1280.jpg",
      },
      {
        id: 3,
        name: "Brooke Cagle",
        title: "Super Star",
        description: "Nisi lacus sed viverra tellus in hac habitasse.",
        image:
          "https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];
    setAgents(mockData);
  }, []);

  return (
    <div className="bg-blue-200">
      {/* Main Content Section */}
      <div className=" h-screen bg-blue-100 rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 shadow-lg">
        {/* Text Section */}
        <div className="flex-auto text-center md:text-left mt-32">
          <h1 className={`text-6xl font-bold text-gray-800 leading-tight transition-all duration-[2000ms] ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}>
            Find your perfect <span className="text-teal-500">dream home</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Dictum at tempor commodo ullamcorper. Mauris vitae ultricies leo
            integer malesuada nunc vel risus commodo.
          </p>

          <div className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-4  bg-white rounded-3xl absolute shadow-lg z-10 transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}>
            <div className="text-center bg-transparent p-6 rounded-3xl ">
              <h2 className="text-3xl font-bold text-gray-800">2,000+</h2>
              <p className="mt-2 text-gray-600">Satisfied and happy clients</p>
            </div>
            <div className="text-center p-6 rounded-3xl ">
              <h2 className="text-3xl font-bold text-gray-800">57</h2>
              <p className="mt-2 text-gray-600">Professional agents</p>
            </div>
            <div className="text-center p-6 rounded-3xl ">
              <h2 className="text-3xl font-bold text-gray-800">8,500+</h2>
              <p className="mt-2 text-gray-600">Properties ready for living</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-auto flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg" // Replace with your image URL
            alt="Modern Home"
            className={`rounded-lg shadow-md w-auto h-auto max-w-sm md:max-w-full mt-32 transition-all duration-[2000ms] ${
              animate
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          />
        </div>
      </div>

      {/* second section */}
      <div className="agents-container">
        <h1 className="title">
          Meet our top <span className="highlight">agents</span>
        </h1>
        <p className="subtitle">
          Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Donec
          adipiscing tristique risus nec feugiat. Vitae congue eu consequat ac.
        </p>
        <div className="agents-grid">
          {agents.map((agent) => (
            <div key={agent.id} className="agent-card">
              <img
                src={agent.image}
                alt={agent.name}
                className="agent-image "
              />
              <h2 className="agent-name">{agent.name}</h2>
              <p className="agent-title">{agent.title}</p>
              <p className="agent-description">“{agent.description}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
