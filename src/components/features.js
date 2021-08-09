import React from 'react';
import passionsSVG from '../assets/illustration-passions.svg';
import financialFreedomSVG from '../assets/illustration-financial-freedom.svg';
import workAnywhereSVG from '../assets/illustration-work-anywhere.svg';
import lifeStyleSVG from '../assets/illustration-lifestyle.svg';
import FeatureContainer from './feature-container';

const Features = () => (
  <section className="features">
    <FeatureContainer
      imgClassname="passion-svg"
      imgSrc={passionsSVG}
      imgAlt="Indulge in your passion"
      title="Indulge your passions"
      description="Your passions shouldn't be just for the weekend. Earn a living doing what you love."
    />

    <FeatureContainer
      imgClassname="financial-svg"
      imgSrc={financialFreedomSVG}
      imgAlt="Gain financial freedom"
      title="Gain financial freedom"
      description="Start making money work for you. There’s nothing quite like earning while you sleep."
    />

    <FeatureContainer
      imgClassname="lifestyle-svg"
      imgSrc={lifeStyleSVG}
      imgAlt="Choose your lifestyle"
      title="Choose your lifestyle"
      description="Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week."
    />

    <FeatureContainer
      imgClassname="work-svg"
      imgSrc={workAnywhereSVG}
      imgAlt="Work from anywhere"
      title="Work from anywhere"
      description="Selling online means not being pinned down. Want to work AND travel? Go for it!"
    />
  </section>
);

export default Features;
