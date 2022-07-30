import { dummy_toc_data } from "./data/dummy_toc";
import { new_toc_data } from "./data/new_toc_data";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

import Title from "./Title";

export default function Parse() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // function changingColour(index) {
  //   const Colour = { val1: 250, val2: 128, val3: 114 };
  //   // Starts Gradient with Salmon
  //   // Try this with useState
  //   const v1 = Colour.val1 + index * 0.5;
  //   const v2 = Colour.val2 + index * 0.5;
  //   const v3 = Colour.val3 + index * 0.5;
  //   return "{Colour.val1}, {Colour.val2}, {Colour.val3}";
  // }
  return (
    <>
      <Title />
      <div className="alltoc-container">
        <div className="grid-wrapper">
          {dummy_toc_data.map((element, index) => {
            return (
              <div className="toc-container" key={index}>
                <h3
                  // style={{ color: "rgb(" + { changingColour } + ")" }}
                  className="element-title"
                >
                  {element.Title}
                </h3>
                <div className="toc">{parse(element.TOC)}</div>
              </div>
            );
          })}
        </div>
        <p>
          Entries Displayed: {dummy_toc_data.length} from a total of{" "}
          {new_toc_data.length}
        </p>
        <Link onClick={scrollToTop} className="link" to="/all">
          Show All Entries
        </Link>
      </div>
    </>
  );
}
