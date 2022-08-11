import React from 'react'

import TestimonialSlider from './TestimonialSlider'

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-10 section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-40 before:hidden before:lg:block">
            What Other People Are Saying
          </h2>
          {/* <p className="subtitle">
            lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
        </div>
        <TestimonialSlider />
      </div>

    </section>
  )
}

export default Testimonials