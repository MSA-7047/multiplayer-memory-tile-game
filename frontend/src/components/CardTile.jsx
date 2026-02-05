import React from "react";

export default function CardTile({ card, onClick }) {
  const faceClass = card.isFaceUp ? "faceUp" : "faceDown";

  return (
    <button className={`tile ${faceClass}`} onClick={onClick} type="button">
      <div className="tileInner">
        {card.isFaceUp ? (
          <div style={{ fontSize: 22 }}>{card.symbol}</div>
        ) : (
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>MEM</div>
        )}
      </div>
    </button>
  );
}
