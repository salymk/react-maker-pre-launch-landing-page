import React from 'react';
import PricingCard from './pricing-card';
import freeSVG from '../assets/icon-free.svg';
import paidSVG from '../assets/icon-paid.svg';

const freeFeatures = [
  'Unlimited products',
  'Basic analytics',
  'Limited marketplace exposure',
  '10% fee per transaction',
];

const paidFeatures = [
  'Custom domain',
  'Advanced analytics and reports',
  'High marketplace visibility',
  '5% fee per transaction',
];

const Pricing = () => (
  <section className="pricing">
    <div className="pricing-header">
      <h2>Our pricing plans</h2>
      <p>
        We only make money when our creators make money. Our plans are always
        affordable, and it’s completely free to get started.
      </p>
    </div>
    <div className="pricing-container">
      <PricingCard
        imgClassname="pricing-svg"
        imgSrc={freeSVG}
        imgAlt="Free pricing"
        title="Dip your toe"
        description="Just getting started? No problem at all! Our free plan will take you a long way."
        price="Free"
        features={freeFeatures}
      />

      <PricingCard
        imgClassname="pricing-svg"
        imgSrc={paidSVG}
        imgAlt="Paid pricing"
        title="Dive right in"
        description="Ready for the big time? Our paid plan will help you take your business to the next level."
        price="Paid"
        features={paidFeatures}
      />
    </div>
  </section>
);

export default Pricing;
