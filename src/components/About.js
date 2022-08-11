import React from 'react'
import { Link } from 'react-scroll'

import Image from '../assets/img/daniel.png'

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img src={Image} alt="" className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl" />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Daniel Ufeli
              </h2>
              <p className="mb-4 text-accent">Software Engineer | Full-stack Web Developer,</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I am a skilled full-stack developer with experience in developing, both web, mobile, and desktop applications using modern technologies and practices.
                <br /> <br />
                I have more than 5years of experience in the below tech stacks:
                JavaScript, React, Redux, Vue, jQuery, HTML5, CSS3, Flutter. Ruby, Rails, PHP/Laravel, MySQL, NodeJs, Dart, Electonjs, Git, GitHub, AWS, Heroku, Netlify, Mobile/Responsive Development, RSpec, TDD, Chrome Dev Tools, Remote Pair-Programming, Teamwork, Mentoring.
                <br /> <br />
                I love collaborating in building complex web applications. With a solid technical background, a keen eye for detail, and a self-motivated and user-centered attitude, I switch easily from Back-End architecture to Front-End development and test automation.
              </p>
            </div>
            <Link to="contact" className="btn btn-md bg-accent hover:bg-accent-hover transition-all cursor-pointer">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
