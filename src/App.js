import React from "react";
import "./App.css"; // Import a CSS file for styles

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="home">
        <h1>Welcome to Our Website</h1>
        <p>This is the home section. Scroll or use the navigation to explore more.</p>
      </section>

      <section id="about" className="about">
        <h1>About Us</h1>
        <p>Learn more about what we do and who we are.</p>
      </section>

      <section id="services" className="services">
        <h1>Our Services</h1>
        <p>Discover the services we offer to make your life easier.</p>
      </section>

      <section id="contact" className="contact">
        <h1>Contact Us</h1>
        <p>Get in touch with us through our contact details below.</p>
      </section>

      <footer>
        <p>&copy; 2025 Single Page Website</p>
      </footer>
    </div>
  );
}

export default App;
