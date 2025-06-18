
import { useEffect, useState } from "react";

const slides = [
  { title: "Selling Speed", description: "Instant offers with closings in days." },
  { title: "Process Simplicity", description: "No listings, no showings, just a direct offer." },
  { title: "Certainty & Control", description: "Guaranteed offers with flexible closing dates." },
  { title: "Costs & Fees", description: "Transparent fees, no repair or staging costs." },
  { title: "Convenience", description: "Streamlined, tech-driven, hassle-free selling." },
];

export default function AutoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Slide change every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      <div className=" h-96 m-auto ml-[650px] mt-16">
        {slides.map((slide, i) => {
          let positionClass = "opacity-0 translate-x-full scale-90"; // Default (New slide coming from right)

          if (i === index) {
            positionClass = "opacity-100 scale-110 translate-x-0 z-10"; // Center slide (Zoom in)
          } else if (i === (index - 1 + slides.length) % slides.length) {
            positionClass = "opacity-70 scale-95 -translate-x-[350px]"; // Left slide (Shrink & move left)
          } else if (i === (index + 1) % slides.length) {
            positionClass = "opacity-50 scale-95 translate-x-[350px]"; // Right slide (Moves to Center)
          } else if (i === (index - 2 + slides.length) % slides.length) {
            positionClass = "opacity-0 -translate-x-[700px] scale-90"; // Fading out slide (Disappearing)
          }else if (i === (index + 2) % slides.length) {
            positionClass = "opacity-0 scale-90 translate-x-[700px]"; // Right slide (Moves to Center)
          }

          return (
            <div
              key={i}
              className={`absolute w-64 transition-all duration-1000 ease-in-out flex flex-col justify-center items-center 
                 h-64 p-5 rounded-3xl shadow-2xl bg-white 
                transform ${positionClass}`}
            >
              <h4 className="text-center text-green-600 font-bold text-xl">{slide.title}</h4>
              <p className="text-center text-gray-700 m-3 text-lg">{slide.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
