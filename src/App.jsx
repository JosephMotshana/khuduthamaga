import "./App.css";
import logo from "./assets/logo.png"; // make sure your logo is in src/assets/

function App() {
  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <img src={logo} alt="Company Logo" className="logo" />
        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <h1>Welcome to Khuduthamaga Consulting</h1>
        <p>Your partner in business solutions, technology, and strategic growth.</p>

        <button className="cta-btn">Get Started</button>
      </header>

      {/* SECTION */}
      <section className="info-section">
        <h2>Our Services</h2>
        <p>
          We provide professional consulting services including software development, 
          business analysis, data insights, and digital strategy.
        </p>
      </section>
    </div>
  );
}

export default App;

