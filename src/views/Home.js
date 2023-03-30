import React from 'react';
import Navbar from './navbar'; 
import Footer from './footer';


function Home() {
  return (
    <div>
      <div>
            <Navbar />
        </div>
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p id="title">Hello there,</p>
          <p id="me">I'm Melissa Rubio</p>
          <img src='./images/certified.JPG' alt='graduation' className='grad-pic'></img>
          <p id="firstbox">Welcome to my personal portfolio! I am currently certified for 'Full Stack Development'
           from the University of Arizona Coding Bootcamp. With the skills I have acquired, I am working towards my goal of becoming a Web Developer. </p>
        </div>
      </div>
      <div id="aboutme" className="tile is-parent">
        <div className="tile is-child box">
          <p className="title" id="centertitle">About Me</p>
          <div>
            <p>
              My name is Melissa Rubio and I am born and raised in Phoenix, Arizona. I graduated High School on May, of 2021, and enrolled in 
              the University of Arizona Coding Bootcamp in July 2022. I have always had a passion for technology and I knew I wanted to do something in this field, 
              but I was uncertain what that would look like. I was automatically drawn to Web Development once I started doing more research. 
              I love that I can let my creativity shine in my work and the feeling I get when I successfully create an application that functions properly.
              I am stoked to learn new things and grow from my mistakes.
            </p>
          </div>
      </div>
    </div>
  </div>
<div>
  <Footer/>
</div>

</div>

  );
}

export default Home;




    