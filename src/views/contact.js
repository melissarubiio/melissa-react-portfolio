import React, { useState } from 'react';
import Navbar from './navbar';
import { validateEmail } from './utils/contact-form';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Email is invalid.');
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    }

    if (e.target.name === 'name' || e.target.name === 'message') {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <div>
        <div>
      <Navbar />
      </div>
      <section className="contact">
        <h1>Get in contact with me here!</h1>
        <div>
          <h2 className="contact-style">Contact Me</h2>
          <form className="contact-form" id="contactForm">
            <label className="contactTitle">Name:</label>
            <input
              className="userInput"
              type="text"
              name="name"
              id="username"
              value={formState.name}
              onChange={handleInputChange}
            />
            <label className="contactTitle">Email Address:</label>
            <input
              className="userInput"
              type="email"
              name="email"
              id="email"
              value={formState.email}
              onChange={handleInputChange}
            />
            <label className="contactTitle">Message:</label>
            <textarea
              className="messageInput"
              type="text"
              name="message"
              id="message"
              value={formState.message}
              onChange={handleInputChange}
            />
            <button className="submitButton" type="submit" id="submit">
              Submit
            </button>
            {errorMessage && <div className="error">{errorMessage}</div>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
