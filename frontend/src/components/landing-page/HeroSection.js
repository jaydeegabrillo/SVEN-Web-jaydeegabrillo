import React from 'react';

function HeroSection({ handleScheduleClick, handleAboutClick, showSection1 }) {
  return (
    <section
      className={`min-h-screen bg-cover bg-center flex items-center justify-end text-white p-10 relative transition-all duration-700 ease-out ${showSection1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ backgroundImage: `url('/images/dalmatian-in-flower-field.jpg')` }}
    >
      {/* Paw image on upper left */}
      <img
        src="/images/paw.png"
        alt="paw"
        className="absolute top-8 left-8 w-20 h-20 opacity-80 z-10"
      />
      {/* Top right navigation */}
      <div className="absolute top-10 right-16 flex gap-8 z-20">
        <span 
          className="text-white text-lg font-medium cursor-pointer hover:underline transition"
          onClick={handleAboutClick}>
            About us
        </span>
        <span
          className="text-white text-lg font-medium cursor-pointer hover:underline transition"
          onClick={handleScheduleClick}
        >
          Schedule a visit
        </span>
      </div>
      <div className="bg-black bg-opacity-60 p-16 rounded-2xl max-w-2xl ml-auto">
        <h1 className="text-5xl font-bold mb-6">We care for your furry little loved ones while you’re away</h1>
        <button
          onClick={handleScheduleClick}
          className="mt-6 px-8 py-4 bg-white bg-opacity-80 text-black rounded-xl hover:bg-yellow-300 text-xl font-semibold"
        >
          Schedule a visit
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
