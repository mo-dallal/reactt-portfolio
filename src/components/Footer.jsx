import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Location</h3>
              <p>2215 John Daniel Drive<br/>Clark, MO 65243</p>
            </div>
            
            <div className="footer-section">
              <h3>Around the Web</h3>
              <div className="social-links">
                <button className="social-btn">f</button>
                <button className="social-btn">t</button>
                <button className="social-btn">in</button>
                <button className="social-btn">d</button>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>About Freelancer</h3>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Your Website 2024</p>
      </div>
    </footer>
  );
}

export default Footer;