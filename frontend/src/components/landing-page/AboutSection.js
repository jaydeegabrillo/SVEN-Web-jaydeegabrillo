import React, { useRef } from 'react';

function AboutSection({ handleScheduleClick, showSection2 }) {
  // Refs for each sound
  const meowRef = useRef(null);
  const cawRef = useRef(null);
  const barkRef = useRef(null);
  const squeakRef = useRef(null);

  // Play sound helper
  const playSound = (ref) => {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.play();
    }
  };

  return (
    <section
      id="about-section"
      className={`min-h-screen flex flex-col lg:flex-row items-center justify-center px-10 transition-all duration-700 ease-out ${showSection2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center py-24">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Expert care for your furry, feathery, or scaley friend
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
          We know how stressful it is to leave your pets at home alone. We're a team of experienced animal caregivers, well connected to local veterinarians. Trust us to love them like our own, and to keep them safe and happy till you're home.
        </p>
        <button
          onClick={handleScheduleClick}
          className="px-8 py-4 bg-gray-700 text-white rounded-xl font-bold text-lg shadow-md hover:bg-gray-900 transition-all w-full max-w-xs"
        >
          Schedule a visit
        </button>
      </div>
      <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-2 justify-items-stretch items-stretch">
        <div className="relative w-full h-full flex group">
          <img src="/images/meow.png" alt="Ms. Meow"
            className="w-full h-[18rem] object-cover rounded-xl shadow-md transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
            onMouseEnter={() => playSound(meowRef)}
            onMouseLeave={() => { if (meowRef.current) { meowRef.current.pause(); meowRef.current.currentTime = 0; } }}
          />
          <audio ref={meowRef} src="/sounds/meow.mp3" preload="auto" />
          <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Ms. Meow</span>
        </div>
        <div className="relative w-full h-full flex group">
          <img src="/images/parrot.jpeg" alt="Peppy"
            className="w-full h-[18rem] object-cover rounded-xl shadow-md transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
            onMouseEnter={() => playSound(cawRef)}
            onMouseLeave={() => { if (cawRef.current) { cawRef.current.pause(); cawRef.current.currentTime = 0; } }}
          />
          <audio ref={cawRef} src="/sounds/caw.mp3" preload="auto" />
          <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Peppy</span>
        </div>
        <div className="relative w-full h-full flex group">
          <img src="/images/doogdle.jpeg" alt="Mister Dog"
            className="w-full h-[18rem] object-cover rounded-xl shadow-md transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
            onMouseEnter={() => playSound(barkRef)}
            onMouseLeave={() => { if (barkRef.current) { barkRef.current.pause(); barkRef.current.currentTime = 0; } }}
          />
          <audio ref={barkRef} src="/sounds/bark.mp3" preload="auto" />
          <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Mister Dog</span>
        </div>
        <div className="relative w-full h-full flex group">
          <img src="/images/hamster.jpeg" alt="Mr. Bun"
            className="w-full h-[18rem] object-cover rounded-xl shadow-md transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
            onMouseEnter={() => playSound(squeakRef)}
            onMouseLeave={() => { if (squeakRef.current) { squeakRef.current.pause(); squeakRef.current.currentTime = 0; } }}
          />
          <audio ref={squeakRef} src="/sounds/squeak.mp3" preload="auto" />
          <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Mr. Bun</span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
