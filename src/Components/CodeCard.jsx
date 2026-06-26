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
          <span className="str">"Full Stack Dev"</span>,{"\n"}
          {"  "}
          <span className="str">stack</span>
          <span className="op">:</span> <span className="str">"React · Node · PG"</span>,
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
        <span className="fn">ship</span>
        <span className="op">(</span>
        <span className="str">fullStack</span>
        <span className="op">)</span>
        {"\n"}
        <span className="op">// </span>
        <span className="str">front → back 🚀</span>
      </div>
    </div>
  );
}
