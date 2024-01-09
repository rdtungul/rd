import "../css/portfolio.css";
// web development data
import { webDevelopment } from "../js/data";

export default function WebDevelopment() {
  return (
    <section id="web-development">
      {/* Web Development Content */}
      <div className="text-center portfolio-content lg:text-left">
        <p className="pt-10 mb-2 text-2xl font-semibold lg:pt-32 md:mb-5 md:mt-10 lg:text-4xl portfolio-title">
          Web Development
        </p>
        <p className="mb-10 text-lg text-black opacity-50 md:mb-0 portfolio-text lg:text-2xl">
          Here{`'`}s a portfolio of my Web Development work.
        </p>

        {/* Portfolio Content with Images */}
        <div className="grid grid-cols-1 gap-2 text-center text-black md:grid-cols-2 md:grid-rows-1 justify-items-center">
          {webDevelopment.map((webDev) => {
            const { id, link, img, title, description } = webDev;
            return (
              <div key={id}>
                <a
                  href={link}
                  className="group"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="relative mb-5 md:mb-0 rounded-xl lg:mt-10 md:col-span-1 md:mx-5 lg:text-left">
                    {/* portfolio img */}
                    <div className="flex justify-center md:mt-5">
                      <img
                        className="image-hover-effects rounded-2xl"
                        src={img}
                        alt=""
                      />
                    </div>
                    {/* portfolio title */}
                    <p className="py-5 text-lg font-medium leading-9 md:text-2xl group-hover:text-slate-500">
                      {title}
                    </p>
                    {/* portfolio text content */}
                    <p className="text-lg leading-7 text-black opacity-60 md:text-xl">
                      {description}
                    </p>
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
