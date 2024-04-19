import React from 'react';
import Feature from '../../components/feature/feature';
import "./feature.css"
const featuresData = [
  {
    title: 'Personalized Profiles',
    text: 'Tailor your online presence with customizable profiles, showcasing your interests and accomplishments to the university community.',
  },
  {
    title: 'Interactive News Feed',
    text: 'Stay updated on university events, announcements, and discussions with a dynamic news feed tailored to your preferences.',
  },
  {
    title: 'Event Calendar Integration',
    text: 'Never miss a beat with a comprehensive event calendar highlighting lectures, workshops, social gatherings, and more, all in one convenient location.',
  },
  {
    title: 'Badge Recognition System',
    text: 'Be recognized for your contributions and achievements within the community through a badge recognition system, fostering engagement and rewarding active participation.',
  },
];
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
    <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
      </div>
      
      <div className="gpt3__features-container">
          {featuresData.map((item,index) => (
             <Feature title={item.title} text={item.text} key={index} />
             ))}
      </div>
      </div>
  )
}

export default Features;