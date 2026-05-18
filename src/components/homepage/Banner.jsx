import React from 'react';

const Banner = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(/hero.jpg)`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content justify-start text-neutral-content text-center">
    <div className="max-w-5xl">
      <h1 className="mb-5 text-5xl font-bold">Book Your Game, Own the Arena</h1>
      <p className="mb-5">
        ArenaFlow helps players find, compare, and book sports facilities instantly — from football grounds to swimming pools — anytime, anywhere..
      </p>
      <button className="btn btn-primary rounded-full">Explore Facilities </button>
    </div>
  </div>
</div>
    );
};

export default Banner;