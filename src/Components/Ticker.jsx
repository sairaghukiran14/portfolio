export function Ticker() {
  const base = [
    ["▲", "Next.js"],
    ["⚛️", "React.js"],
    ["🔷", "TypeScript"],
    ["📦", "Redux Toolkit"],
    ["🔄", "TanStack Query"],
    ["🟢", "Node.js"],
    ["☁️", "AWS"],
    ["🎨", "Figma"],
    ["🗄️", "PostgreSQL"],
    ["🧪", "Jest"],
    ["📡", "GraphQL"],
    ["💨", "Tailwind"],
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
