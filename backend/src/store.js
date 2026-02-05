// In-memory placeholder store (replace with DB later)
export const store = {
    users: [
      {
        id: "u1",
        username: "guest",
        email: "guest@example.com",
        bestTime: null,
        bestAccuracy: null
      }
    ],
    matches: [
      {
        id: "m1",
        title: "Match #1 (demo)",
        startedAt: Date.now() - 1000 * 60 * 10,
        difficulty: "Normal",
        players: 1,
        durationSec: 142,
        moves: Array.from({ length: 12 }).map((_, i) => ({
          id: `mv-${i + 1}`,
          at: Date.now() - 1000 * (120 - i * 6),
          playerIndex: 0,
          clickedIndex: Math.floor(Math.random() * 16),
          note: "Placeholder move record."
        }))
      },
      {
        id: "m2",
        title: "Match #2 (demo)",
        startedAt: Date.now() - 1000 * 60 * 60 * 5,
        difficulty: "Hard",
        players: 2,
        durationSec: 220,
        moves: Array.from({ length: 18 }).map((_, i) => ({
          id: `mv2-${i + 1}`,
          at: Date.now() - 1000 * (200 - i * 7),
          playerIndex: i % 2,
          clickedIndex: Math.floor(Math.random() * 20),
          note: "Placeholder move record."
        }))
      }
    ]
  };
  