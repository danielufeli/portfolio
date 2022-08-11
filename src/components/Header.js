import React, { useState, useEffect } from 'react';
import Logo from '../assets/img/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  }, [bg]);

  return <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
    <div className="container mx-auto h-full flex items-center justify-between">
      {/* Logo */}
      <a href="/">
        <img src={Logo} alt="Logo" className="h-8" />
      </a>
      {/* nav */}
      <div className="hidden lg:block">
        <Nav />
      </div>
      {/* Socials */}
      <div className="hidden lg:block">
        <Socials />
      </div>
      {/* NavMobile */}
      <div className="lg:hidden">
        <NavMobile />
      </div>
    </div>
  </header>
}

export default Header