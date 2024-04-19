import React from 'react';
import Image from 'next/image';
import ai from '../assets/ai1.png';
import people from '../assets/people.png';
import "./header.css";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Level Up Your University Experience: Connect, Collaborate, Celebrate</h1>
        <p>Finally, a social media app built just for University! Join the newsfeed, discover events, and
           connect with your community. It's your one-stop shop for campus life.
        </p>

        <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button className='hoverr' type="button">Get Started</button>
      </div>
      <div className="gpt3__header-content__people">
        <Image className='imggg' alt="img" src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <Image className='imtopg' alt="img" src={ai} />
    </div>
      </div>
  );
};

export default Header;
