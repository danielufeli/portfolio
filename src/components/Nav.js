import React from 'react';
import { Link } from 'react-scroll';

import { navigation } from '../data';

const Nav = () => {
  return <nav>
    <ul className="flex space-x-8 capitalize text-[15px]">
      {navigation.map(({ name, href }, index) => (
        <li key={index} className="text-white hover:text-accent cursor-pointer">
          <Link
            to={href}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="transition-all duration-300">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
}

export default Nav