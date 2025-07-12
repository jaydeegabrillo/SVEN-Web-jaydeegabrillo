import React from 'react';

function BlogPostCard({ title, summary }) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      }}
    >
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: '#111827' }}>{title}</h3>
      <p style={{ margin: 0, color: '#6B7280' }}>{summary}</p>
    </div>
  );
}

export default BlogPostCard;
