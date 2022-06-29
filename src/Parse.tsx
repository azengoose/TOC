import { dummy_toc_data } from "./data/dummy_toc";
import { new_toc_data } from "./data/new_toc_data";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

export default function Parse() {
  return (
    <>
      <div className="alltoc-container">
        <div className="grid-wrapper">
          {dummy_toc_data.map((element, index) => {
            return (
              <div className="toc-container" key={index}>
                <h3 className="element-title">{element.Title}</h3>
                <div className="toc">{parse(element.TOC)}</div>
              </div>
            );
          })}
        </div>
        <p>
          Entries Displayed: {dummy_toc_data.length} / Total of:{" "}
          {new_toc_data.length}
        </p>
        <Link className="link" to="/all">
          Show All Entries
        </Link>
      </div>
    </>
  );
}
