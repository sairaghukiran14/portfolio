export function Background() {
  return (
    <>
      <div className="bg-layer" aria-hidden="true">
        <div className="aurora a1" />
        <div className="aurora a2" />
        <div className="aurora a3" />
      </div>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-grain" aria-hidden="true" />
    </>
  );
}
