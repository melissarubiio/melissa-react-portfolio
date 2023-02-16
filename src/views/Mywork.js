import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar'


function Mywork() {
  return (
   <div>
     <div>
            <Navbar />
        </div>
    <div className="myWork">
            <a href="https://github.com/melissarubiio/Horiseon-Project">
                <div className="card1">
                    <div className="allCards">
                        <h2>Horiseon Project<i></i></h2>
                        <p>Cleaning up code.</p>
                    </div>
                </div>
            </a>
            <a href="https://github.com/melissarubiio/Weather-Cats">
                <div className="card2">
                    <div className="allCards">
                        <h2>Weather Cats<i></i></h2>
                        <p>Start your day off good with weather and cat photos.</p>
                    </div>
                </div>
            </a>
            <a href="https://github.com/melissarubiio/infinite-disc">
                <div className="card3">
                    <div className="allCards">
                        <h2>Infinite Disc<i class="github"></i></h2>
                        <p>Inventory tracker for record store.</p>
                    </div>
                </div>
            </a>
            
        </div>
        
   </div>
    );
}

export default Mywork;
