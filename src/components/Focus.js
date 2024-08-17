import ResponsiveIcon from "../../public/responsive.png";
import SimplicityIcon from "../../public/simplicity.png";
import CompatibilityIcon from "../../public/compatibility.png";
import Image from "next/image";
import { useInView } from "framer-motion";

export default function Focus() {

  return (
    <div className="md:flex flex-wrap justify-evenly">
      <div className="card w-full md:w-[250px] my-3 mx-auto justify-between text-slate-400 text-sm text-center ">
        <div className="bg-[var(--secondary)] p-5 h-full">
          <div className="h-[200px] p-4">
            <Image alt="responsive icon" src={ResponsiveIcon} />
          </div>
          <h1 className="mb-3 text-2xl text-[var(--secondary)]">
            Responsiveness
          </h1>
          <p>
            Fits in any device. Mobile-first development, that's one of my main
            objectives in creating a website.
          </p>
        </div>
      </div>

      <div className="card w-full md:w-[250px] my-3 mx-auto justify-between text-slate-400 text-sm text-center ">
        <div className="bg-[var(--secondary)] p-5 h-full">
          <div className="h-[200px] p-4">
            <Image alt="responsive icon" src={SimplicityIcon} />
          </div>
          <h1 className="mb-3 text-2xl text-[var(--secondary)]">Simplicity</h1>
          <p>
            Simplicity for beauty. Simple without any complexity will create
            harmony to users and clients.
          </p>
        </div>
      </div>

      <div className="card w-full md:w-[250px] my-3 mx-auto justify-between text-slate-400 text-sm text-center">
        <div className="bg-[var(--secondary)] p-5 h-full">
          <div className="h-[200px] p-4">
            <Image alt="responsive icon" src={CompatibilityIcon} />
          </div>
          <h1 className="mb-3 text-2xl text-[var(--secondary)]">
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
