import ResponsiveIcon from "../../public/responsive.png";
import SimplicityIcon from "../../public/simplicity.png";
import CompatibilityIcon from "../../public/compatibility.png";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Focus() {
  const responsiveElem = useRef();
  const compatibilityElem = useRef();
  const simplicityElem = useRef();
  const responsiveInView = useInView(responsiveElem);
  const compatibilityInView = useInView(compatibilityElem);
  const simplicityInView = useInView(simplicityElem);

  return (
    <div className="md:flex flex-wrap justify-evenly">
      <div
        className={`card w-full md:w-[250px] my-3 mx-auto justify-between text-slate-400 text-sm text-center transition-all duration-500 ${
          responsiveInView ? "" : "fade-up"
        }`}
      >
        <div className="bg-[var(--secondary)] p-5 h-full">
          <div className="min-h-[200px]">
            <Image
              alt="responsive icon"
              src={ResponsiveIcon}
              className="p-4 w-full"
            />
          </div>
          <h1
            className="mb-3 text-2xl text-[var(--secondary)]"
            ref={responsiveElem}
          >
            Responsiveness
          </h1>
          <p>
            Fits in any device. Mobile-first development, that's one of my main
            objectives in creating a website.
          </p>
        </div>
      </div>

      <div
        className={`card w-full md:w-[250px] my-3 mx-auto justify-between text-slate-400 text-sm text-center transition-all duration-500 ${
          simplicityInView ? "" : "fade-up"
        }`}
      >
        <div className="bg-[var(--secondary)] p-5 h-full">
          <div className="min-h-[200px]">
            <Image
              alt="responsive icon"
              src={SimplicityIcon}
              className="p-4 w-full"
            />
          </div>
          <h1
            className="mb-3 text-2xl text-[var(--secondary)]"
            ref={simplicityElem}
          >
            Simplicity
          </h1>
          <p>
            Simplicity for beauty. Simple without any complexity will create
            harmony to users and clients.
          </p>
        </div>
      </div>

      <div
        className={`card w-full md:w-[250px] my-3 mx-auto justify-between text-slate-400 text-sm text-center transition-all duration-500 ${
          compatibilityInView ? "" : "fade-up"
        }`}
      >
        <div className="bg-[var(--secondary)] p-5 h-full">
          <div className="min-h-[200px]">
            <Image
              alt="responsive icon"
              src={CompatibilityIcon}
              className="p-4 w-full"
            />
          </div>
          <h1
            className="mb-3 text-2xl text-[var(--secondary)]"
            ref={compatibilityElem}
          >
            Compatibility
          </h1>
          <p>
            Works in any browser. Cross-browser compatiblity of any site is a
            must, that's why I equiped my projects with browser-friendly codes.
          </p>
        </div>
      </div>
    </div>
  );
}
