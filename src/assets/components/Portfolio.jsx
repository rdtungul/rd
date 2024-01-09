import React from "react";
import "../css/portfolio.css";
import WebDesign from "./WebDesign";
import WebDevelopment from "./WebDevelopment";
import Featured from "./Featured";
import Cta from "./Cta";

// text switcher - for web contents
import TextTransition, { presets } from "react-text-transition";
import { textSwitcher } from "../js/data";

export default function Portfolio() {
  // Text Switcher configuration
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section id="portfolio" className="bg-white md:pt-0">
      <div className="container p-2 px-2 mx-auto md:pt-10 lg:pt-20 md:px-0">
        {/* Portfolio Title */}
        <div className="portfolio-heading-effect text-center leading-[50px] text-4xl md:text-6xl lg:text-8xl font-normal lg:leading-[110px]">
          <span className="tracking-normal">
            <span className="inline-flex -mb-20 md:-mb-10 lg:mb-auto">
              Web{" "}
              <TextTransition springConfig={presets.wobbly}>
                {textSwitcher[index % textSwitcher.length]}
              </TextTransition>
            </span>
            <br />
            <span className="font-bold">is the future.</span>
          </span>
        </div>

        {/* Web Development Content */}
        <WebDevelopment />

        {/* CTA */}
        <Cta />

        {/* Web Design Content */}
        <WebDesign />

        {/* Featured Section */}
        <Featured />
      </div>
    </section>
  );
}
