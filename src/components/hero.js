import React from 'react';
import heroMobile from '../assets/illustration-hero-mobile.png';
import bgHeroSquiggleSVG from '../assets/bg-hero-squiggle.svg';
import bgHeroLeftSVG from '../assets/illustration-hero-left.svg';
import bgHeroRightSVG from '../assets/illustration-hero-right.svg';

const Hero = () => (
  <section className="hero">
    <img
      className="bg-hero-left"
      src={bgHeroLeftSVG}
      alt="Background hero left"
      aria-hidden="true"
    />

    <div className="container">
      <img className="hero-mobile" src={heroMobile} alt="hero mobile" />
      <div className="hero-content">
        <img
          className="bg-hero-squiggle"
          src={bgHeroSquiggleSVG}
          alt="Background hero squiggle"
          aria-hidden="true"
        />

        <h1>
          Get paid for the work you <span>love</span> to do.
        </h1>
        <p>
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>
        {/* Mouse svg */}
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="42"
        >
          <g fill="none" fillRule="evenodd" stroke="#3EE9E5" strokeWidth="2">
            <rect width="24" height="40" x="1" y="1" rx="12" />
            <rect width="4" height="4" x="11" y="12" rx="2" />
          </g>
        </svg>
      </div>
    </div>
    <img
      className="bg-hero-right"
      src={bgHeroRightSVG}
      alt="Background hero right"
      aria-hidden="true"
    />
  </section>
);

export default Hero;
