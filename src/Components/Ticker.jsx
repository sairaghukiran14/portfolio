export function Ticker() {
  const items = [
    ["⚛️", "React.js"],
    ["▲", "Next.js"],
    ["🔷", "TypeScript"],
    ["📦", "Redux"],
    ["🟢", "Node.js"],
    ["🔌", "Socket.IO"],
    ["☁️", "AWS"],
    ["🎨", "Figma"],
    ["🗄️", "MongoDB"],
    ["🧪", "Jest"],
    ["📡", "GraphQL"],
    ["💨", "Tailwind"],
    ["⚛️", "React.js"],
    ["▲", "Next.js"],
    ["🔷", "TypeScript"],
    ["📦", "Redux"],
    ["🟢", "Node.js"],
    ["🔌", "Socket.IO"],
    ["☁️", "AWS"],
    ["🎨", "Figma"],
    ["🗄️", "MongoDB"],
    ["🧪", "Jest"],
    ["📡", "GraphQL"],
    ["💨", "Tailwind"],
  ];
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
