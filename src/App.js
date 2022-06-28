import "./styles.css";
import "./fonts/koliko/Webfont/koliko-Bold.css";
import Paths from "./router";
import Parse from "./Parse";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="main-title">
          <h1 style={{ marginBottom: -20, fontSize: 30 }}>Table of</h1>
          <h1>TABLE OF CONTENTS</h1>
          <h2 id="subtitle">A Page of Table of Content Structures </h2>
        </div>
        <Parse />
        <Paths />
      </div>
    </div>
  );
}
