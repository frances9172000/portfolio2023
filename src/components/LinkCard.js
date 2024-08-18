import Image from "next/image";
import Link from "next/link";
import Loader from "./Loader";

export default function Gallery({ img, title, alt, link = "#" }) {
  return (
    <div className="px-5 py-2">
      <div className="flex">
        <a
          href={`${link}`}
          target="_blank"
          className="group w-[250px] h-[130px] sm:w-[360px] sm:h-[200px] block relative flex-shrink-0"
        >
          <div>
            <Image
              alt={alt}
              className="border-2 border-[var(--primary)] dark:border-white h-full w-full object-cover absolute z-10 transition-all group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:border-[var(--secondary)]"
              src={img}
            />
            {/* <Loader className="border-2 border-[var(--primary)] dark:border-white z-10 transition-all group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:border-[var(--secondary)]"/> */}
          </div>
          <div className="h-full border-2 border-[var(--primary)] dark:border-white w-full absolute top-0 z-[5] transition-all group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
          <div className="h-full w-full border-2 border-[var(--primary)] dark:border-white absolute top-0 z-[1]"></div>
        </a>
      </div>
      <div className="flex text-slate-400 bg-[var(--dark)] text-sm">
        <a href={"#"} target="_blank" className="p-3">
          <i className="fab fa-github"></i>
        </a>
        <a href={link} target="_blank" className="p-3">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <div className="text-slate-400text-right ml-auto p-3">{title}</div>
      </div>
    </div>
  );
}
