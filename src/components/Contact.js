import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { contact } from '../data'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    status: 'alert-primary'
  })

  const showAlert = (message, status = 'alert-primary', seconds = 5000) => {
    setAlert({
      show: true,
      message,
      status,
    })

    setTimeout(() => {
      setAlert({
        show: false,
        message: '',
        status: 'alert-primary'
      })
    }, seconds)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    emailjs.sendForm('service_u2b74b1', 'template_y6l5t0a', form.current, 'maLkEkVjJ9iVcF5je')
      .then((result) => {
        if (result.text === 'OK') {
          showAlert('Message Sent Successfully', 'alert-success', 10000)
          form.current.reset();
          setIsSubmitted(false);
        }
      }, (error) => {
        console.log(error.text);
        form.current.reset();
        setIsSubmitted(false);
      });
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-10 section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          {/* <p className="subtitle">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quisquam, quidem.
          </p> */}
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map(({ icon, title, subtitle, description }, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-x-4">
                <div className="text-accent rounded-sm w-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl ">{icon}</div>
                <div>
                  <h4 className="font-body text-xl mb-1">{title}</h4>
                  <p className="mb-1">{subtitle}</p>
                  <p className="text-accent font-normal">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <form ref={form} onSubmit={sendEmail} className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
              <input className="input" type="text" name="user_name" placeholder="Your Name" required />
              <input className="input" type="email" name="user_email" placeholder="Your E-mail" required />
            </div>
            <input className="input" type="text" name="subject" placeholder="Subject" required />
            <textarea className="textarea" name="message" placeholder="Your Message" required />
            {
              alert.show && <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                <span className="font-medium">Success!</span> {alert.message}.
              </div>
            }
            <button className="btn btn-lg bg-accent hover:bg-accent-hover" disabled={isSubmitted}>{isSubmitted ? 'Sending' : 'Send message'}</button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact