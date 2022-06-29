import { new_toc_data } from "./data/new_toc_data";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

import Title from "./Title";
import "./styles.css";

export default function ParseAll() {
  return (
    <>
      <Title />
      <Link className="link" to="/">
        Show Only Some Entries
      </Link>
      <div className="alltoc-container">
        <div className="grid-wrapper">
          {new_toc_data.map((element, index) => {
            return (
              <div className="toc-container" key={index}>
                <h3 className="element-title">{element.Title}</h3>
                <div className="toc">{parse(element.TOC)}</div>
              </div>
            );
          })}
        </div>
        <p>Total Entries Displayed:{new_toc_data.length}</p>
        <p>
          <Link className="link" to="/">
            Show Only Some Entries
          </Link>{" "}
          |{" "}
          <Link className="link" to="/a">
            About
          </Link>
          <Link className="link" to="/all">
            Top of Page
          </Link>
        </p>
      </div>
    </>
  );
}
