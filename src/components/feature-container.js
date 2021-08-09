/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './feature-container.scss';

const FeatureContainer = (props) => (
  <div className="feature-container">
    <div className="feature-svg-container">
      <div className="svg-container">
        <div className="svg-background" />
        <img
          className={props.imgClassname}
          src={props.imgSrc}
          alt={props.imgAlt}
        />
      </div>
    </div>
    <div className="feature-content">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  </div>
);

export default FeatureContainer;
