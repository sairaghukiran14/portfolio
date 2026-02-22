export function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-glow" />
      <div className="reveal">
        <h2 className="cta-title">
          Let's build something<br/><em>extraordinary.</em>
        </h2>
        <p className="cta-sub">
          I'm actively looking for new opportunities. Whether you have a project, a role, or just want to chat — my inbox is open.
        </p>
        <div className="cta-row">
          <a href="mailto:avulasairaghukiran@gmail.com">
            <button className="btn-primary" style={{ fontSize: 17 }}>✉️ &nbsp;Send a Message</button>
          </a>
          <a href="https://linkedin.com/in/avulasairaghukiran" target="_blank" rel="noreferrer">
            <button className="btn-ghost" style={{ fontSize: 17 }}>🔗 &nbsp;View LinkedIn</button>
          </a>
        </div>
      </div>
    </section>
  );
}