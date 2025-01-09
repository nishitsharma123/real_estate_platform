import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function About() {
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => {
      clearTimeout(timer);
      setAnimate(false);
    };
  }, [dispatch]);
  return (
    <div className="bg-blue-100 flex flex-col items-center justify-center px-4 w-screen min-h-screen">
      <div className="bg-blue-100 text-gray-800 rounded-3xl shadow-2xl mt-16 md:mt-20 w-full">
        <h2
          className={`text-3xl font-bold mb-4 text-blue-600 text-left ml-3 md:m-auto md:text-center transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-60 opacity-0"
          }`}
        >
          Policies & Guidelines
        </h2>
        <p className="text-lg mb-6 pl-2 text-left ml-1 md:m-auto md:text-center">
          At <span className="font-semibold">iBuy</span>, we are committed to
          delivering transparent, reliable, and customer-centric real estate
          solutions. Our policies ensure trust, quality, and compliance at every
          step.
        </p>

        <div className="flex flex-row flex-wrap gap-5 w-full md:w-fit md:h-fit  font-mono mt-6 md:m-10">
          <div className=" bg-slate-300 md:rounded-2xl p-3 w-fit md:flex-1 md:m-auto">
            <h3
              className={`text-2xl font-semibold mb-3 transition-all duration-[2000ms] ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "translate-x-60 opacity-0"
              }`}
            >
              Our Core Policies:
            </h3>
            <ul
              className={`list-disc list-inside space-y-2 text-sm transition-all duration-[2000ms] ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-60 opacity-0"
              }`}
            >
              <li>
                🏠 <span className="font-bold">Transparency First</span>: All
                property dealings are conducted with complete honesty and clear
                documentation.
              </li>
              <li>
                📊 <span className="font-bold">Data Privacy</span>: We
                prioritize your data security and adhere to industry-standard
                protection protocols.
              </li>
              <li>
                📜 <span className="font-bold">Legal Compliance</span>: All
                transactions follow regional and national regulations to ensure
                hassle-free ownership.
              </li>
              <li>
                🤝 <span className="font-bold">Customer Commitment</span>: We
                are dedicated to providing personalized service tailored to your
                needs.
              </li>
              <li>
                🌍 <span className="font-bold">Sustainability</span>: We support
                eco-friendly practices in real estate development.
              </li>
            </ul>
          </div>

          <div className="md:flex-1 bg-slate-300 md:rounded-2xl p-3 md:w-fit md:h-fit md:m-auto">
            <h3
              className={`text-2xl font-semibold mb-6 transition-all duration-[2000ms] ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-60 opacity-0"
              }`}
            >
              Guidelines for Buyers & Sellers:
            </h3>
            <ul
              className={`list-decimal list-inside space-y-2 text-sm transition-all duration-[2000ms] ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "translate-x-60 opacity-0"
              }`}
            >
              <li>
                Ensure all property documents are verified before proceeding
                with any transaction.
              </li>
              <li>
                Communicate your requirements clearly to our team for the best
                recommendations.
              </li>
              <li>
                For buyers: Schedule site visits to explore properties and
                assess their condition.
              </li>
              <li>
                For sellers: Provide accurate property details and maintain
                transparency in pricing.
              </li>
              <li>
                Respect timelines and commitments during negotiations and
                closures.
              </li>
              <li>
                Always conduct a thorough inspection of the property for legal
                clearances and physical conditions.
              </li>
              {/* <li> If you plan to use a loan, get pre-approved to streamline the buying process.</li> */}
            </ul>
          </div>
        </div>

        <div className="m-10">
          <h3 className="text-xl font-bold text-blue-600 text-center md:text-left">
            Need Assistance?
          </h3>
          <p className="text-sm mt-2 text-center md:text-left">
            Our expert team is here to help you navigate every step of your real
            estate journey. For queries, contact us at{" "}
            <Link
              to="/contact-us"
              className="text-blue-500 hover:underline text-center md:text-left"
            >
              click here
            </Link>
            .
          </p>
        </div>
      </div>

      <div className=" mt-5 w-full rounded-lg shadow-2xl p-16">
        <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
          Our Team
        </h1>
        <p className="text-slate-900 text-lg mb-6 text-center">
          We are passionate about providing innovative solutions to empower
          individuals and businesses. Our team is dedicated to delivering
          excellence in everything we do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center">
            <div className="w-24 h-24 mx-auto mb-4  relative overflow-hidden rounded-full ">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQHuHGVqw5eQfA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723689369673?e=1740614400&v=beta&t=QDgi4U7OEjmYKiGgEOThPPXRJt_jPPKnvamMQxcw9Lw"
                alt="Team member"
                className="w-full h-auto relative z-0 rounded-full transition-all duration-300 hover:scale-150"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">
              Saurabh choudhary
            </h3>
            <p className="text-gray-500">Founder & CEO</p>
            <p className="text-gray-500 mt-2">
              "Innovation is at the heart of our journey."
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center">
            <div className="w-24 h-24 mx-auto mb-4  relative overflow-hidden rounded-full ">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQE221Eal7Hg9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728107546810?e=1740614400&v=beta&t=DqPi1Zgz6ELc5i31zQ2FlWYP-HmdO2ITYhqynNqAc_0"
                alt="Team member"
                className="w-full h-auto relative z-0 rounded-full transition-all duration-300 hover:scale-150"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">
              Nishit Sharma
            </h3>
            <p className="text-gray-500">Co-Founder & CTO</p>
            <p className="text-gray-500 mt-2">
              "Building reliable and scalable technology."
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center">
            <div className="w-24 h-24 mx-auto mb-4  relative overflow-hidden rounded-full ">
              <img
                src="https://via.placeholder.com/96"
                alt="Team member"
                className="w-full h-auto relative z-0 rounded-full transition-all duration-300 hover:scale-150"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">xyz</h3>
            <p className="text-gray-500">Head of Operations</p>
            <p className="text-gray-500 mt-2">
              "Ensuring seamless workflows and growth."
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl rounded-lg p-8 m-7 mt-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          What we are providing to our customer?
        </h1>
        <p className="text-gray-600 text-lg mb-6 text-center">
          At iBuy, we are revolutionizing the real estate experience with fast,
          accurate, and reliable services designed to meet your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Property Dealing in 7 Days
            </h3>
            {/* <p className="text-gray-500">Founder & CEO</p> */}
            <p className="text-gray-500 mt-2">
              "We offer fast, seamless property transactions, ensuring that
              deals are closed within just 7 days."
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              AI/ML-Based Property Valuation
            </h3>
            {/* <p className="text-gray-500">CO-FOUNDER & CTO</p> */}
            <p className="text-gray-500 mt-2">
              "Our advanced AI and ML algorithms provide accurate property
              valuations by integrating historical data and real-time market
              trends."
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Reliable and Efficient Dealing
            </h3>
            {/* <p className="text-gray-500">Head of Operations</p> */}
            <p className="text-gray-500 mt-2">
              "We prioritize trust and efficiency, delivering reliable property
              dealings with transparent processes and quick turnarounds."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
