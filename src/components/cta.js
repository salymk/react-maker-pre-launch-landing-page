import React from 'react';
import bgFooterSquiggle from '../assets/bg-footer-squiggle.svg';

const CTA = () => (
  <section className="cta">
    <img
      className="bg-footer-squiggle"
      src={bgFooterSquiggle}
      alt="Background footer squiggle"
    />
    <h2>Get notified when we launch</h2>
    <form className="form">
      <input
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="Email address"
      />
      <button type="submit"> Get notified</button>
    </form>
  </section>
);

export default CTA;
