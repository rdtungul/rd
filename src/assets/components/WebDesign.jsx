import "../css/portfolio.css";
// web development data
import { webDesign } from "../js/data";

export default function WebDesign() {
  return (
    <section id="web-design">
      {/* Web Development Content */}
      <div className="container text-center portfolio-content lg:text-left md:pt-0 lg:pt-20">
        <p className="pt-10 mb-2 text-2xl font-semibold md:mb-5 md:mt-0 lg:text-4xl portfolio-title">
          Web Design (UI/UX)
        </p>
        <p className="mb-10 text-lg text-black opacity-50 lg:mb-0 portfolio-text lg:text-2xl lg:w-1/2">
          Immerse yourself in the evolution of digital aesthetics within web
          design, where creativity and functionality crafted with Photoshop,
          Figma, Lightroom, Illustrator, and more.
        </p>

        {/* Portfolio Content with Images */}
        <div className="grid grid-cols-1 gap-1 text-black md:grid-cols-2 lg:grid-cols-3 md:grid-rows-1 md:gap-4 justify-items-center">
          {webDesign.map((webDes) => {
            const { id, link, img, title, linkText } = webDes;
            return (
              <div key={id}>
                <a
                  href={link}
                  className="h-auto group"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="mb-5 item group md:mb-0 rounded-xl lg:mt-10 md:col-span-1 md:mx-5 lg:text-left">
                    {/* portfolio img */}
                    <figure className="container transition-all duration-300 cursor-pointer">
                      <img
                        className="mt-5 duration-500 md:mt-0 group-hover:scale-105 rounded-2xl group-hover:shadow-lg item"
                        src={img}
                        alt=""
                      />
                      <div className="item-gradient"></div>
                      {/* portfolio title */}
                      <figcaption className="absolute px-4 text-lg text-left text-white bottom-6">
                        <p className="pb-2 text-lg font-medium text-gray-900 font-base md:text-xl lg:text-2xl">
                          {title}
                        </p>
                        {/* portfolio text content */}
                        <button
                          href={link}
                          className="text-lg font-medium text-black opacity-60 group-hover:text-red-400 group-hover:opacity-80"
                        >
                          {linkText}
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
