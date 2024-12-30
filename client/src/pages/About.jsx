import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
export default function About() {
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
  return (
    <div className="bg-black flex flex-col items-center justify-center px-4">
      <div className="bg-blue-100 text-gray-800 p-16 rounded-3xl shadow-md mt-20">
        <h2 className={`text-3xl font-bold mb-4 text-blue-600 text-center transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-60 opacity-0"
          }`}>
          Our Company Policies & Guidelines
        </h2>
        <p className="text-lg mb-6">
          At <span className="font-semibold">iBuy</span>, we are committed to
          delivering transparent, reliable, and customer-centric real estate
          solutions. Our policies ensure trust, quality, and compliance at every
          step.
        </p>

        <div className="flex flex-row gap-9 ">
          <div className="flex-1 bg-slate-300 rounded-2xl p-3">
            <h3 className={`text-2xl font-semibold mb-3 transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-60 opacity-0"
          }`}>Our Core Policies:</h3>
            <ul className={`list-disc list-inside space-y-2 text-sm transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "-translate-x-60 opacity-0"
          }`}>
              <li>
                🏠 **Transparency First**: All property dealings are conducted
                with complete honesty and clear documentation.
              </li>
              <li>
                📊 **Data Privacy**: We prioritize your data security and adhere
                to industry-standard protection protocols.
              </li>
              <li>
                📜 **Legal Compliance**: All transactions follow regional and
                national regulations to ensure hassle-free ownership.
              </li>
              <li>
                🤝 **Customer Commitment**: We are dedicated to providing
                personalized service tailored to your needs.
              </li>
              <li>
                🌍 **Sustainability**: We support eco-friendly practices in real
                estate development.
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-slate-300 rounded-2xl p-3">
            <h3 className={`text-2xl font-semibold mt-6 mb-3 transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "-translate-x-60 opacity-0"
          }`}>
              Guidelines for Buyers & Sellers:
            </h3>
            <ul className={`list-decimal list-inside space-y-2 text-sm transition-all duration-[2000ms] ${
            animate ? "translate-x-0 opacity-100" : "translate-x-60 opacity-0"
          }`}>
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
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-blue-600">Need Assistance?</h3>
          <p className="text-sm mt-2">
            Our expert team is here to help you navigate every step of your real
            estate journey. For queries, contact us at{" "}
            <a
              href="mailto:contact@yourcompany.com"
              className="text-blue-500 hover:underline"
            >
              contact@yourcompany.com
            </a>
            .
          </p>
        </div>
      </div>

      <div className="max-w-6xl rounded-lg shadow-2xl p-16">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Our Team
        </h1>
        <p className="text-white text-lg mb-6 text-center">
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
            <h3 className="text-xl font-semibold text-gray-700">Alice Brown</h3>
            <p className="text-gray-500">Head of Operations</p>
            <p className="text-gray-500 mt-2">
              "Ensuring seamless workflows and growth."
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl bg-white rounded-lg shadow-2xl p-8 m-7">
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

// import React, { useEffect, useRef, useState } from 'react';

// export default function About() {
//   const divRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (divRef.current) {
//       observer.observe(divRef.current);
//     }

//     return () => {
//       if (divRef.current) {
//         observer.unobserve(divRef.current);
//       }
//     };
//   }, []);

//   const divStyle = {
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
//     transition: 'transform 1s, opacity 1s',
//     position: isVisible ? 'relative' : 'absolute',
//   };
//   const div1Style = {
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? 'translatey(0)' : 'translatey(100%)',
//     transition: 'transform 1s, opacity 1s',
//     position: isVisible ? 'relative' : 'absolute',
//   };
//   const div2Style = {
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? 'translatex(0)' : 'translatex(100%)',
//     transition: 'transform 1s, opacity 1s',
//     position: isVisible ? 'relative' : 'absolute',
//   };

//   const pStyle = {
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? 'translatex(0)' : 'translatex(100%)',
//     transition: 'transform 1s, opacity 1s',
//     position: isVisible ? 'relative' : 'absolute',
//   };
//   const p1Style = {
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? 'translatey(0)' : 'translatey(-100%)',
//     transition: 'transform 1s, opacity 1s',
//     position: isVisible ? 'relative' : 'absolute',
//   };
//   const p2Style = {
//     opacity: isVisible ? 1 : 0,
//     transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
//     transition: 'transform 1s, opacity 1s',

//     position: isVisible ? 'relative' : 'absolute',
//   };

//   return (
//     <div className="bg-black flex flex-col items-center justify-center px-4 w-screen">
//       <div className="bg-gray-100 text-gray-800 p-16 rounded-3xl shadow-md h-screen w-screen">
//    <h2 className="text-3xl font-bold mb-4 text-blue-600 text-center mt-10">Our Company Policies & Guidelines</h2>
//    <p className="text-lg mb-6">
//      At <span className="font-semibold">iBuy</span>, we are committed to delivering transparent, reliable, and customer-centric real estate solutions. Our policies ensure trust, quality, and compliance at every step.
//    </p>
//    <div className='flex flex-row gap-9 '>
//    <div className='flex-1 bg-slate-300 rounded-2xl p-3'>
//    <h3 className="text-2xl font-semibold mb-3">Our Core Policies:</h3>
//    <ul className="list-disc list-inside space-y-2 text-sm">
//      <li>🏠 **Transparency First**: All property dealings are conducted with complete honesty and clear documentation.</li>
//      <li>📊 **Data Privacy**: We prioritize your data security and adhere to industry-standard protection protocols.</li>
//      <li>📜 **Legal Compliance**: All transactions follow regional and national regulations to ensure hassle-free ownership.</li>
//      <li>🤝 **Customer Commitment**: We are dedicated to providing personalized service tailored to your needs.</li>
//      <li>🌍 **Sustainability**: We support eco-friendly practices in real estate development.</li>
//    </ul>
//    </div>
//  <div className='flex-1 bg-slate-300 rounded-2xl p-3'>
//  <h3 className="text-2xl font-semibold mt-6 mb-3">Guidelines for Buyers & Sellers:</h3>
//    <ul className="list-decimal list-inside space-y-2 text-sm">
//      <li>Ensure all property documents are verified before proceeding with any transaction.</li>
//      <li>Communicate your requirements clearly to our team for the best recommendations.</li>
//      <li>For buyers: Schedule site visits to explore properties and assess their condition.</li>
//      <li>For sellers: Provide accurate property details and maintain transparency in pricing.</li>
//      <li>Respect timelines and commitments during negotiations and closures.</li>
//    </ul>
//  </div>
//    </div>
//    <div className="mt-6">
//      <h3 className="text-xl font-bold text-blue-600">Need Assistance?</h3>
//      <p className="text-sm mt-2">
//        Our expert team is here to help you navigate every step of your real estate journey. For queries, contact us at <a href="mailto:contact@yourcompany.com" className="text-blue-500 hover:underline">contact@yourcompany.com</a>.
//      </p>
//    </div>
//  </div>

//  <div className=" rounded-lg shadow-2xl p-16 h-screen w-screen">
//         <h1 style={pStyle} className="text-4xl font-bold text-white mt-20 text-center">
//           Our Team
//         </h1>
//         <p style={pStyle} className="text-white text-lg mb-6 text-center">
//           We are passionate about providing innovative solutions to empower
//           individuals and businesses. Our team is dedicated to delivering
//           excellence in everything we do.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Card 1 */}
//           <div className="bg-gray-100 h-96 rounded-lg shadow-xl p-6 text-center" ref={divRef} style={divStyle}>
//             <div className="w-24 h-24 mx-auto mb-4  relative overflow-hidden rounded-full ">
//               <img
//                 src="https://media.licdn.com/dms/image/v2/D4E03AQHuHGVqw5eQfA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723689369673?e=1740614400&v=beta&t=QDgi4U7OEjmYKiGgEOThPPXRJt_jPPKnvamMQxcw9Lw"
//                 alt="Team member"
//                 className="w-full h-auto relative z-0 rounded-full transition-all duration-300 hover:scale-150"
//               />
//             </div>
//             <h3 style={pStyle} className="text-xl font-semibold text-gray-700">Saurabh choudhary</h3>
//             <p style={pStyle} className="text-gray-500">Founder & CEO</p>
//             <p style={pStyle} className="text-gray-500 mt-2">
//               "Innovation is at the heart of our journey."
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center" ref={divRef} style={div1Style}>
//             <div className="w-24 h-24 mx-auto mb-4  relative overflow-hidden rounded-full ">
//               <img
//                 src="https://media.licdn.com/dms/image/v2/D5603AQE221Eal7Hg9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728107546810?e=1740614400&v=beta&t=DqPi1Zgz6ELc5i31zQ2FlWYP-HmdO2ITYhqynNqAc_0"
//                 alt="Team member"
//                 className="w-full h-auto relative z-0 rounded-full transition-all duration-300 hover:scale-150"
//               />
//             </div>
//             <h3 style={p1Style} className="text-xl font-semibold text-gray-700">Nishit Sharma</h3>
//             <p style={p1Style} className="text-gray-500">Co-Founder & CTO</p>
//             <p style={p1Style} className="text-gray-500 mt-2">
//               "Building reliable and scalable technology."
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-gray-100 rounded-lg shadow-xl p-6 text-center" ref={divRef} style={div2Style}>
//             <div className="w-24 h-24 mx-auto mb-4  relative overflow-hidden rounded-full ">
//               <img
//                 src="https://via.placeholder.com/96"
//                 alt="Team member"
//                 className="w-full h-auto relative z-0 rounded-full transition-all duration-300 hover:scale-150"
//               />
//             </div>
//             <h3 style={p2Style} className="text-xl font-semibold text-gray-700">Alice Brown</h3>
//             <p style={p2Style} className="text-gray-500">Head of Operations</p>
//             <p style={p2Style} className="text-gray-500 mt-2">
//               "Ensuring seamless workflows and growth."
//             </p>
//           </div>
//         </div>
//       </div>

//     <div>
//         <div ref={divRef} style={divStyle}>
//           <p style={pStyle} className="text-gray-500 mt-20">
//             "We prioritize trust and efficiency, delivering reliable property dealings with transparent processes and quick turnarounds."
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
