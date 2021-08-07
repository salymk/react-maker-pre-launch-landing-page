import React from 'react';
import passionsSVG from '../assets/illustration-passions.svg';
import financialFreedomSVG from '../assets/illustration-financial-freedom.svg';
import workAnywhereSVG from '../assets/illustration-work-anywhere.svg';
import lifeStyleSVG from '../assets/illustration-lifestyle.svg';

const Features = () => (
  <section className="features">
    <div className="feature-container">
      <div className="feature-svg-container">
        <div className="svg-container">
          <div className="svg-background" />
          <img
            className="passion-svg"
            src={passionsSVG}
            alt="Indulge in your passion"
          />
        </div>
      </div>
      <div className="feature-content">
        <h3> Indulge your passions</h3>
        <p>
          Your passions shouldn't be just for the weekend. Earn a living doing
          what you love.
        </p>
      </div>
    </div>
    <div className="feature-container">
      <div className="feature-svg-container">
        <div className="svg-container">
          <div className="svg-background" />
          <img
            className="financial-svg"
            src={financialFreedomSVG}
            alt="Gain financial freedom"
          />
        </div>
      </div>
      <div className="feature-content">
        <h3> Gain financial freedom</h3>
        <p>
          Start making money work for you. There’s nothing quite like earning
          while you sleep.
        </p>
      </div>
    </div>
    <div className="feature-container">
      <div className="feature-svg-container">
        <div className="svg-container">
          <div className="svg-background" />
          <img
            className="lifestyle-svg"
            src={lifeStyleSVG}
            alt="Choose your lifestyle"
          />
        </div>
      </div>
      <div className="feature-content">
        <h3>Choose your lifestyle</h3>
        <p>
          Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
          your week.
        </p>
      </div>
    </div>
    <div className="feature-container">
      <div className="feature-svg-container">
        <div className="svg-container">
          <div className="svg-background" />
          <img
            className="work-svg"
            src={workAnywhereSVG}
            alt="Work from anywhere"
          />
        </div>
      </div>
      <div className="feature-content">
        <h3> Work from anywhere</h3>
        <p>
          Selling online means not being pinned down. Want to work AND travel?
          Go for it!
        </p>
      </div>
    </div>
  </section>
);

export default Features;
