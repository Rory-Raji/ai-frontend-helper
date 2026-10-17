function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">YOUR SMARTER CODING COMPANION</span>

        <h1>
          Build better websites.
          <br />
          <span>Learn with AI.</span>
        </h1>

        <p>
          Get frontend ideas, understand coding concepts, and
          take the next step in your development journey.
        </p>

        <a href="#personalize" className="primary-button">
          Get Started →
        </a>

        <div className="hero-note">
          <span className="status-dot"></span>
          Designed for curious developers
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="code-window">
          <div className="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p className="code-muted">// Your next idea starts here</p>
          <p><span className="code-purple">const</span> developer = {"{"}</p>
          <p className="code-indent">
            skills: <span className="code-green">"growing"</span>,
          </p>
          <p className="code-indent">
            ideas: <span className="code-green">"limitless"</span>,
          </p>
          <p className="code-indent">
            learning: <span className="code-purple">true</span>
          </p>
          <p>{"}"}</p>
          <div className="code-success">✓ Ready to build</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;