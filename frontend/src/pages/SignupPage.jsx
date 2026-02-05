import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  function update(k, v) {
    setForm(prev => ({ ...prev, [k]: v }));
  }

  function submit(e) {
    e.preventDefault();
    // TODO: call backend /api/auth/signup
    alert("Signup placeholder — wire to backend later.");
  }

  return (
    <div className="panel" style={{ marginTop: 18, maxWidth: 560 }}>
      <div className="panelHeader">
        <div>
          <h2>Create account</h2>
          <p>Optional — enables match history, stats tracking and graphs.</p>
        </div>
      </div>

      <form onSubmit={submit} className="formRow">
        <input className="input" placeholder="Username" value={form.username} onChange={(e) => update("username", e.target.value)} />
        <input className="input" placeholder="Email" value={form.email} onChange={(e) => update("email", e.target.value)} />
        <input className="input" placeholder="Password" type="password" value={form.password} onChange={(e) => update("password", e.target.value)} />

        <div className="btnRow">
          <button className="btn primary" type="submit">Sign up</button>
          <Link className="btn" to="/">Back to game</Link>
        </div>
      </form>
    </div>
  );
}
