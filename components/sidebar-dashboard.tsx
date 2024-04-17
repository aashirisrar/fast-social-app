"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from "./logo.svg";
import "./style.css";
import {
    Heart,
    Home,
    MessageCircle,
    PlusSquare,
    LogOut as LogoutIcon // Rename LogOut to avoid conflict with imported component name
  } from "lucide-react";
import { usePathname } from "next/navigation";

const NAVLINKS = [
    {name:"Home", path:"/dashboard", icon: Home},
    {name:"Messages", path:"/dashboard/messages", icon: MessageCircle},
    {name: "Create", path: "/dashboard/create", icon: PlusSquare},
    {name: "Friends", path: "/dashboard/friends", icon: PlusSquare, hideOnMobile: true},
    {name: "Notifications", path: "/dashboard/notifications", icon: Heart, hideOnMobile: true},
  ];

const SidebarDashboard = () => {
    const [isHover, setIsHover] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 768);
      };
  
      checkScreenSize();
  
      window.addEventListener('resize', checkScreenSize);
  
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (

        <>
      {isSmallScreen ? (
        <div className=''>
          <nav className="lg:hidden md:hidden fixed bottom-0 left-0 right-0 bg-black">
            <ul className="flex justify-between py-4 px-6 sm:px-12">
              {NAVLINKS.map((it) => {
                const LinkStar = it.icon;
                return (
                  <li key={it.name}>
                    <a href={it.path} className="block">
                      <span className="text-center">
                        <LinkStar className="sm:w-16 sm:h-16" /> {/* Adjust icon size for small screens */}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : (
        <aside className={`sidebar ${isHover ? "active" : ""}`}>
          <div className="wrapper">
            <div className="top__wrapper">
              <div className="header">
                <span className="header-logo">
                  <Image 
                    className='rounded-full bg-white'
                    src={Logo}
                    alt="img"
                    width={45}
                    height={45}
                    layout="fixed"
                  />
                </span>
                <div className="header-details">
                  <span className="header-name hidden lg:inline">Fast App</span>
                  <span className="header-email hidden lg:inline">Connects People</span>
                </div>
              </div>
              <nav className="sidebar-nav hidden lg:inline md:inline">
                <ul className="nav-menu">
                  {NAVLINKS.map((item) => {
                    const LinkIcon = item.icon;
                    return (
                      <li key={item.name} className="nav-menu__item">
                        <a href={item.path} className="nav-menu__link">
                          <span className="material-symbols-outlined md:hover:bg-slate-600 md:hover:p-3 md:hover:rounded-full transition duration-500">
                            <LinkIcon />
                          </span>
                          <span className="text hidden lg:inline">{item.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="footer">
              <a href="/" className="nav-menu__link">
                <span className="material-symbols-outlined footer-icon md:hover:bg-slate-600 md:hover:p-3 md:hover:rounded-full transition duration-500">
                  <LogoutIcon className='hidden md:inline lg:inline' />
                </span>
                <span className="footer-text hidden lg:inline">Logout</span>
              </a>
            </div>
          </div>
        </aside>
      )}
    </>
    )
}

export default SidebarDashboard