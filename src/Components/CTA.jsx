export function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-glow" />
      <h2 className="cta-title" data-reveal>
        Let's build something
        <br />
        <span className="serif">extraordinary.</span>
      </h2>
      <p className="cta-sub" data-reveal data-reveal-delay="0.1">
        I'm actively looking for new opportunities. Whether you have a project, a role, or just
        want to chat — my inbox is open.
      </p>
      <div className="cta-row" data-reveal data-reveal-delay="0.2">
        <a href="mailto:avulasairaghukiran@gmail.com" data-magnetic>
          <button className="btn btn-primary">✉️ Send a Message</button>
        </a>
        <a
          href="https://linkedin.com/in/avulasairaghukiran"
          target="_blank"
          rel="noreferrer"
          data-magnetic
        >
          <button className="btn btn-ghost">🔗 View LinkedIn</button>
        </a>
      </div>
    </section>
  );
}
