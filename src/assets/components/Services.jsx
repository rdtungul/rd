import "../css/services.css";
// services data
import { services } from "../js/data";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-center bg-no-repeat bg-cover bg-services"
    >
      <div className="container p-2 px-2 py-20 mx-auto md:px-0">
        {/* Services Title */}
        <div className="mb-16 text-2xl font-medium text-center text-white md:text-3xl">
          Transforming Complexity into User-Friendly Designs
        </div>
        {/* <!-- Grid Container --> */}
        <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-2 md:grid-rows-1">
          {services.map((service) => {
            const { id, title, text, link, linkText, img } = service;
            return (
              <a key={id} href={link}>
                <div className="p-10 group h-min backdrop-blur-lg bg-gray-200/10 rounded-xl md:col-span-2 image-hover-effects">
                  <p className="text-xl font-bold md:text-2xl opacity-90">
                    {title}
                  </p>

                  <p className="z-10 mt-6 mb-5 text-lg opacity-50">{text}</p>
                  <button
                    href={link}
                    className="text-lg font-medium text-gray-500 group-hover:text-red-400 opacity-80"
                  >
                    <span className="opacity-80">{linkText}</span>
                  </button>
                  <img src={img} alt="" className="w-full mt-10 rounded-2xl" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
