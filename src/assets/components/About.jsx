import "../css/about.css";
// about image
import aboutImg from "../img/about/about-img.jpg";
import { yearOfService } from "../js/data";
// footer icons
import Social from "./Social";

export default function About() {
  return (
    <section id="about" className="bg-no-repeat bg-main">
      <div className="container px-2 py-20 mx-auto md:px-0">
        <div className="portfolio-heading-effect text-center leading-[50px] text-4xl md:text-6xl lg:text-8xl font-normal lg:leading-[110px] item">
          <span className="tracking-normal">
            About the
            <span className="font-bold"> founder</span>
          </span>
        </div>

        {/* About Content with Images */}
        <div className="grid grid-cols-1 gap-1 mt-20 text-center text-black lg:flex lg:flex-row-reverse md:grid md:items-center lg:grid-cols-2 lg:grid-rows-1 justify-items-center">
          {/* about image/ founder photo */}
          <img
            src={aboutImg}
            alt=""
            className="mb-10 image-hover-effects rounded-3xl"
          />
          <div className="relative mb-5 md:mb-0 rounded-xl lg:text-left">
            {/* about title */}
            <p className="mb-2 text-3xl font-semibold md:mb-5 md:mt-0 lg:text-4xl portfolio-title">
              Roseph Darl Tungul, ITS
            </p>
            {/* about text content */}
            <p className="mb-10 text-lg leading-7 text-black opacity-60 md:text-xl xl:pr-56">
              A Full-Stack Web Developer, Web Designer, Instructor, and
              Solopreneur from the Philippines with over {yearOfService} years
              of passion and skill. I'm always eager to learn new things and
              explore new opportunities in business and tech industry. <br />{" "}
              <br /> I have experience in building web applications that meet
              different user needs using{" "}
              <a
                href="#web-development"
                className="font-medium underline underline-offset-8 decoration-slate-500 hover:decoration-red-400"
              >
                React JS, Tailwind CSS, WordPress, Shopify,
              </a>{" "}
              and more.
              <br />
              My creativity and design skills allow me to lead various UI/UX
              design projects. I used{" "}
              <a
                href="#web-design"
                className="font-medium underline underline-offset-8 decoration-slate-500 hover:decoration-red-400"
              >
                Figma, Adobe Photoshop, Sketch,
              </a>{" "}
              and others to create wireframes, mockups, and prototypes to make
              concepts come alive.
              <br />
              <br />
              Besides coding, I also like to read self-help books, learn from
              productivity and mindset podcasts, and exercise. I keep up with
              fashion trends, sneaker releases, and tech vlogs on Youtube. I
              enjoy spending time with my family and friends and playing online
              games for fun.
            </p>
            <div className="flex justify-center lg:block">
              <h3 className="flex items-center hover:text-slate-500">
                Let's stay in touch: &nbsp; <Social />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
