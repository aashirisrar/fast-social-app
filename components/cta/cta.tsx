import React from 'react';
import "./cta.css"
const Cta = () => (
  <div className="gpt3__cta flex justify-between items-center flex-row p-8 mx-16 my-16 rounded-lg bg-gradient-to-br from-blue-700 to-blue-900">
    <div className="gpt3__cta-content text-left text-white">
      <p className="font-semibold text-sm leading-7">Request Early Access to Get Started</p>
      <h3 className="font-bold text-xl leading-10 mt-4">Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn ml-8">
      <button className="bg-black text-white font-semibold text-lg leading-6 py-2 px-4 rounded-lg focus:outline-none">Get Started</button>
    </div>
  </div>
);

export default Cta;
