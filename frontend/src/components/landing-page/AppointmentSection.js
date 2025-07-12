import React, { useState } from 'react';

function AppointmentSection({ showSection3, handleScrollToTop }) {
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [dogName, setDogName] = useState('');
  const [notes, setNotes] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFrequencyChange = (value) => {
    setSelectedFrequency(value);
  };
  const handleDayChange = (value, checked) => {
    setSelectedDays(prev => checked ? [...prev, value] : prev.filter(day => day !== value));
  };
  const handleTimeChange = (value, checked) => {
    setSelectedTimes(prev => checked ? [...prev, value] : prev.filter(t => t !== value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const payload = {
      dog_name: dogName,
      frequency: selectedFrequency,
      days: selectedDays,
      time: selectedTimes[0] || '',
      notes: notes,
      appointment_date: appointmentDate ? new Date(appointmentDate).toISOString() : ''
    };

    try {
      const baseUrl = process.env.REACT_APP_API_BASE_URL || '';
      const res = await fetch(`${baseUrl}/api/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to schedule appointment');
      
      setSuccess('Appointment scheduled successfully!');
      
      setTimeout(() => setSuccess(''), 5000);

      // Clear form fields after successful booking
      setSelectedFrequency('');
      setSelectedDays([]);
      setSelectedTimes([]);
      setDogName('');
      setNotes('');
      setAppointmentDate('');
    } catch (err) {
      setError(err.message || 'Error scheduling appointment');
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <section
      id="appointment-section"
      className={`min-h-screen flex flex-col lg:flex-row items-stretch bg-gray-100 p-0 transition-all duration-700 ease-out ${showSection3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Left side */}
      <div className="lg:w-2/5 w-full h-[600px] lg:h-auto relative flex items-stretch">
        <img src="/images/dogue.jpg" alt="dog" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-start bg-gray-900 bg-opacity-70 p-12 text-white">
          <div onClick={handleScrollToTop} className="flex items-center gap-3 mb-8">
            <img src="/images/paw.png" alt="pawtastic logo" className="w-12 h-12" />
            <span className="font-extrabold text-2xl tracking-wide text-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>PAWTASTIC</span>
          </div>
          <h3 className="text-2xl font-extrabold mb-6 text-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>All services include:</h3>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-100" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <li className="leading-relaxed">A photo update for you along</li>
            <li className="leading-relaxed">Notifications of sitter arrival</li>
            <li className="leading-relaxed">Treats for your pet, with your approval</li>
          </ul>
        </div>
      </div>

      {/* Right side */}
      <div className="lg:w-3/5 w-full flex items-center justify-center bg-gray-100 p-12">
        <div className="w-full max-w-xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">We’ll take your dog for a walk. Just tell us when!</h2>
          <form className="grid grid-cols-1 gap-6 text-gray-800" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-2 font-semibold text-gray-600">Frequency <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  <label className={`px-4 py-2 rounded-lg border border-gray-300 bg-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-700 hover:text-white ${selectedFrequency === 'Recurring' ? 'bg-gray-700 text-white' : ''}`}>
                    <input type="radio" name="frequency" value="Recurring" required className="sr-only" checked={selectedFrequency === 'Recurring'} onChange={() => handleFrequencyChange('Recurring')} />
                    <span>Recurring</span>
                  </label>
                  <label className={`px-4 py-2 rounded-lg border border-gray-300 bg-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-700 hover:text-white ${selectedFrequency === 'One time' ? 'bg-gray-700 text-white' : ''}`}>
                    <input type="radio" name="frequency" value="One time" required className="sr-only" checked={selectedFrequency === 'One time'} onChange={() => handleFrequencyChange('One time')} />
                    <span>One time</span>
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-semibold text-gray-600">Start date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  min={new Date().toISOString().split('T')[0]}
                  required
                  value={appointmentDate}
                  onChange={e => setAppointmentDate(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-600">Days <span className="text-red-500">*</span> <span className="text-xs font-normal">Select all that apply</span></label>
              <div className="flex gap-2 flex-wrap">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <label key={day} className={`px-4 py-2 rounded-lg border border-gray-300 bg-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-700 hover:text-white ${selectedDays.includes(day) ? 'bg-gray-700 text-white' : ''}`}>
                    <input type="checkbox" name="days" value={day} className="sr-only" checked={selectedDays.includes(day)} onChange={e => handleDayChange(day, e.target.checked)} />
                    <span>{day}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-600">Times <span className="text-red-500">*</span> <span className="text-xs font-normal">Select all that apply</span></label>
              <div className="flex gap-2">
                {['Morning', 'Afternoon', 'Evening'].map(time => (
                  <label key={time} className={`px-4 py-2 rounded-lg border border-gray-300 bg-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-700 hover:text-white ${selectedTimes.includes(time) ? 'bg-gray-700 text-white' : ''}`}>
                    <input type="checkbox" name="times" value={time} className="sr-only" checked={selectedTimes.includes(time)} onChange={e => handleTimeChange(time, e.target.checked)} />
                    <span>{time}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-600">Dog’s name <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your dog's name"
                required
                value={dogName}
                onChange={e => setDogName(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-600">Notes for your sitter</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Route preferences, leash location, treats given, etc."
                value={notes}
                onChange={e => setNotes(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-gray-700 text-white rounded-xl font-bold text-lg shadow-md hover:bg-gray-900 transition-all w-full"
              disabled={loading}
            >
              {loading ? 'Scheduling...' : 'Schedule Service'}
            </button>

            {error && (
              <div className="mt-4 p-4 bg-red-500 text-white rounded-lg text-center font-medium">
                {error}
              </div>
            )}
            {success && (
              <div className="mt-4 p-4 bg-green-500 text-white rounded-lg text-center font-medium">
                {success}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}


export default AppointmentSection;
