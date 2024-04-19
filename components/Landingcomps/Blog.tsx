import React from 'react';
import Article from '../../components/article/article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js';
import "./blog.css"
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening<br />
       We are blogging about it</h1>
      </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
       <Article imgUrl={blog01} date="Jan 26, 2024" text="Uni-Net is the future. Let us explore how it is?" />
                </div>
      <div className="gpt3__blog-container_groupB">
      <Article imgUrl={blog02} date="Jan 27, 2024" text="Are you missing out on the hottest campus events? Find out here!" />
      <Article imgUrl={blog03} date="Feb 24, 2024" text="Curious about the latest trends in campus fashion? We've got the scoop!" />
      <Article imgUrl={blog04} date="March 20, 2024" text="Want to know the key to making the most of your study abroad experience?" />
      <Article imgUrl={blog05} date="April 02, 2024" text="How can you network effectively and land your dream internship?" />
      </div>
      </div>
    </div>
  );
};

export default Blog;
