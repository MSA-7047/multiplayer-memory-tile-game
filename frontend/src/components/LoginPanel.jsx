import React, { useState } from "react";

export default function LoginPanel({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="panel">
      <div className="panelHeader">
        <div>
          <h2>Optional login</h2>
          <p>Play as guest, or login to save history + stats.</p>
        </div>
      </div>

      <div className="formRow">
        <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="btnRow">
          <button className="btn primary" onClick={() => onLogin?.({ email })} type="button">Login</button>
          <button className="btn ghost" type="button" onClick={() => { setEmail(""); setPassword(""); }}>
            Continue as guest
          </button>
        </div>
      </div>
    </div>
  );
}
