import React from 'react'
import { Link } from 'react-scroll'

import DanielImg from '../assets/img/home.png'

const Hero = () => {
  return (
    <section id="home" className="lg:h-[85vh] flex items-center bg-primary lg:bg:cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text:lg text-accent mb-[22px]">Hey, I'm Daniel 👏</p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] ">
              A Full-stack <br /> Web Developer
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">I believe in possibilities, with the right tools, data, team, and environment, you can create what you set your mind to achieve.</p>
            <Link to="contact" className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all cursor-pointer">
              Work with me
              </Link>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-center h-full">
            <img src={DanielImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero