import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // send email using an email service of your choice
    window.location.href = `mailto:melirubio0603@gmail.com?subject=Contact%20Me&body=${message}`;
  };

  return (
    <div>
       <div>
      <Navbar />
      </div>
      <section className="contact">
        <h1 id='styleContact'>Contact Me Here</h1>
          
      </section>
      <div>
      <div id='linkedin'>
        <p>Check out my LinkedIn!</p>
        <a href="https://www.linkedin.com/in/melissa-rubio-4341981b1/" target="_blank" rel="noreferrer"><img src="./images/linkedin.png" alt="Clickable" id='style-logo'></img></a>
      </div>
      <div id='github'>
       <p> Check out my Github!</p>
        <a href="https://github.com/melissarubiio" target="_blank" rel="noreferrer"><img src="./images/github-pt2.png" alt="Clickable" id='style-logo'></img></a>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message" id='email-style'>Send me an Email:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <div id='submitbtn'>
        <button type="submit" id='submitC'>Submit</button>
        
        </div>
      </form>
      </div>
      <div>
  <Footer/>
</div>
    </div>
  );
}
export default Contact;


