"use client"
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Box } from 'lucide-react';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar flex justify-between items-center px-8 py-8'>
      <div className='gpt3__navbar-links flex items-center'>
        <div className='gpt3__navbar-links_logo'>
          <div className='flex text-primary-foreground items-center gap-2'>
            <Box />
            <h1 ><strong> Connect Inc</strong></h1>
          </div>
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
        <Link href='sign-in'>
          <p>Sign in</p>
        </Link>
        <Link href='/sign-up'>
          <Button className='signn'>Sign up</Button>
        </Link>
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
              <Link href='/sign-in'>
                <p>Sign in</p>
              </Link>
              <Link href='/sign-up'>
                <Button className='signn'>Sign up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
