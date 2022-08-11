import React, { useState } from 'react'
import { XIcon, MenuAlt3Icon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

import { navigation } from '../data'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 169,
        damping: 60,
      },
    },
  }

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      }
    }
  }
  return (
    <nav className="relative">
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>
      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>

      {/* mobile menu */}
      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* close icon */}
        <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-8 right-8">
          <XIcon className="w-8 h-8" />
        </div>
        {/* links */}
        {navigation.map(({ name, href }, index) => {
          return (
            <li key={index} className="mb-8">
              <Link
                to={href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-xl cursor-pointer capitalize"
              >
                {name}
              </Link>
            </li>
          )
        })}
      </motion.ul>
    </nav>
  )
}

export default NavMobile