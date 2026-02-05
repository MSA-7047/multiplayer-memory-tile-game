import React, { useMemo, useState } from "react";
import CardTile from "./CardTile.jsx";

/**
 * TEMPLATE BOARD (placeholder logic):
 * - Click flips a tile
 * - Each "move" shuffles a random PAIR of face-down cards (your special rule)
 * - Matching/scoring is intentionally minimal: you will replace it.
 */
export default function GameBoard({ difficulty = "Normal", onMove }) {
  const initialCards = useMemo(() => makeStarterDeck(difficulty), [difficulty]);
  const [cards, setCards] = useState(initialCards);

  function handleClick(idx) {
    setCards(prev => {
      const next = prev.map((c, i) => (i === idx ? { ...c, isFaceUp: !c.isFaceUp } : c));

      // Your special rule: after every move, shuffle a pair of cards
      const shuffled = shuffleRandomPair(next);

      // notify parent (for stats UI / move history placeholders)
      onMove?.({
        at: Date.now(),
        clickedIndex: idx,
        note: "Clicked a tile; then shuffled a random pair (placeholder)."
      });

      return shuffled;
    });
  }

  return (
    <div>
      <div className="panelHeader" style={{ marginBottom: 8 }}>
        <div>
          <h2>Board</h2>
          <p>Placeholder logic — you’ll replace matching/scoring.</p>
        </div>
      </div>

      <div className="gameBoard">
        {cards.map((card, idx) => (
          <CardTile key={card.id} card={card} onClick={() => handleClick(idx)} />
        ))}
      </div>
    </div>
  );
}

function makeStarterDeck(difficulty) {
  // placeholder deck: 8 pairs => 16 cards
  // you can tie this to difficulty later (grid size, symbols, etc.)
  const symbols =
    difficulty === "Hard"
      ? ["🍓","🍒","🍋","🍉","🥝","🍍","🥭","🍇"]
      : ["⭐","🌙","⚡","🔥","💎","🍀","🎯","🎵"];

  const deck = symbols.flatMap((s, i) => ([
    { id: `c${i}-a`, pairId: i, symbol: s, isFaceUp: false },
    { id: `c${i}-b`, pairId: i, symbol: s, isFaceUp: false }
  ]));

  return shuffle([...deck]);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleRandomPair(cards) {
  // find indices that are face-down (so the shuffle feels fair)
  const faceDown = cards
    .map((c, i) => ({ c, i }))
    .filter(x => !x.c.isFaceUp);

  if (faceDown.length < 2) return cards;

  const a = faceDown[Math.floor(Math.random() * faceDown.length)].i;
  let b = a;
  while (b === a) b = faceDown[Math.floor(Math.random() * faceDown.length)].i;

  const next = [...cards];
  [next[a], next[b]] = [next[b], next[a]];
  return next;
}
