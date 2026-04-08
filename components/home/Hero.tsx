'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Welcome to Learnmore Technologies</h1>
        <h2>Top Software Training & IT Skill-Building Institute in Bangalore</h2>
        <p>
          Unlock your future in tech with 100% job assistance programs, real-time projects,
          industry expert trainers, and top certification courses.
        </p>
        <Link href="/course" className="btn-primary-link">Explore Courses</Link>
      </div>
    </section>
  );
}