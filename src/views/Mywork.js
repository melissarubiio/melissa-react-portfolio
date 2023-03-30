import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Footer from './footer';


function Mywork() {
  return (
   <div>
     <div>
            <Navbar />
        </div>
    <div className="myWork">
            <a href="https://melissarubiio.github.io/Melissa-Rubio-Portfolio-2/" target="_blank" rel="noreferrer">
                <div className="card1" id='expand-card'>
                    <div className="allCards">
                        <h2>First Portfolio<i></i></h2>
                        <p>I was tasked to make a portfolio to showcase my skills and talents to future employers using only html and css. 
                            I went for something simple where the employer could get to know me, while also viewing my work. As a plus,
                            I used bootstrap to style the navbar and jumbotron. </p>
                        <a href="https://github.com/melissarubiio/Melissa-Rubio-Portfolio-2" target="_blank" rel="noreferrer"><img src="./images/github-pt2.png" alt="Clickable" id='github-logo'></img></a>

                    </div>
                </div>
            </a>
            <a href="https://melissarubiio.github.io/password-generator-js/" target="_blank" rel="noreferrer">
                <div className="card2" id='expand-card'>
                    <div className="allCards">
                        <h2>Password Generator<i></i></h2>
                        <p>My first javascript challenge was to create an application that an employee can use 
                            to generate a random password based on criteria they've selected. This app had 
                            run in the browser, and feature dynamically updated HTML and CSS powered by JavaScript code.
                        </p>
                        <a href="https://github.com/melissarubiio/password-generator-js" target="_blank" rel="noreferrer"><img src="./images/github-pt2.png" alt="Clickable" id='github-logo'></img></a>
                    </div>
                </div>
            </a>
            <a href="https://melissarubiio.github.io/schedule-my-day/" target="_blank" rel="noreferrer">
                <div className="card3" id='expand-card'>
                    <div className="allCards">
                        <h2>Scheduler<i class="github"></i></h2>
                        <p >A calendar application I created that allows a user to save events for each hour of the day.
                            I had to display the current date at the top of the calendar and color-code each block whether it is in the past, present, or future.
                            When the save button is clicked, information is stored in local storage.</p>
                        <a href="https://github.com/melissarubiio/schedule-my-day" target="_blank" rel="noreferrer"><img src="./images/github-pt2.png" alt="Clickable" id='github-logo'></img></a>
                    </div>
                </div>
            </a>
            <a href="https://melissarubiio.github.io/weatherr-forecast/" target="_blank" rel="noreferrer">
                <div className="card4" id='expand-card'>
                    <div className="allCards">
                        <h2>Weather Forecast<i></i></h2>
                        <p>Using an existing third-party weather API I had to learn how to retrieve the data by making requests with specific parameters to a URL. 
                            Using the data and functionality from the API, I had to showcase it, by making it functional and adding simple styling.</p>
                        <a href="https://github.com/melissarubiio/weatherr-forecast" target="_blank" rel="noreferrer"><img src="./images/github-pt2.png" alt="Clickable" id='github-logo'></img></a>

                    </div>
                </div>
            </a>
            <a href="https://melissarubiio.github.io/Weather-Cats/" target="_blank" rel="noreferrer">
                <div className="card5" id='expand-card'>
                    <div className="allCards">
                        <h2>Weather Cats<i></i></h2>
                        <p>First project: My group and I needed to make an interactive front-end project. We decided to go for something
                            fun, that could be targeted for any audience. We combined weather, cats, and inspirational quotes to brighten up days. We used
                            3 different API's for this and bulma to style the page.</p>
                        <a href="https://github.com/melissarubiio/Weather-Cats" target="_blank" rel="noreferrer"><img src="./images/github-pt2.png" alt="Clickable" id='github-logo'></img></a>

                    </div>
                </div>
            </a>
            <a href="https://youtu.be/97rADWZbEY4" target="_blank" rel="noreferrer">
                <div className="card6" id='expand-card'>
                    <div className="allCards">
                        <h2>Profile Generator<i></i></h2>
                        <p>I built a Node.js command-line application that takes in information 
                            about employees on a software engineering team. The command-line prompts the user with questions about their team.
                             Once all the information is answered, an HTML webpage generates that displays summaries for each person.</p>
                        <a href="https://github.com/melissarubiio/profile-generator" target="_blank" rel="noreferrer"><img src="./images/github-pt2.png" alt="Clickable" id='github-logo'></img></a>

                    </div>
                </div>
            </a>
            <a href="https://not3-tracker.herokuapp.com/" target="_blank" rel="noreferrer">
                <div className="card7" id='expand-card'>
                    <div className="allCards">
                        <h2>Note Taker<i></i></h2>
                        <p> I created an application that can be used to write and save notes.
                             This application used an Express.js back end and saves and retrieves note data from a JSON file.
                             The user has the option to add, save, and delete notes. The note can be given a header and details can be 
                             inserted under the header. </p>
                        <a href="https://github.com/melissarubiio/note-trackerr"  target="_blank" rel="noreferrer"><img src="./images/github-pt2.png" alt="Clickable" id='github-logo'></img></a>

                    </div>
                </div>
            </a>
            <a href="https://infinite-disc.herokuapp.com/" target="_blank" rel="noreferrer">
                <div className="card8" id='expand-card'>
                    <div className="allCards">
                        <h2>Infinite Disc<i></i></h2>
                        <p>Second Project: My team and I designed and built an app using the MVC paradigm, created our own server-side API, added user authentication, and connected to a database.
                            Our project allows a record company to keep track of their current inventory and update it if needed.
                             </p>
                        <a href="https://github.com/melissarubiio/infinite-disc" target="_blank" rel="noreferrer"><img src="./images/github-pt2.png" alt="Clickable" id='github-logo'></img></a>

                    </div>
                </div>
            </a>
            <a href="https://dine-diaryfe.herokuapp.com/" target="_blank" rel="noreferrer">
                <div className="card9" id='expand-card'>
                    <div className="allCards">
                        <h2>Dine Diary<i></i></h2>
                        <p>Final project: Showcase all the skills I've learned throughout the course with my partner.
                        We built a performant and scalable MERN-stack application that fulfills a real-world need, with a focus on data and user demand.
                        We decided to make a fitness page where the user can track meals and find new recipes. 
                        </p>
                        <a href="https://github.com/melissarubiio/MealTracker" target="_blank" rel="noreferrer"><img src="./images/github-pt2.png" alt="Clickable" id='github-logo'></img></a>

                    </div>
                </div>
            </a>
    
        </div>
        <div>
  <Footer/>
</div>
   </div>
    );
}

export default Mywork;
