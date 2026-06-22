export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span className="dot" />
        Sai Raghu Kiran
      </div>
      <div>© {new Date().getFullYear()} Avula Sai Raghu Kiran · All rights reserved.</div>
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
