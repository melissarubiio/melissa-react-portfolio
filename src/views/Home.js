import React from 'react';
import Navbar from './navbar' 
import Footer from './footer'


function Home() {
  return (
    <div>
      <div>
            <Navbar />
        </div>
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title" id="firstbox">Hello there,</p>
          <p id="me">I'm Melissa Rubio</p>
          <img src='./images/grad-pic.jpg' alt='graduation' className='grad-pic'></img>
          <p id="firstbox">Welcome to my personal portfolio! I am curretly enrolled in the University of Arizona's 
          Coding Bootcamp. At this Bootcamp, I am acquiring the skills of HTML, CSS, and Javascript. 
          With these skills I am working towards my goal of becoming a web developer. </p>
        </div>
      </div>
      <div id="aboutme" className="tile is-parent">
        <div className="tile is-child box">
          <p className="title" id="centertitle">About Me</p>
          <div>
            <p>
              My name is Melissa Rubio and I am born and mostly raised in Phoenix, Arizona. I graduated High School on May, of 2021, and I am
              curretly enrolled in the University of Arizona's Coding Bootcamp. I have always had an interest in technology and am excited to be learning the skills needed to become a web developer. In my free time, I enjoy reading and spending time with my family and friends.
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




    