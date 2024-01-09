import heroEmoji1 from "../img/general/hero-emoji1.png";
import heroEmoji2 from "../img/general/hero-emoji2.png";
import heroImg from "../img/general/hero.jpg";
import heroImg2 from "../img/general/hero-mobile.jpg";
import "../css/hero.css";
import confetti from "canvas-confetti";
import { yearOfService } from "../js/data";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container px-2 pt-24 mx-auto md:pt-32 md:px-0">
        {/* HERO TITLE */}
        <h1 className="inline-block leading-[50px] text-5xl lg:text-7xl xl:pr-72 font-light lg:leading-[85px]">
          <span className="inline-block">
            <img
              className="w-12 h-12 lg:w-auto lg:h-auto"
              src={heroEmoji1}
              alt=""
            />
          </span>
          A Full-stack Web Developer, Solopreneur & Instructor. &nbsp;
          <span className="inline-block">
            {/* <span className="relative flex items-center mx-auto lg:tooltip group"> */}
            <button
              onClick={() =>
                confetti({
                  particleCount: 200,
                  spread: 180,
                  origin: { y: 0.5 },
                })
              }
              className="btn"
            >
              <img
                className="w-12 h-12 lg:w-auto lg:h-auto"
                src={heroEmoji2}
                alt=""
              />
            </button>
            {/* <span className="invisible ml-5 text-sm text-gray-500 delay-150 group-hover:visible">
                Click me
              </span> */}
          </span>
          {/* </span> */}
        </h1>

        {/* HERO IMAGE */}
        <div className="hero-images">
          <img
            className="hidden w-full my-12 rounded-2xl md:block image-hover-effects"
            src={heroImg}
            alt=""
          />
          <img
            className="w-full my-10 rounded-3xl md:hidden image-hover-effects"
            src={heroImg2}
            alt=""
          />
        </div>

        {/* HERO SUBTITLE */}
        <div className="pt-5 text-center md:py-0 md:text-left hero-text-content">
          {/* Box Container 1 */}
          <div className="grid grid-cols-1 gap-1 mb-20 text-black md:grid-cols-4 md:grid-rows-1">
            {/* <!-- Box 1 --> */}
            <div className="relative mb-5 md:mb-0 rounded-xl lg:mt-10 md:col-span-1 lg:pr-32 lg:text-left">
              <p className="text-5xl font-bold md:mb-3 md:text-6xl xl:text-7xl">
                500+
              </p>
              <p className="text-lg leading-9 opacity-60 md:text-2xl">
                Students Taught Web Development & Programming
              </p>
            </div>
            {/* <!-- Box 2 --> */}
            <div className="relative mb-5 md:mb-0 rounded-xl lg:mt-10 md:col-span-1 lg:pr-32 lg:text-left">
              <p className="text-5xl font-bold md:mb-3 md:text-6xl xl:text-7xl">
                {yearOfService}+
              </p>
              <p className="text-lg leading-9 opacity-60 md:text-2xl">
                Years in Web Development & Design (UI/UX)
              </p>
            </div>

            {/* <!-- Box 3 --> */}
            <div className="rounded-xl md:col-span-2 lg:text-left">
              <p className="text-lg leading-9 md:text-2xl opacity-60">
                Small to medium-sized businesses and startups looking for
                professional and creative web solutions.
              </p>
              <div className="flex flex-col pt-10 space-y-5 text-center md:justify-start md:space-y-0 md:space-x-5 hero-button-container md:flex-row">
                <a
                  href="#cta"
                  className="px-8 py-2 text-base tracking-widest text-white duration-200 bg-black border-2 border-black rounded-lg shadow-md lg:px-8 lg:py-4 lg:text-lg hover:text-black hover:bg-transparent "
                >
                  Get in touch →
                </a>

                <a
                  href="#about"
                  className="px-8 py-2 text-base tracking-widest text-black duration-200 bg-transparent border-2 border-black rounded-lg shadow-md lg:px-8 lg:py-4 lg:text-lg hover:text-white hover:bg-black"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
