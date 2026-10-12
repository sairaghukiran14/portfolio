export function Ticker() {
  const base = [
    ["🤖", "LLMs & RAG"],
    ["▲", "Next.js 16"],
    ["⚛️", "React 19"],
    ["🐍", "Python"],
    ["⚡", "FastAPI"],
    ["🔷", "TypeScript"],
    ["🔀", "React Flow"],
    ["🔍", "Langfuse"],
    ["🗄️", "PostgreSQL"],
    ["💎", "Prisma ORM"],
    ["📦", "Redux & Zustand"],
    ["🟢", "Node.js"],
    ["☁️", "AWS & R2"],
    ["🐳", "Docker"],
    ["💨", "TailwindCSS"],
  ];
  const items = [...base, ...base];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {items.map(([ic, lb], i) => (
          <div key={i} className="ticker-item">
            <span>{ic}</span>
            {lb}
          </div>
        ))}
      </div>
    </div>
  );
}
