
import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About</h2>
        
        <div className="star-divider">
          <div className="line"></div>
          <span className="star">★</span>
          <div className="line"></div>
        </div>

        <div className="about-content">
          <div className="about-column">
            <p>
              Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="about-column">
            <p>
              You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
            </p>
          </div>
        </div>

        <button className="download-btn">
          <span>⬇</span> Free Download!
        </button>
      </div>
    </section>
  );
}

export default About;