import navLogo from "../img/general/nav-logo-dark.png";
import { navLinks, numberOfYears } from "../js/data";
import Social from "./Social";
import { footerServices } from "../js/data";

export default function Footer() {
  return (
    <section id="footer" className="bg-white">
      <footer className="container grid grid-cols-1 py-10 pt-20 mx-auto text-center md:pt-10 md:text-left lg:justify-between lg:items-start lg:flex lg:gap-10 md:px-0">
        {/* <!-- Logo --> */}
        <div id="logo" className="flex justify-center mb-5 md:block lg:mb-0">
          <a href="#">
            <img
              className="w-12 md:w-auto"
              src={navLogo}
              alt=""
              id="footer-logo"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
          {/* <!-- Menu Items --> */}
          <div className="grid grid-cols-1">
            <p className="pt-5 mb-3 uppercase opacity-50 md:pt-0">Links</p>
            {navLinks.map((navLink) => {
              const { id, link, title } = navLink;
              return (
                <a
                  key={id}
                  href={link}
                  className="!p-0 !text-sm my-1 hover:text-slate-500 hover:opacity-60"
                >
                  {title}
                </a>
              );
            })}
          </div>

          {/* <!-- Services Items --> */}
          <div className="grid grid-cols-1">
            <p className="pt-5 mb-3 uppercase opacity-50 lg:mb-0 md:pt-0">
              Services
            </p>
            {footerServices.map((footerService) => {
              const { id, link, title } = footerService;
              return (
                <a
                  key={id}
                  href={link}
                  className="!p-0 !text-sm my-1 lg:my-0 hover:text-slate-500 hover:opacity-60"
                >
                  {title}
                </a>
              );
            })}
          </div>

          {/* <!-- Social Items --> */}
          <div className="!block">
            <p className="pt-5 mb-3 uppercase opacity-50 md:pt-0">Socials</p>
            <Social />
            <br />
            <div className="mt-5">
              &copy; {numberOfYears}{" "}
              <a
                href="https://www.linkedin.com/in/rdtungul/"
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:text-slate-500"
              >
                Roseph Darl{" "}
              </a>
              <br />
              Built with{" "}
              <a
                href="https://tailwindcss.com/docs/guides/vite"
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:text-slate-500"
              >
                Vite + Tailwind CSS
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
