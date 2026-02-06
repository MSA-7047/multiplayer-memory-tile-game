import React, { useState } from "react";

export default function GamePage() {
  const [difficulty, setDifficulty] = useState("Normal");

  return (
    <div className="grid">
      {/* Left Sidebar */}
      <aside className="leftSidebar">
        {/* Players Panel */}
        <div className="panel">
          <div className="panelHeader">
            <h2>Players</h2>
          </div>
          
          <div className="playerChips">
            <div className="playerChip active">Player 1</div>
            <div className="playerChip">Player 2</div>
            <div className="playerChip">Player 3</div>
          </div>
          
          <button className="btn addPlayerButton">+ Add Player</button>
        </div>

        {/* Chat Panel */}
        <div className="panel">
          <div className="panelHeader">
            <h2>Chat</h2>
            <p>Talk with other players</p>
          </div>
          
          <div className="chatMessages">
            <div className="chatMessage">
              <div className="author">Player 1</div>
              <div>Good luck!</div>
            </div>
            <div className="chatMessage">
              <div className="author">Player 2</div>
              <div>You too!</div>
            </div>
          </div>
          
          <input className="input" placeholder="Type a message..." />
        </div>
      </aside>

      {/* Center Game Area */}
      <section className="gamePanel">
        <div className="panelHeader">
          <h2>Memory Game</h2>
          <div>
            <select
              className="input"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option>Easy</option>
              <option>Normal</option>
              <option>Hard</option>
            </select>
          </div>
        </div>

        <div className="gameBoardWrapper">
          <div className="gameBoard">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="tile faceDown">
                ?
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right Sidebar */}
      <aside className="rightSidebar">
        {/* Login Panel */}
        <div className="panel">
          <div className="panelHeader">
            <h2>Account</h2>
            <p>Login to save progress</p>
          </div>
          
          <div className="formRow">
            <input className="input" placeholder="Email" type="email" />
            <input className="input" placeholder="Password" type="password" />
          </div>
          
          <div className="btnRow">
            <button className="btn primary">Login</button>
            <button className="btn">Sign Up</button>
          </div>
        </div>

        {/* Stats Panel */}
        <div className="panel">
          <div className="panelHeader">
            <h2>Game Stats</h2>
            <p>Current session</p>
          </div>
          
          <div className="statsGrid">
            <div className="statCard">
              <div className="label">Time</div>
              <div className="value">0:00</div>
            </div>
            <div className="statCard">
              <div className="label">Moves</div>
              <div className="value">0</div>
            </div>
            <div className="statCard">
              <div className="label">Pairs Matched</div>
              <div className="value">0</div>
            </div>
            <div className="statCard">
              <div className="label">Accuracy</div>
              <div className="value">—</div>
            </div>
            <div className="statCard">
              <div className="label">Best Streak</div>
              <div className="value">0</div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

// import React, { useMemo, useState } from "react";
// import LoginPanel from "../components/LoginPanel.jsx";
// import GameBoard from "../components/GameBoard.jsx";
// import PlayerChips from "../components/PlayerChips.jsx";
// import StatCard from "../components/StatCard.jsx";

// export default function GamePage() {
//   const [difficulty, setDifficulty] = useState("Normal");
//   const [moves, setMoves] = useState(0);
//   const [startedAt] = useState(() => Date.now());
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [players, setPlayers] = useState([
//     { id: "p1", name: "Player 1", score: 0 }
//   ]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const elapsedSec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
//   const accuracy = useMemo(() => "—", []); // placeholder
//   const speed = useMemo(() => (moves ? `${(moves / Math.max(1, elapsedSec)).toFixed(2)} moves/s` : "—"), [moves, elapsedSec]);

//   function addPlayer() {
//     if (players.length >= 4) return;
//     setPlayers(prev => [...prev, { id: `p${prev.length + 1}`, name: `Player ${prev.length + 1}`, score: 0 }]);
//   }

//   function handleMove(moveInfo) {
//     // placeholder: bump moves, rotate player turn
//     setMoves(m => m + 1);
//     setActiveIndex(i => (players.length > 1 ? (i + 1) % players.length : 0));

//     // later: push into match record / send to backend
//     // console.log(moveInfo);
//   }

//   return (
//     <div className="grid">
//       <section className="panel">
//         <div className="panelHeader">
//           <div>
//             <h2>Main game</h2>
//             <p>UI + stat placeholders. Swap in your real matching logic anytime.</p>
//           </div>

//           <div className="btnRow">
//             <button className="btn" type="button" onClick={addPlayer}>
//               + Add player (up to 4)
//             </button>

//             <select
//               className="input"
//               style={{ width: 160 }}
//               value={difficulty}
//               onChange={(e) => setDifficulty(e.target.value)}
//             >
//               <option>Easy</option>
//               <option>Normal</option>
//               <option>Hard</option>
//             </select>
//           </div>
//         </div>

//         <PlayerChips players={players} activeIndex={activeIndex} />

//         <div style={{ marginTop: 12 }} className="miniGrid">
//           <StatCard label="Time" value={`${elapsedSec}s`} hint="placeholder timer" />
//           <StatCard label="Moves" value={moves} hint="increments per click" />
//           <StatCard label="Accuracy" value={accuracy} hint="add match/miss logic" />
//           <StatCard label="Speed" value={speed} hint="moves per second" />
//         </div>

//         <div style={{ marginTop: 14 }}>
//           <GameBoard difficulty={difficulty} onMove={handleMove} />
//         </div>
//       </section>

//       <aside style={{ display: "grid", gap: 16 }}>
//         {!isLoggedIn ? (
//           <LoginPanel onLogin={() => setIsLoggedIn(true)} />
//         ) : (
//           <div className="panel">
//             <div className="panelHeader">
//               <div>
//                 <h2>Logged in</h2>
//                 <p>Placeholder: show “save match / sync stats” controls here.</p>
//               </div>
//             </div>
//             <div className="btnRow">
//               <button className="btn primary" type="button">Save match (placeholder)</button>
//               <button className="btn" type="button" onClick={() => setIsLoggedIn(false)}>Logout</button>
//             </div>
//           </div>
//         )}

//         <div className="panel">
//           <div className="panelHeader">
//             <div>
//               <h2>Game notes</h2>
//               <p>What you’ll implement later.</p>
//             </div>
//           </div>

//           <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.6 }}>
//             <ul style={{ margin: 0, paddingLeft: 18 }}>
//               <li>Real match logic (flip 2, compare, lock matched)</li>
//               <li>“Shuffle a pair every move” is stubbed in</li>
//               <li>Accuracy = matches / attempts</li>
//               <li>Score = your formula per difficulty + speed</li>
//               <li>Persist move history to backend</li>
//             </ul>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// }
