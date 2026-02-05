import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MoveTimeline from "../components/MoveTimeline.jsx";
import StatCard from "../components/StatCard.jsx";
import { api } from "../api/client.js";

export default function MatchPage() {
  const { matchId } = useParams();
  const [match, setMatch] = useState(null);
  const [activeMove, setActiveMove] = useState(0);

  useEffect(() => {
    (async () => {
      const m = await api.get(`/api/matches/${matchId}`);
      setMatch(m);
      setActiveMove(0);
    })();
  }, [matchId]);

  const current = useMemo(() => match?.moves?.[activeMove], [match, activeMove]);

  if (!match) return <div className="panel" style={{ marginTop: 18 }}>Loading match…</div>;

  return (
    <div className="grid">
      <section className="panel">
        <div className="panelHeader">
          <div>
            <h2>{match.title}</h2>
            <p>Move-by-move playback template.</p>
          </div>
          <div className="btnRow">
            <Link className="btn" to="/profile">Back</Link>
          </div>
        </div>

        <div className="miniGrid">
          <StatCard label="Difficulty" value={match.difficulty} />
          <StatCard label="Players" value={match.players} />
          <StatCard label="Moves" value={match.moves.length} />
          <StatCard label="Duration" value={match.durationSec ? `${match.durationSec}s` : "—"} />
        </div>

        <div style={{ marginTop: 14 }} className="panel">
          <div className="panelHeader">
            <div>
              <h2>Playback panel</h2>
              <p>Replace this with a real board re-render per move.</p>
            </div>
          </div>

          {current ? (
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, lineHeight: 1.7 }}>
              <div><b>Move:</b> {activeMove + 1} / {match.moves.length}</div>
              <div><b>Player:</b> {current.playerIndex + 1}</div>
              <div><b>Clicked index:</b> {current.clickedIndex}</div>
              <div><b>Note:</b> {current.note}</div>

              <div className="btnRow" style={{ marginTop: 12 }}>
                <button
                  className="btn"
                  type="button"
                  disabled={activeMove === 0}
                  onClick={() => setActiveMove(m => Math.max(0, m - 1))}
                >
                  ◀ Prev
                </button>
                <button
                  className="btn primary"
                  type="button"
                  disabled={activeMove >= match.moves.length - 1}
                  onClick={() => setActiveMove(m => Math.min(match.moves.length - 1, m + 1))}
                >
                  Next ▶
                </button>
              </div>
            </div>
          ) : (
            <div>No moves found.</div>
          )}
        </div>
      </section>

      <aside className="panel">
        <div className="panelHeader">
          <div>
            <h2>Moves</h2>
            <p>Jump to any move.</p>
          </div>
        </div>
        <MoveTimeline
          moves={match.moves}
          activeIndex={activeMove}
          onSelect={setActiveMove}
        />
      </aside>
    </div>
  );
}
