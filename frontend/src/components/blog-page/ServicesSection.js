import React from 'react';

function ServicesSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#f9fafb',
        color: '#111827',
        padding: '4rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>What We Do</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', lineHeight: '2' }}>
          <li>✅ Branding & Identity</li>
          <li>✅ UX/UI Design</li>
          <li>✅ Web & Mobile Development</li>
          <li>✅ Digital Marketing & SEO</li>
        </ul>
      </div>
    </section>
  );
}

export default ServicesSection;
