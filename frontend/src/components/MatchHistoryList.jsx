import React from "react";
import { Link } from "react-router-dom";

export default function MatchHistoryList({ matches }) {
  return (
    <div className="list">
      {matches.map(m => (
        <div className="listItem" key={m.id}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{m.title}</div>
            <div className="meta">
              {new Date(m.startedAt).toLocaleString()} • {m.players} player(s) • {m.difficulty}
            </div>
          </div>
          <Link className="pill" to={`/match/${m.id}`}>Open</Link>
        </div>
      ))}
    </div>
  );
}
