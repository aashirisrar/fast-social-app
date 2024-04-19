import React from 'react';
import Feature from "@/components/feature/feature";
import "./whatgpt3.css";
const Whatgpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Uni-Net" text="Step into a digital oasis where learning meets connection, and community 
      thrives. Our University Social Media App is your gateway to a vibrant academic universe. Join us in shaping 
      tomorrow, one connection at a time. Welcome to Uni-Net." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Campus Feed" text="Stay Informed, Stay Connected - Keep up with campus life and stay connected with your university community through real-time updates and interactions." />
      <Feature title="Knowledgebase" text="Where Networking Meets Learning – Forge meaningful connections while expanding your academic horizons in a dynamic digital environment." />
      <Feature title="Connect EDU" text="Uniting Minds, Sharing Knowledge Experience seamless networking and knowledge sharing on one unified platform." />
    </div>
  </div>
  );
};

export default Whatgpt3;
