import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="container">
      <header className="topbar">
        <Link to="/" className="brand">
          <div className="logo" />
          <div>
            <h1>Memory Tiles</h1>
            <p>Shuffles a pair every move • up to 4 players • optional login</p>
          </div>
        </Link>

        <nav className="nav">
          <NavLink className="pill" to="/">Game</NavLink>
          <NavLink className="pill" to="/profile">Profile</NavLink>
          <NavLink className="pill" to="/signup">Sign up</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
