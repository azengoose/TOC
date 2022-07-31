import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

export default function About() {
  return (
    <>
      <div className="">
        <Title />
        <p style={{ textAlign: "center" }}>
          <Link className="link" to="/">
            64 Table of Contents
          </Link>
          {""} |{" "}
          <Link className="link" to="/all">
            All 707 Table of Contents
          </Link>
        </p>
        <div className="about-container">
          <h2 id="about-title">About this Project</h2>
          <p>
            The Table of Contents (TOC) Data on this site has been sourced from
            the Very Short Introductions series (sometimes abbreviated as VSI)
            on this{" "}
            <a
              className="link"
              href="https://global.oup.com/academic/content/series/v/very-short-introductions-vsi/?cc=au&lang=en&"
            >
              site
            </a>
            .
          </p>
          <p>
            The Front Matter (Prefaces, Introductions, Lists of X) and End
            Matter (References, Acknowledgements, Conclusions, Further
            Readings), have been uncleanly removed due to the nature of the data
            sourced. Thus, there may be remaining artifacts, for example: "1: 2:
            ..." indicates that chapter 1 was likely part of the Front Matter.
          </p>
          <p>
            Hopefully this can be updated later with data sourced from the
            offical Very Short Introductions site with proper and consistent
            formatting.
          </p>
          <p>
            Laying out all this TOC data reveals a lot about the way we
            structure information. It is evident, that even with the simple
            single-layer hierarchies used by all of these entries, the choice of
            how we decide to break down a particular subject is not an obvious
            decision.
          </p>
          <div className="alltoc-container" style={{ marginTop: -10 }}>
            <div className="toc-container" style={{ marginRight: 30 }}>
              <h3 className="element-title">Genes</h3>
              <div className="toc">
                <p>
                  1: Genes before 1944
                  <br /> 2: Genes as DNA
                  <br /> 3: Mutations and gene variants
                  <br /> 4: Genes as markers
                  <br /> 5: Genes of small effect
                  <br /> 6: Genes in evolution
                  <br /> Conclusion: the varied concepts of the gene
                  <br />
                </p>
              </div>
            </div>
            <div className="toc-container">
              <h3 className="element-title">The Earth</h3>
              <div className="toc">
                <p>
                  1: Dynamic Planet
                  <br /> 2: Deep Time
                  <br /> 3: Deep Earth
                  <br /> 4: Under the Sea
                  <br /> 5: Drifting Continents
                  <br /> 6: Volcanoes
                  <br /> 7: When the Ground Shakes
                  <br />{" "}
                </p>
              </div>
            </div>
          </div>
          <p style={{ marginTop: -20 }}>
            Consider these two Table of Contents examples. They are both related
            more or less as Natural Sciences. The structure of the Genes
            example, elaborates rather completely on the concept (each category
            includes the word 'gene'), detailing its history, classifications,
            variants, effects and relation to evolution - and which is summed up
            in the conclusion.
          </p>
          <p>
            On the other hand, the Earth example serves mostly as a categorical
            marker that encompasses many smaller aspects that is able to be
            included under the umbrella concept of 'Earth', such as presumably,
            macro characteristics, geologic time, the interior, tectonic plates
            and their effects and earthquakes.
          </p>
          <p>
            The point is to illustrate explicitly, the differences that are
            created by structuring concepts in certain ways. From this, we can
            learn about the various ways that information is structured and be
            more aware and diligent with composing our own structures or models
            of understanding.
          </p>
          {/* <p>Angus</p> */}
        </div>
      </div>
    </>
  );
}
