import React from 'react';

function ContactSection() {
  return (
    <section
      style={{
        minHeight: '60vh',
        background: '#1f2937',
        color: '#ffffff',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let’s work together</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Contact us to turn your next idea into a real-world solution.
      </p>
      <button
        style={{
          background: '#10b981',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Get in Touch
      </button>
    </section>
  );
}

export default ContactSection;
