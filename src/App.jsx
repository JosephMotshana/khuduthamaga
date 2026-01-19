import "./global.css";
import logo from "./assets/logo.png";
import OrganogramImg from './assets/ORGANOGRAM.png';

function App() {
  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home"><img src={logo} alt="Company Logo" className="logo" /></a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li className="contact-link"><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header className="hero" id="home">
        <h1>Welcome to Khuduthamaga Consulting</h1>
          <p>Where agricultural skills are turned into real opportunities</p>
      </header>
      
<section className="About" id="about">
  <div className="About-container">
    <h2 className="About-title">WHO ARE <span>WE?</span></h2>
    
    <div className="Boxes-wrapper">
      {/* Box 1 */}
      <div className="Text-card">
        <p>
          <strong>Khuduthamaga Consulting (Pty) Ltd</strong> is an Education, Training & Development (ETD) enterprise with a dynamic potential for growth. Established in 2015, we are a 100% Black-owned and Female-owned business.
        </p>
      </div>

      {/* Box 2 */}
      <div className="Text-card">
        <p>
          <strong>Khuduthamaga Consulting (Pty) Ltd</strong> is Owned by <strong>Boipelo Nameng</strong>. Our name translates to <strong>“Executive”</strong> and that drives us to put plans and resolutions into effect—making business happen.
        </p>
        
      </div>
    </div>
  </div>
</section>

      {/* SECTION: OUR SERVICES */}
      <section className="Services" id="services">
        <h2 className="services-title">OUR <span className="highlight">SERVICES</span></h2>
        
        <div className="services-container">
          {/* Box 1: Accreditation */}
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
              {/* <button className="cta-btn">Get Started</button> */}
            </ul>
          </div>

          {/* Box 2: Service Details */}
          <div className="service-card">
            <h3>What We Provide</h3>
            <ul className="services-list">
              <li>We provide and facilitate structured agricultural education and training which are unit standard based and accredited by AgriSETA.</li>
              <li>We provide training, capacity building, business coaching, mentorship, strategic market linkages to cooperatives, small holder farmers, farm workers, aspirant farmers, and other stakeholders.</li>
              <li>We provide support to agricultural entrepreneurs to gain the necessary competitive position to sustain their business, thereby creating sustainable jobs opportunities especially in rural areas and farming communities.</li>
              <li>We offer formal and non-formal skills programmes in the field of agriculture.</li>
              <li>We offer Learnership Programmes which are accredited by AgriSETA and registered by the South African Qualification Authority (SAQA).</li>
              <li>Based on the high unemployment rate amongst young people in farming communities, we are committed to awareness creation about job and business opportunities.</li>
              <li>We conduct Food Security Awareness Campaigns in support of the Integrated Food Security Strategy of South Africa (IFSS).</li>
            </ul>
          </div>
        </div>

        {/* SECTION: ORGANOGRAM */}
        <div className="organogram-section">
          <h2 className="services-title">OUR <span className="highlight">ORGANOGRAM</span></h2>
          <div className="organogram-box">
             <img src={OrganogramImg} alt="Company Organogram" />
          </div>
        </div>
      </section>

       {/*contact*/}
    {/* SECTION 1: MISSION */}
      <section className="mission-section">
        <div className="container">
          <span className="section-label">Our Mission</span>
          <h2>Empowering Farmers</h2>
          <p>
            To train new farmers to manage and run their own profitable and sustainable farming businesses 
            To build long-term relationships with our clients by providing exceptional customer service in a manner that
              is cost effective, transparent, reliable and reputable.
            To become a valuable contributor of education, training and development in the agriculture, mining and 
              construction sectors by providing ethics-driven, value-added quality services that exceeds the expectations of our esteemed clients

          </p>
        </div>
      </section>

      {/* SECTION 2: VISION */}
      <section className="vision-section">
        <div className="container">
          <span className="section-label">Our Vision</span>
          <h2>Chasing Excellence</h2>
          <p>
            We aspire to be known country-wide as the Centre of Excellence in implementing accredited training programmes
            in agriculture and mining sectors of our economy.
          </p>
        </div>
      </section>

      {/* SECTION 3: CONTACT */}
      <section className="contact-wrapper" id="contact">
        <div className="contact-content">
          
          {/* Left Side: Info */}
          <div className="contact-text">
            <h1>Ready to Transform Your Life?</h1>
            <p>
              Join thousands of farmers and aspiring farmers.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
              <div className="icon-box"><a href="mailto:admin@khuduthamaga.co.za">✉️</a></div>
              <span>admin@khuduthamaga.co.za</span>
              </div>
              <div className="detail-item">
              <div className="icon-box"><a href="tel:+27122520172">📞</a></div>
              <span>+27 12 252 0172</span>
              </div>
              <div className="detail-item">
              <div className="icon-box"><a href="https://www.facebook.com/profile.php?id=100088153051626" target="_blank" rel="noopener noreferrer">🌐</a></div>
              <span>Facebook</span>
              </div>
              <div className="detail-item">
              <div className="icon-box"><a href="https://www.google.com/maps?q=1027+Itlotleng+Section,+BETHANIE,+0270,+North+West,+South+Africa" target="_blank" rel="noopener noreferrer">📍</a></div>
              <span>1027 Itlotleng Section,
                    BETHANIE,
                    0270,
                    North West,
                    South Africa
              </span>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
<div className="form-card">
  <h3>Get Started Today</h3>
  
  {/* Form*/}

  <form action="https://formspree.io/f/xkogdjbr" method="POST">
    
    <div className="input-group">
      <label htmlFor="full-name">Full Name</label>
      <input 
        id="full-name"
        type="text" 
        name="name" 
        placeholder="Enter your full name" 
        required 
      />
    </div>
    
    <div className="input-group">
      <label htmlFor="email">Email Address</label>
      <input 
        id="email"
        type="email" 
        name="email" 
        placeholder="Enter your email address" 
        required 
      />
    </div>
    
    <div className="input-group">
      <label htmlFor="message">Your Message</label>
      <textarea 
        id="message"
        name="message" 
        placeholder="How can we help you?" 
        required
      ></textarea>
    </div>
    
    {/* This hidden field tells Formspree where to send the user after they click send */}
    <input type="hidden" name="_subject" value="New Contact Form Submission!" />

    <button type="submit" className="submit-button">
      Send Message <span>→</span>
    </button>
  </form>
</div>

        </div>
      </section>
    </div>
  );
}

export default App;

