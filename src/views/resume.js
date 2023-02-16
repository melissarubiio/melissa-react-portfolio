import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

function Resume(){
    return(
        <div>
            <div>
            <Navbar/>
            </div>
        <div class="resume">
            <p class="style-resume">Download my <a class="my-resume" href="https://docs.google.com/document/d/1Zw2UB6UFTOqUXLN1JJVoYj01L9EAh2-0tD-KHzR3T_g/edit?usp=sharing">Resume Here</a></p>
            <img src='./images/resume-ss.png' alt="resume-screenshot" className='resume-ss'></img>
            <div class="resume">
                <h3 class="proficient">Front-End Proficiencies</h3>
                <ul class="proficient">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div>
                <h3 class="proficient">Back-End Proficiencies</h3>
                <ul class="proficient">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
          </div>
          <div>
            <Footer/>
          </div>
          </div>
  
    )
}

export default Resume;


