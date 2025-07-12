import React from 'react';

function BlogPreviewSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#e5e7eb',
        color: '#111827',
        padding: '4rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>From the Blog</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ margin: 0 }}>🚀 Launching Your First Product</h3>
            <p>Steps to go from idea to launch with confidence and clarity.</p>
          </div>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ margin: 0 }}>💡 Design Trends of 2025</h3>
            <p>What’s shaping digital design this year and why it matters.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPreviewSection;
