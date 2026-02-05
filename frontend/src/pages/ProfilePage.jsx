import React, { useEffect, useState } from "react";
import StatCard from "../components/StatCard.jsx";
import MatchHistoryList from "../components/MatchHistoryList.jsx";
import { api } from "../api/client.js";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    (async () => {
      // placeholders; will work with the provided backend template
      const me = await api.get("/api/users/me");
      const ms = await api.get("/api/matches");
      setProfile(me);
      setMatches(ms);
    })();
  }, []);

  if (!profile) {
    return <div className="panel" style={{ marginTop: 18 }}>Loading profile…</div>;
  }

  return (
    <div className="grid">
      <section className="panel">
        <div className="panelHeader">
          <div>
            <h2>Profile</h2>
            <p>User details + stats placeholders.</p>
          </div>
        </div>

        <div className="miniGrid">
          <StatCard label="Username" value={profile.username} />
          <StatCard label="Email" value={profile.email} />
          <StatCard label="Best Time" value={profile.bestTime ?? "—"} hint="hook to your data" />
          <StatCard label="Best Accuracy" value={profile.bestAccuracy ?? "—"} hint="hook to your data" />
        </div>

        <div style={{ marginTop: 14 }} className="panel">
          <div className="panelHeader">
            <div>
              <h2>Progress & graphs</h2>
              <p>Placeholder section for “speed over days” charts.</p>
            </div>
          </div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>
            Add your chart here later (e.g., Recharts/Chart.js). You’ll likely graph:
            <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
              <li>Average speed per day</li>
              <li>Accuracy trend</li>
              <li>Best time trend</li>
            </ul>
          </div>
        </div>
      </section>

      <aside className="panel">
        <div className="panelHeader">
          <div>
            <h2>Match history</h2>
            <p>Click a match to view moves.</p>
          </div>
        </div>
        <MatchHistoryList matches={matches} />
      </aside>
    </div>
  );
}
