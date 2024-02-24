import Link from "next/link";
import ScrollIntoView from "react-scroll-into-view";

export default function Dropdown({ init, inView = false, section = false }) {
  return (
    <div
      className="relative group/wrapper"
    >
      <div className="w-full absolute"></div>
      <button className={`group-hover/wrapper:text-[var(--neon)] group-hover/wrapper:dark:text-[var(--secondary)] ${inView == section ? "dark:text-[var(--secondary)] text-[var(--neon)] font-bold" : ""}`}>
        <i className={init.title.icon}></i> {init.title.name}
      </button>
      <div
        className={`absolute invisible [&>*]:w-full shadow-md bg-white text-black group-hover/wrapper:visible z-50 ${
          init.style ? init.style : "w-full"
        }`}
      >
        {init.links.map((link, i) => {
          if (link.link)
            return (
              <div
                className="hover:bg-[var(--secondary)] hover:text-white text-center"
                key={i}
              >
                <Link href={link.href} className="p-3 block">
                  <i className={link.icon}></i> {link.name}
                </Link>
              </div>
            );
          return (
            <div
              className="hover:bg-[var(--secondary)] hover:text-white"
              key={i}
            >
              <ScrollIntoView
                selector={link.selector}
                scrollOptions={link.scrollOptions}
              >
                <button className="p-3">
                  <i className={link.icon}></i> {link.name}
                </button>
              </ScrollIntoView>
            </div>
          );
        })}
      </div>
    </div>
  );
}
