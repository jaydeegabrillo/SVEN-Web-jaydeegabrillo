import React from 'react';
import BlogPostCard from './BlogPostCard';

const posts = [
  {
    id: 1,
    title: 'How to Start Your Day Right ☀️',
    summary: 'Simple morning rituals that energize your day...',
  },
  {
    id: 2,
    title: '5 Ways to Stay Productive as a Developer',
    summary: 'A quick guide to staying focused while coding...',
  },
];

function BlogList() {
  return (
    <section style={{ padding: '2rem', display: 'grid', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
      {posts.map((post) => (
        <BlogPostCard key={post.id} title={post.title} summary={post.summary} />
      ))}
    </section>
  );
}

export default BlogList;
