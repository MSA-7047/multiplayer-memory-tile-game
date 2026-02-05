import React from "react";

export default function PlayerChips({ players, activeIndex }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {players.map((p, i) => (
        <span
          key={p.id}
          className="badge"
          style={{
            borderColor: i === activeIndex ? "rgba(124,92,255,0.7)" : undefined,
            color: i === activeIndex ? "rgba(255,255,255,0.9)" : undefined
          }}
        >
          {p.name} • {p.score} pts
        </span>
      ))}
    </div>
  );
}
