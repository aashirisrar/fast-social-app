import React from 'react';
import Image from 'next/image';
import possibilityImage from '../assets/possibility1.jpg';
import "./possibility.css"
const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <Image className='abcd' src={possibilityImage} alt="" />
    </div>
    <div className="gpt3__possibility-content">
     {/* <h4>Request Early Access to Get Started</h4> */}
     <h1 className="gradient__text">The future holds limitless possibilities beyond your wildest dreams.</h1>
     <p>"Unlock the vibrant pulse of campus life with our university social media app – where connection meets inspiration, and every click sparks new possibilities!"</p>
     <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
