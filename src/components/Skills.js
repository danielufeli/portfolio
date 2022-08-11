import React from 'react';

import { skills } from '../data';

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-row">
          {
            skills.map(({ image }, index) => (
              <div className="flex items-center justify-center" key={index}>
                <img src={image} alt="skill-logo" />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
