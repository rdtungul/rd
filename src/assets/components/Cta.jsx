import strokeImg from "../img/services/cta-stroke.png";
export default function Cta() {
  return (
    <section id="cta" className="text-center bg-white bg-no-repeat">
      <div className="container px-2 py-10 mx-auto md:px-0">
        <div className="text-center leading-[50px] text-2xl md:text-4xl lg:text-6xl font-normal lg:leading-[110px]">
          <div className="flex justify-center my-10 opacity-50 md:mt-10 lg:mt-20">
            <img src={strokeImg} alt="" />
          </div>
          <span className="tracking-normal">
            Got a<span className="font-bold"> project?</span>
          </span>
          <p className="mt-5 text-base text-black opacity-50 md:mt-0 md:mb-20 portfolio-text lg:text-xl">
            Transform potential into reality as we collaborate to build a future
            of shared success.
          </p>
        </div>

        {/* CTA Content with button */}
        <div className="mt-10">
          <a
            rel="noopener"
            href="mailto:rosephdarl@gmail.com?subject=Join Our Team: Invitation to a Web Developer Role!"
            className="px-8 py-2 text-base tracking-widest text-white duration-200 bg-black border-2 border-black rounded-lg shadow-md lg:px-8 lg:py-4 lg:text-lg hover:text-black hover:bg-transparent "
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
