import React from 'react';

function Footer(){
    return(
       <div>
        <footer>
        <div className="links" style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
        <ul style={{ listStyle: 'none', display: 'flex' }}>
          <li className="logos">
            <a href="https://github.com/melissarubiio">
              <img src="./images/github.png" alt="github" title="github" />
            </a>
          </li>
          <li className="logos">
            <a href="mailto: melirubio0603@gmail.com">
              <img src="./images/gmail.png" alt="gmail" title="gmail" />
            </a>
          </li>
          <li className="logos">
            <a href="https://www.linkedin.com/in/melissa-rubio-4341981b1">
              <img src="./images/linkedin.png" alt="linkedin" title="linked in" />
            </a>
          </li>
        </ul>
      </div>
      <h5 id="made-by">Made by Melissa Rubio🌱</h5>

        <p>© 2022 Melissa Rubio's Portfolio</p>
        </footer>
      </div>
    )
}

export default Footer;