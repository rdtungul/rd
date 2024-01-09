import "../css/about.css";

// footer icons
import { footerIcons } from "../js/data";

export default function Social() {
  return (
    <>
      {footerIcons.map((footerIcon) => {
        const { id, link, img } = footerIcon;
        return (
          <a
            key={id}
            href={link}
            className="h-auto group"
            target="_blank"
            rel="noreferrer"
          >
            <div className="inline-flex mr-3">
              <img
                className="opacity-75 image-hover-effects"
                src={img}
                alt=""
              />
            </div>
          </a>
        );
      })}
    </>
  );
}
