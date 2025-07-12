import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navStyle = {
    background: 'transparent',
    padding: '0',
    color: '#222',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    margin: '32px auto 0 auto',
    width: '90%',
    border: 'none',
    boxShadow: 'none',
    position: 'relative',
    zIndex: 2,
  };
  const tabStyle = {
    color: '#222',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    padding: '14px 32px 10px 32px',
    borderRadius: '8px 8px 0 0',
    background: 'linear-gradient(180deg, #f7f7f7 80%, #eaeaea 100%)',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)', // softer shadow
    border: '1px solid #ddd',
    borderBottom: 'none',
    marginRight: '4px',
    transition: 'background 0.2s, color 0.2s',
    cursor: 'pointer',
    position: 'relative',
    top: '12px', // sits further behind
    zIndex: 1, // behind active tab
  };
  const activeTabStyle = {
    ...tabStyle,
    background: '#fff',
    color: '#222',
    boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
    border: '1px solid #ddd',
    borderBottom: 'none', // No bottom border for seamless connection
    zIndex: 3,
    top: '0',
    marginBottom: '-2px', // Slight overlap to connect with content
  };
  const hoverTabStyle = {
    ...tabStyle,
    background: 'linear-gradient(180deg, #fff 80%, #eaeaea 100%)',
    color: '#222',
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
  };

  return (
    <nav style={navStyle}>
      <Link
        to="/appointments"
        style={location.pathname === '/appointments' ? activeTabStyle : tabStyle}
        onMouseEnter={e => Object.assign(e.target.style, hoverTabStyle)}
        onMouseLeave={e => Object.assign(e.target.style, location.pathname === '/appointments' ? activeTabStyle : tabStyle)}
      >
        Appointments
      </Link>
      <Link
        to="/users"
        style={location.pathname === '/users' ? activeTabStyle : tabStyle}
        onMouseEnter={e => Object.assign(e.target.style, hoverTabStyle)}
        onMouseLeave={e => Object.assign(e.target.style, location.pathname === '/users' ? activeTabStyle : tabStyle)}
      >
        Users
      </Link>
    </nav>
  );
}

export default Navbar;