import "../css/nav.css";
// importing links from data.js
import { navLinks } from "../js/data";
import navLogo from "../img/general/nav-logo-dark.png";
import { useEffect, useRef } from "react";

export default function Nav() {
  const buttonEl = useRef(0);

  useEffect(() => {
    return () => {
      const btn = document.getElementById("menu-btn");
      const menu = document.getElementById("menu");
      btn.addEventListener("click", navToggle);
      btn.addEventListener("click", navToggle());
      function navToggle() {
        btn.classList.toggle("open");
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
      }
    };
  }, [buttonEl]);

  return (
    // <!-- NAVIGATION CONTAINER -->
    <nav className="container relative z-50 px-2 mx-auto md:px-0">
      {/* <!-- Flex Container for Nav Items --> */}
      <div className="container absolute flex items-center justify-between w-full my-6 space-x-20 lg:fixed">
        {/* <!-- Logo --> */}
        <div id="logo" className="z-30">
          <a href="#">
            <img className="w-12 md:w-auto" src={navLogo} alt="" id="logo" />
          </a>
        </div>
        {/* <!-- Menu Items --> */}
        <div className="items-center hidden space-x-10 md:flex">
          <span className="p-3 rounded-lg backdrop-blur-md bg-gray-300/30">
            {navLinks.map((navLink) => {
              const { id, link, title } = navLink;
              return (
                <a key={id} href={link} className="nav-hover-effect">
                  {title}
                </a>
              );
            })}
          </span>

          <a
            href="mailto:rosephdarl@gmail.com?subject=Join Our Team: Invitation to a Web Developer Role!"
            className="px-8 py-2 ml-0 text-base tracking-widest text-white duration-200 bg-black border-2 border-black rounded-lg shadow-md hover:text-black hover:bg-white hover:border-white"
          >
            Hire Now
          </a>
        </div>

        {/* <!-- Hamburger Menu Container --> */}
        {/* <!-- Hamburger Button --> */}
        <button
          ref={buttonEl}
          id="menu-btn"
          className="z-30 block pr-10 md:hidden focus:outline-none hamburger"
        >
          {/* <!-- Hamburger Lines --> */}
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* <!-- Mobile Menu Container --> */}
      <div
        id="menu"
        className="fixed inset-0 z-20 flex-col items-center self-end hidden w-full h-full px-6 py-1 pt-24 pb-24 tracking-widest uppercase md:hidden opacity-90 bg-slate-100 m-h-screen bg-secondary"
      >
        <div className="mobile-menu-toggle">
          {navLinks.map((navLink) => {
            const { id, link, title } = navLink;
            return (
              <a
                key={id}
                href={link}
                className="block pb-5 text-black hover:text-red-400"
              >
                {title}
              </a>
            );
          })}
          <a
            href="mailto:rosephdarl@gmail.com?subject=Join Our Team: Invitation to a Web Developer Role!"
            className="block pb-5 text-black hover:text-red-400"
          >
            Hire Now
          </a>
        </div>
      </div>
    </nav>
  );
}
