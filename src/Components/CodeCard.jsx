export function CodeCard({ side }) {
  if (side === "left")
    return (
      <div className="hero-code-card left">
        <div className="code-chip">
          <span className="kw">const</span> <span className="fn">dev</span>{" "}
          <span className="op">= {`{`}</span>
          {"\n"}
          {"  "}
          <span className="str">name</span>
          <span className="op">:</span>{" "}
          <span className="str">"Sai Raghu Kiran"</span>,{"\n"}
          {"  "}
          <span className="str">role</span>
          <span className="op">:</span>{" "}
          <span className="str">"Frontend Dev"</span>,{"\n"}
          {"  "}
          <span className="str">xp</span>
          <span className="op">:</span> <span className="str">"2+ years"</span>,
          {"\n"}
          <span className="op">{`}`}</span>
        </div>
      </div>
    );
  return (
    <div className="hero-code-card right">
      <div className="code-chip">
        <span className="fn">optimize</span>
        <span className="op">(</span>
        <span className="str">app</span>
        <span className="op">)</span>
        {"\n"}
        <span className="op">// </span>
        <span className="str">+25% faster ⚡</span>
        {"\n"}
        <span className="fn">deploy</span>
        <span className="op">(</span>
        <span className="str">features</span>
        <span className="op">)</span>
        {"\n"}
        <span className="op">// </span>
        <span className="str">+30% efficiency 🚀</span>
      </div>
    </div>
  );
}
