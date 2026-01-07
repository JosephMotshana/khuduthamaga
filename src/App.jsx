import "./global.css";
import logo from "./assets/logo.png"; // make sure your logo is in src/assets/

function App() {
  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="home"><img src={logo} alt="Company Logo" className="logo" /></a>
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

        {/* <button className="cta-btn">Get Started</button> */}
      </header>

<section className="About" id="about">
  <div className="About-container">
    {/* Heading stays outside the boxes */}
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
          Owned by <strong>Boipelo Nameng</strong>, our name is Setswana for <strong>“Executive.”</strong> This essence drives us to put plans and resolutions into effect—making business happen.
        </p>
        {/* <button className="About-btn">Explore Features</button> */}
      </div>
    </div>
  </div>
</section>

      {/* SECTION */}
      <section className="Services"id="services">
        <h2>Our Services</h2>
        <p>
          We provide professional consulting services including software development, 
          business analysis, data insights, and digital strategy.
        </p>
      </section>

       {/*contact*/}
      <section className="contact Us"id="contact">
 <h2>Contact Us</h2>
        <p>
          We provide professional consulting services including software development, 
          business analysis, data insights, and digital strategy.
        </p>
      </section>
    </div>
  );
}

export default App;

