export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-content">
        <div className="hero-tag">Available for opportunities</div>
        <h1 className="hero-name">
          SANJAY<br /><span>FATHEPUR</span>
        </h1>
        <p className="hero-title">Full Stack Developer</p>
        <p className="hero-desc">
          Building modern, scalable web and mobile applications with React.js, Next.js,
          React Native, Node.js, and Python. From pixel-perfect UIs to robust backend
          systems deployed on AWS.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
        <div className="hero-contact">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">sanjay072323@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <span className="contact-value">+91 8686012577</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Location</span>
            <span className="contact-value">Hyderabad, Telangana</span>
          </div>
        </div>
      </div>
    </section>
  )
}
