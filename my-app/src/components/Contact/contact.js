// Contact.js
import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm('service_mhiv7xj', 'template_cockw4f', form.current, {
        publicKey: 'nZs1A6RuMuNUDLW4x',
      });
      console.log('SUCCESS!', result);
    } catch (error) {
      console.error('FAILED...', error.text);
    }
  };

  return (
    <section className="contactPage">
      <div className="contactContent">
          <h1 className="title">Let's Connect!</h1>
          <div className="links">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a href="https://www.linkedin.com/in/keerthi-binu/" class="fa fa-linkedin"></a>
            <a href="https://gitlab.com/Keerthiii098" class="fa fa-gitlab"></a>
            <a href="https://github.com/Keerthibinu" class="fa fa-github"></a>
            <a href="https://www.instagram.com/keerthi_binu/" class="fa fa-instagram"></a>
          </div>
          <p className="desc">Always Learning - Share Your Thoughts!</p>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="inputField" placeholder="Name" name="your_name"/>
            <input type="email" className="inputField" placeholder="Email" name="your_email"/>
            <textarea rows="5" className="inputField" placeholder="Type your message.." name="message"></textarea>
            <button className="submitBtn" type="submit">Submit</button>
          </form>
        </div>
    </section>
  );
}

export default Contact;
