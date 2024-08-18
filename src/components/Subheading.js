import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Subheading({ title, style, icon, setInView, section }) {
  const elem = useRef();
  const inView = useInView(elem, { margin: "-90px 0px -90px 0px" });
  const [initRender, setInitRender] = useState(false);

  // This function tracks whether a specific section is in view
  // Use for the navigation
  function useDidUpdateEffect() {
    useEffect(() => {
      if (initRender) {
        if (inView) return setInView(section);
      }

      setInitRender(true);
    }, [inView]);
  }

  useDidUpdateEffect();

  return (
    <div
      className={`${style} md:pt-[100px] pt-[80px] mb-8 md:text-right text-center`}
      ref={elem}
    >
      <h1 className="inline-block font-semibold text-[1.5rem] relative overflow-hidden">
        <div
          className={`${
            inView ? "translate-y-0 delay-300" : "translate-y-full"
          } transition-all duration-500`}
        >
          {" "}
          <i
            className={`${icon} text-[var(--primary)] dark:text-slate-400`}
          ></i>{" "}
          <span className="dark:text-white text-[var(--primary)]">{title}</span>
        </div>
        <div
          className={`${
            inView ? "w-full" : "w-0"
          } transition-all duration-300 bg-[var(--secondary)] h-[3px] left-[50%] translate-x-[-50%] absolute bottom-0`}
        ></div>
      </h1>
    </div>
  );
}
