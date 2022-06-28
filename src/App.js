import "./styles.css";
import Parse from "./Parse";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="main-title">
          <h1>
            Table of <br />
            TABLE OF CONTENTS
          </h1>
          <h2 id="subtitle">A Page of Table of Content Structures </h2>
        </div>
        <Parse />
      </div>
    </div>
  );
}
