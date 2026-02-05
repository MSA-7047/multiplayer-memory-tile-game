import React from "react";

export default function StatCard({ label, value, hint }) {
  return (
    <div className="statCard">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
      {hint ? <div className="label" style={{ marginTop: 6 }}>{hint}</div> : null}
    </div>
  );
}
