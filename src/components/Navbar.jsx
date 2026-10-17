function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span className="logo-icon">AI</span>
        Frontend Helper
      </a>

      <div className="nav-links">
        <a href="#tools">Explore</a>
        <a href="#personalize">Personalize</a>
        <a href="#home" className="nav-button">
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;