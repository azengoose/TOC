import { dummy_toc_data } from "./data/dummy_toc";
import { new_toc_data } from "./data/new_toc_data";
import parse from "html-react-parser";

export default function Parse() {
  return (
    <>
      <div className="alltoc-container">
        {dummy_toc_data.map((element, index) => {
          return (
            <div className="toc-container" key={index}>
              <h3 className="element-title">{element.Title}</h3>
              {parse(element.TOC)}
            </div>
          );
        })}
      </div>
    </>
  );
}
