import React from "react";

export default function MoveTimeline({ moves, activeIndex, onSelect }) {
  return (
    <div className="list">
      {moves.map((mv, i) => (
        <button
          key={mv.id}
          className="listItem"
          type="button"
          onClick={() => onSelect(i)}
          style={{
            textAlign: "left",
            cursor: "pointer",
            borderColor: i === activeIndex ? "rgba(46,229,157,0.6)" : undefined
          }}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>
              Move {i + 1} • Player {mv.playerIndex + 1}
            </div>
            <div className="meta">
              Clicked index {mv.clickedIndex} • {mv.note}
            </div>
          </div>
          <span className="badge">{new Date(mv.at).toLocaleTimeString()}</span>
        </button>
      ))}
    </div>
  );
}
