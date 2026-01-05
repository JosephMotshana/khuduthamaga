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
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">ContactUs</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header className="hero" id="home">
        <h1>Welcome to Khuduthamaga Consulting</h1>
        <p>Your partner in business solutions, technology, and strategic growth.</p>

        {/* <button className="cta-btn">Get Started</button> */}
      </header>

      {/* SECTION */}
      <section className="Services"id="services">
        <h2>Our Services</h2>
        <p>
          We provide professional consulting services including software development, 
          business analysis, data insights, and digital strategy.
        </p>
      </section>

      {/*About*/}
      <section className="About"id="about">
 <h2>About Us</h2>
        <p>
          We provide professional consulting services including software development, 
          business analysis, data insights, and digital strategy.
        </p>
      </section>
      
       {/*contact*/}
      <section className="contactUs"id="contact">
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

