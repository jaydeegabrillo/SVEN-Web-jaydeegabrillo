import React from 'react';

function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#abdf95',
        color: '#1f2937',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '4rem 2rem',
      }}
    >
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉 Welcome to Our World</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto' }}>
          A fresh perspective on creativity, design, and digital innovation.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
