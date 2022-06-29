import { Link } from "react-router-dom";

export default function Title() {
  return (
    <>
      <div className="main-title">
        <h1 style={{ marginBottom: -20, fontSize: 30 }}>Table of</h1>
        <h1>TABLE OF CONTENTS</h1>
        <h2 id="subtitle">A Page of Table of Content Structures </h2>
      </div>
      <nav className="links">
        <Link className="link" to="/a">
          About
        </Link>
      </nav>
    </>
  );
}
