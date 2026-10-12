export function CodeCard({ side }) {
  if (side === "left")
    return (
      <div className="hero-code-card left">
        <div className="code-chip">
          <span className="kw">const</span> <span className="fn">engineer</span>{" "}
          <span className="op">= {`{`}</span>
          {"\n"}
          {"  "}
          <span className="str">name</span>
          <span className="op">:</span>{" "}
          <span className="str">"Sai Raghu Kiran"</span>,{"\n"}
          {"  "}
          <span className="str">role</span>
          <span className="op">:</span>{" "}
          <span className="str">"AI & Full Stack"</span>,{"\n"}
          {"  "}
          <span className="str">focus</span>
          <span className="op">:</span> <span className="str">"LLMs · RAG · React"</span>,
          {"\n"}
          <span className="op">{`}`}</span>
        </div>
      </div>
    );
  return (
    <div className="hero-code-card right">
      <div className="code-chip">
        <span className="fn">evalRAG</span>
        <span className="op">(</span>
        <span className="str">pipeline</span>
        <span className="op">)</span>
        {"\n"}
        <span className="op">// </span>
        <span className="str">guardrails active 🛡️</span>
        {"\n"}
        <span className="fn">orchestrate</span>
        <span className="op">(</span>
        <span className="str">dag</span>
        <span className="op">)</span>
        {"\n"}
        <span className="op">// </span>
        <span className="str">end-to-end traced ⚡</span>
      </div>
    </div>
  );
}
