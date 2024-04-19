"use client"
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar flex justify-between items-center px-8 py-8'>
      <div className='gpt3__navbar-links flex items-center'>
        <div className='gpt3__navbar-links_logo'>
        <h1><strong>Uni-Net</strong></h1>
        </div>
        <div className='gpt3__navbar-links_container hidden lg:flex flex-row'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>About Us</a></p>
          <p><a href='#possibility'>Groups/Clubs</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='gpt3__navbar-sign hidden lg:flex items-center'>
        <p>Sign in</p>
        <button className='signn' type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu lg:hidden'>
        {
          toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => { setToggleMenu(false) }} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => { setToggleMenu(true) }} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <p><a href='#home'>Home</a></p>
              <p><a href='#wgpt3'>About Us</a></p>
              <p><a href='#possibility'>Groups/Clubs</a></p>
              <p><a href='#features'>Case Studies</a></p>
              <p><a href='#blog'>Library</a></p>
            </div>
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button className='signn' type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
