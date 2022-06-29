import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="wrapper">
        <div className="about-container" style={{ margin: "auto" }}>
          <Link className="link" to="/">
            Back to Table of Contents
          </Link>
          <h2>About Page</h2>
          <p>Data has been sourced from the Very Short Introductions series.</p>
          <p>
            The TOC has been cleaned in a rough manner in that many of the TOCs
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
        </div>
      </div>
    </>
  );
}
