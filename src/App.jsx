import React, { useState } from 'react';
import "./global.css";
import logo from "./assets/logo.png"; 
import OrganogramImg from './assets/ORGANOGRAM.png';

function App() {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home"><img src={logo} alt="Company Logo" className="logo" /></a>
        
        {/* HAMBURGER ICON */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
          <div className={isMenuOpen ? "bar open" : "bar"}></div>
        </div>

        <ul className={isMenuOpen ? "nav-links mobile-open" : "nav-links"}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li className="contact-link"><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header className="hero" id="home">
        <h1>Welcome to Khuduthamaga Consulting</h1>
        <p>Where agricultural skills are turned into real opportunities</p>
      </header>

      {/* ABOUT SECTION */}
      <section className="About" id="about">
        <div className="About-container">
          <h2 className="About-title">WHO ARE <span>WE?</span></h2>
          <div className="Boxes-wrapper">
            <div className="Text-card">
              <p>
                <strong>Khuduthamaga Consulting (Pty) Ltd</strong> is an Education, Training & Development (ETD) enterprise with a dynamic potential for growth. Established in 2015, we are a 100% Black-owned and Female-owned business.
              </p>
            </div>
            <div className="Text-card">
              <p>
                <strong>Khuduthamaga Consulting (Pty) Ltd</strong> is Owned by <strong>Boipelo Nameng</strong>. Our name translates to <strong>“Executive”</strong> and that drives us to put plans and resolutions into effect—making business happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="Services" id="services">
        <h2 className="services-title">OUR <span className="highlight">SERVICES</span></h2>
        <div className="services-container">
          <div className="service-card">
            <h3>AgriSETA Accredited Qualifications</h3>
            <p className="card-intro">We are accredited by AgriSETA to offer the following Full Qualifications:</p>
            <ul className="qual-list">
              <li><strong>National Certificate in Plant Production</strong> <br/> (NQF Level 3 - SAQA Code: 49052)</li>
              <li><strong>National Certificate in Landscaping</strong> <br/> (NQF Level 3 - SAQA Code: 66649)</li>
              <li><strong>National Certificate in Animal Production</strong> <br/> (NQF Level 2 – SAQA Code: 48976)</li>
              <li><strong>National Certificate in Poultry Production</strong> <br/> (NQF Level 2 – SAQA Code: 49582)</li>
              <li><strong>National Certificate in Mixed Farming Systems</strong> <br/> (NQF Level 2 – SAQA Code: 48977)</li>
              <li><strong>National Certificate in Plant Production</strong> <br/> (NQF Level 2 – SAQA Code: 48975)</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>What We Provide</h3>
            <ul className="services-list">
              <li>Structured agricultural education and training accredited by AgriSETA.</li>
              <li>Training, coaching, and mentorship to small holder farmers and cooperatives.</li>
              <li>Support to agricultural entrepreneurs to create sustainable jobs.</li>
              <li>Formal and non-formal skills programmes in agriculture.</li>
              <li>Learnership Programmes accredited by AgriSETA and registered by SAQA.</li>
              <li>Awareness creation for youth about agricultural sector opportunities.</li>
              <li>Food Security Awareness Campaigns (IFSS).</li>
            </ul>
          </div>
        </div>

        <div className="organogram-section">
          <h2 className="services-title">OUR <span className="highlight">ORGANOGRAM</span></h2>
          <div className="organogram-box">
             <img src={OrganogramImg} alt="Company Organogram" />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-section">
        <div className="About-container">
          <span className="section-label">Our Mission</span>
          <h2>Empowering Farmers</h2>
          <p>
            To train new farmers to manage and run their own profitable and sustainable farming businesses.
            To build long-term relationships with our clients through exceptional service that is cost effective, transparent, and reputable.
          </p>
        </div>
      </section>

      <section className="vision-section">
        <div className="About-container">
          <span className="section-label">Our Vision</span>
          <h2>Chasing Excellence</h2>
          <p>
            We aspire to be known country-wide as the Centre of Excellence in implementing accredited training programmes in agriculture and mining sectors.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-wrapper" id="contact">
        <div className="contact-content">
          <div className="contact-text">
            <h1>Ready to Transform Your Life?</h1>
            <p>Join thousands of farmers and aspiring farmers.</p>
            <div className="contact-details">
              <div className="detail-item">
                <div className="icon-box"><a href="mailto:admin@khuduthamaga.co.za">✉️</a></div>
                <span>admin@khuduthamaga.co.za</span>
              </div>
              <div className="detail-item">
                <div className="icon-box"><a href="tel:+27122520172">📞</a></div>
                <span>+27 12 252 0172</span>
              </div>
              {/* FACEBOOk */}
              <div className="detail-item">
                <div className="icon-box"><a href="https://www.facebook.com/profile.php?id=100088153051626" target="_blank">🌐</a></div>
                <span>Facebook</span>
              </div>
              <div className="detail-item">
                <div className="icon-box"><a href="https://www.google.com/maps?q=1027+Itlotleng+Section,+BETHANIE,+0270,+North+West,+South+Africa">📍</a></div>
                <span>1027 Itlotleng Section, BETHANIE, 0270</span>
              </div>
            </div>
          </div>

          <div className="form-card">
            <h3>Get Started Today</h3>
            <form action="https://formspree.io/f/xkogdjbr" method="POST">
              <div className="input-group">
                <label htmlFor="full-name">Full Name</label>
                <input id="full-name" type="text" name="name" placeholder="Enter your full name" required />
              </div>
              
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" placeholder="Enter your email address" required />
              </div>

              {/* UPDATED: Text input instead of select */}
              <div className="input-group">
                <label htmlFor="student-count">Number of Students</label>
                <input 
                  id="student-count" 
                  type="text" 
                  name="students" 
                  placeholder="e.g. 500 students" 
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="submit-button">Send Message <span>→</span></button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
