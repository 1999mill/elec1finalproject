
import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        Some text about who we are and what we do.<br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </div>

      <h2 className="center-text">Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="container">
              <h2>Mill Zozobrado</h2>
              LOREM IPSUM<br></br><br></br>
              Some text that describes me lorem ipsum ipsum lorem.<br></br>
              mill@example.com
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="container">
              <h2>Jimbo Camelotes</h2>
              LOREM IPSUM<br></br><br></br>
              Some text that describes me lorem ipsum ipsum lorem.<br></br>
              jimbo@example.com
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="container">
              <h2>John Pelin</h2>
              LOREM IPSUM<br></br><br></br>
              Some text that describes me lorem ipsum ipsum lorem.<br></br>
              john@example.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
