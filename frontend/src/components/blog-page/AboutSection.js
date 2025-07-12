import React from 'react';

function AboutSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        color: '#1f2937',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Who We Are</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>
          We are a multidisciplinary team dedicated to turning ideas into impactful digital experiences. From design
          thinking to scalable solutions, we believe in building with heart and purpose.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
