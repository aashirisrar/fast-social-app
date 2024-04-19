import React from 'react';
import "./feature.css"
const Feature = (props) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div className="" />
        <h1 className="">{props.title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p className="">{props.text}</p>
      </div>
    </div>
  );
};

export default Feature;
