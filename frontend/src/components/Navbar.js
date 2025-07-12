import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#0f612f', padding: '10px', color: 'white', display: 'flex', justifyContent: 'space-around' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/users" style={{ color: 'white', textDecoration: 'none' }}>Users</Link> {/* New link */}
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact (Coming Soon!)</Link>
    </nav>
  );
}

export default Navbar;