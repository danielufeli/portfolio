import React from 'react'

import { social } from '../data'
import Logo from '../assets/img/logo.png'

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map(({ href, icon }, index) => (
              <a className="text-accent text-base" href={href} key={index}>
                {icon}
              </a>
            ))}
          </div>
          <div>
            <img className="w-20" src={Logo} alt="Logo" />
          </div>
          <p>&copy; 2022 Daniel Ufeli. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer