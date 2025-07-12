import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import AppointmentsListPage from './pages/AppointmentsListPage'; 

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersListPage />} />
          <Route path="/appointments" element={<AppointmentsListPage />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;