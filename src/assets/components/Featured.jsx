// importing featured image links
import { featuredImgs } from "../js/data";

export default function Featured() {
  return (
    <section id="featured" className="mt-20 border-t-2 border-gray-100">
      <div className="grid items-center grid-cols-3 gap-10 my-20 justify-items-center lg:grid-cols-5 md:grid-rows-1 lg:gap-2">
        {featuredImgs.map((featuredImg) => {
          const { id, img } = featuredImg;
          return <img key={id} src={img} alt="" />;
        })}
      </div>
    </section>
  );
}
