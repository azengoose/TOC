import "./styles.css";
import "./fonts/koliko/Webfont/koliko-Bold.css";
import Parse from "./Parse";
import Title from "./Title";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Title />
        <Parse />
      </div>
    </div>
  );
}
