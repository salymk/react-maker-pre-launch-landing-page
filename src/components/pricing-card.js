/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const PricingCard = (props) => (
  <div className="pricing-card">
    {/* icon-free.svg */}
    <img
      className={props.imgClassname}
      src={props.imgSrc}
      alt={props.imgAlt}
      aria-hidden="true"
    />
    <div className="card-header">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
    <div className="card-content">
      <h2>{props.price}</h2>
      <div className="price-features">
        {props.features.map((feature) => (
          <div>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path
                fill="#3EE9E5"
                d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
              />
            </svg>
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PricingCard;
