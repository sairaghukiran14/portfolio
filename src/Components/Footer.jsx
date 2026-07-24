export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-logo">
          <span className="dot" />
          Sai Raghu Kiran
        </div>
        <p className="footer-tagline">
          Designed &amp; built from scratch in React with GSAP motion — no templates, no page
          builders. A showcase of scalable <strong>MERN</strong> architecture,{" "}
          <strong>SaaS</strong> platforms, and production apps shipped to real users.
        </p>
        <div className="footer-copy">
          © {new Date().getFullYear()} Avula Sai Raghu Kiran · All rights reserved.
        </div>
      </div>

      <div className="footer-links">
        <a href="mailto:avulasairaghukiran@gmail.com">Email</a>
        <a href="https://linkedin.com/in/avulasairaghukiran" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="tel:+918332020170">Phone</a>
      </div>
    </footer>
  );
}
