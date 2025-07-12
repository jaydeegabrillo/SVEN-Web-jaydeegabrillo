import React, { useRef, useState, useEffect } from 'react';

function AboutSection({ handleScheduleClick, showSection2 }) {
  // Refs for each sound
  const meowRef = useRef(null);
  const cawRef = useRef(null);
  const barkRef = useRef(null);
  const squeakRef = useRef(null);

  // Track if user has interacted
  const [userInteracted, setUserInteracted] = useState(false);
  // Track if any audio is playing
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    const onInteract = () => setUserInteracted(true);
    window.addEventListener('mousedown', onInteract, { once: true });
    window.addEventListener('touchstart', onInteract, { once: true });
    return () => {
      window.removeEventListener('mousedown', onInteract);
      window.removeEventListener('touchstart', onInteract);
    };
  }, []);

  // Attach ended listeners to all audio refs
  useEffect(() => {
    const audios = [meowRef, cawRef, barkRef, squeakRef];
    const handleEnded = () => setAudioPlaying(false);
    audios.forEach(ref => {
      if (ref.current) {
        ref.current.addEventListener('ended', handleEnded);
      }
    });
    return () => {
      audios.forEach(ref => {
        if (ref.current) {
          ref.current.removeEventListener('ended', handleEnded);
        }
      });
    };
  }, []);

  // Play sound helper
  const playSound = (ref) => {
    if (userInteracted && ref.current) {
      setAudioPlaying(true);
      ref.current.currentTime = 0;
      ref.current.play().catch(() => {});
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
        {/* Ms. Meow */}
        <div className="relative w-full h-full flex group">
          <img src="/images/meow.png" alt="Ms. Meow"
            className="w-full h-[18rem] object-contain rounded-xl shadow-md transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
            onClick={() => playSound(meowRef)}
            onMouseLeave={() => { if (meowRef.current) { meowRef.current.pause(); meowRef.current.currentTime = 0; } }}
          />
          <audio ref={meowRef} src="/sounds/meow.mp3" preload="auto" />
          <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Ms. Meow</span>
          <span className="absolute top-2 right-2 text-xs bg-yellow-400 bg-opacity-90 text-black px-2 py-1 rounded shadow-lg animate-bounce pointer-events-none">Click me!</span>
        </div>
        {/* Peppy */}
        <div className="relative w-full h-full flex group">
          <img src="/images/parrot.jpeg" alt="Peppy"
            className="w-full h-[18rem] object-contain rounded-xl shadow-md transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
            onClick={() => playSound(cawRef)}
            onMouseLeave={() => { if (cawRef.current) { cawRef.current.pause(); cawRef.current.currentTime = 0; } }}
          />
          <audio ref={cawRef} src="/sounds/caw.mp3" preload="auto" />
          <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Peppy</span>
          <span className="absolute top-2 right-2 text-xs bg-yellow-400 bg-opacity-90 text-black px-2 py-1 rounded shadow-lg animate-bounce pointer-events-none">Click me!</span>
        </div>
        {/* Mister Dog */}
        <div className="relative w-full h-full flex group">
          <img src="/images/doogdle.jpeg" alt="Mister Dog"
            className="w-full h-[18rem] object-contain rounded-xl shadow-md transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
            onClick={() => playSound(barkRef)}
            onMouseLeave={() => { if (barkRef.current) { barkRef.current.pause(); barkRef.current.currentTime = 0; } }}
          />
          <audio ref={barkRef} src="/sounds/bark.mp3" preload="auto" />
          <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Mister Dog</span>
          <span className="absolute top-2 right-2 text-xs bg-yellow-400 bg-opacity-90 text-black px-2 py-1 rounded shadow-lg animate-bounce pointer-events-none">Click me!</span>
        </div>
        {/* Mr. Bun */}
        <div className="relative w-full h-full flex group">
          <img src="/images/hamster.jpeg" alt="Mr. Bun"
            className="w-full h-[18rem] object-contain rounded-xl shadow-md transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
            onClick={() => playSound(squeakRef)}
            onMouseLeave={() => { if (squeakRef.current) { squeakRef.current.pause(); squeakRef.current.currentTime = 0; } }}
          />
          <audio ref={squeakRef} src="/sounds/squeak.mp3" preload="auto" />
          <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Mr. Bun</span>
          <span className="absolute top-2 right-2 text-xs bg-yellow-400 bg-opacity-90 text-black px-2 py-1 rounded shadow-lg animate-bounce pointer-events-none">Click me!</span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
