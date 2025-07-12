import React from 'react';
import { useEffect, useState } from 'react';

function HomePage() {
  const [showSection1, setShowSection1] = useState(false);
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSection1(true), 100);
    setTimeout(() => setShowSection2(true), 400);
    setTimeout(() => setShowSection3(true), 700);
  }, []);

  // Smooth scroll with delay
  const handleScheduleClick = () => {
    const el = document.getElementById('appointment-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    const el = document.getElementById('about-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full font-sans">
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
          <div className="relative w-full h-full flex">
            <img src="/images/meow.png" alt="Ms. Meow" className="w-full h-[18rem] object-cover rounded-xl shadow-md" />
            <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Ms. Meow</span>
          </div>
          <div className="relative w-full h-full flex">
            <img src="/images/parrot.jpeg" alt="Peppy" className="w-full h-[18rem] object-cover rounded-xl shadow-md" />
            <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Peppy</span>
          </div>
          <div className="relative w-full h-full flex">
            <img src="/images/doogdle.jpeg" alt="Mister Dog" className="w-full h-[18rem] object-cover rounded-xl shadow-md" />
            <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Mister Dog</span>
          </div>
          <div className="relative w-full h-full flex">
            <img src="/images/hamster.jpeg" alt="Mr. Bun" className="w-full h-[18rem] object-cover rounded-xl shadow-md" />
            <span className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-40 px-2 py-1 rounded">Mr. Bun</span>
          </div>
        </div>
      </section>

      <section
        id="appointment-section"
        className={`min-h-screen flex flex-col lg:flex-row items-stretch bg-gray-100 p-0 transition-all duration-700 ease-out ${showSection3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Left side: dark background, logo, services, dog image */}
        <div className="lg:w-2/5 w-full h-[600px] lg:h-auto relative flex items-stretch">
          <img src="/images/dogue.jpg" alt="dog" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-start bg-gray-900 bg-opacity-70 p-12 text-white">
            <div className="flex items-center gap-3 mb-8">
              <img src="/images/paw.png" alt="pawtastic logo" className="w-12 h-12" />
              <span className="font-extrabold text-2xl tracking-wide text-white" style={{fontFamily: 'Open Sans, sans-serif'}}>PAWTASTIC</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-6 text-white" style={{fontFamily: 'Open Sans, sans-serif'}}>All services include:</h3>
            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-100" style={{fontFamily: 'Open Sans, sans-serif'}}>
              <li className="leading-relaxed">A photo update for you along</li>
              <li className="leading-relaxed">Notifications of sitter arrival</li>
              <li className="leading-relaxed">Treats for your pet, with your approval</li>
            </ul>
          </div>
        </div>
        {/* Right side: light background, heading, form */}
        <div className="lg:w-3/5 w-full flex items-center justify-center bg-gray-100 p-12">
          <div className="w-full max-w-xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">We’ll take your dog for a walk. Just tell us when!</h2>
            <form className="grid grid-cols-1 gap-6 text-gray-800">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-2 font-semibold text-gray-600">Frequency</label>
                  <div className="flex gap-2">
                    <label className="px-4 py-2 rounded-lg border border-gray-300 bg-gray-200 cursor-pointer">
                      <input type="radio" name="frequency" value="Recurring" required className="sr-only" />
                      <span>Recurring</span>
                    </label>
                    <label className="px-4 py-2 rounded-lg border border-gray-300 bg-gray-200 cursor-pointer">
                      <input type="radio" name="frequency" value="One time" required className="sr-only" />
                      <span>One time</span>
                    </label>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block mb-2 font-semibold text-gray-600">Start date</label>
                  <input
                    type="date"
                    className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-600">Days <span className="text-xs font-normal">Select all that apply</span></label>
                <div className="flex gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <label key={day} className="px-4 py-2 rounded-lg border border-gray-300 bg-white cursor-pointer">
                      <input type="checkbox" name="days" value={day} required className="sr-only" />
                      <span>{day}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-600">Times <span className="text-xs font-normal">Select all that apply</span></label>
                <div className="flex gap-2">
                  {['Morning', 'Afternoon', 'Evening'].map(time => (
                    <label key={time} className="px-4 py-2 rounded-lg border border-gray-300 bg-white cursor-pointer">
                      <input type="checkbox" name="times" value={time} required className="sr-only" />
                      <span>{time}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-600">Dog’s name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Enter your dog's name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-600">Notes for your sitter</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Route preferences, leash location, treats given, etc."
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-8 py-3 bg-gray-700 text-white rounded-xl font-bold text-lg shadow-md hover:bg-gray-900 transition-all w-full"
              >
                Schedule Service
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
