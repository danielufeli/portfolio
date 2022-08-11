import React from 'react'

import { social } from '../data';

const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map(({ icon, href }, index) => {
        return (
          <li className="flex justify-center item-center text-accent" key={index}>
            <a href={href} className="text-base">
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Socials