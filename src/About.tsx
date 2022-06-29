import { Link } from "react-router-dom";
import Title from "./Title";

export default function About() {
  return (
    <>
      <div className="">
        <Title />
        <div className="about-container">
          <h2>About Page</h2>
          <p>
            The Table of Contents (TOC) Data on this site has been sourced from
            the Very Short Introductions series.
          </p>
          <p>
            The TOCs has been cleaned in a rough manner in that many of the TOCs
            included Prefaces, Introductions, References, Acknowledgements,
            Conclusions, Further Readings, all of which were removed. Thus,
            there may be remaining artifacts such as "1: 2: ..." indicating that
            a chapter one for one of the titles included for example, an
            Introduction.
          </p>
          <p>
            What is most interesting about getting TOC data is that it reveals a
            lot of the way we structure information. It is evident, that even
            with this simple hierarchy that there is something at play.
          </p>
          <p>
            <Link className="link" to="/">
              &gt; To Some Table of Contents (64 Entries)
            </Link>
          </p>
          <p>
            <Link className="link" to="/all">
              &gt;&gt; To All Table of Contents (707 Entries)
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
