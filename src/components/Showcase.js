import Social from "./Social";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ({ setInView, intro }) {
  const showCase = useRef();
  const inView = useInView(showCase, { margin: "-90px 0px -90px 0px" });

  const fadeIn = {
    hidden: {
      opacity: 0,
      transition: {
        transition: {
          when: "afterChildren",
        },
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.6,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" },
    },
  };

  const slideDown = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" },
    },
  };

  const shakeSide = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      rotate: [0, 7, -7, 7, 0],
      transition: { duration: 0.5, ease: "easeInOut", delay: 1.7 },
    },
  };

  useEffect(() => {
    if (inView) setInView("showcase");
  }, [inView]);

  return (
    <main className="h-[100vh] grid place-items-center">
      <div className="container">
        <div className="block md:flex justify-between pt-[80px]">
          <motion.div
            variants={fadeIn}
            initial={"hidden"}
            animate={!intro ? 'visible' : ''}
            className="showcase-text font-extrabold leading-tight text-center md:text-left"
          >
            <motion.div
              variants={slideUp}
              className="text-[2.5rem] md:text-[4.5rem] dark:text-white overflow-hidden"
              ref={showCase}
            >
              Hi! I'm
            </motion.div>
            <motion.div
              variants={slideDown}
              className="text-[3rem] sm:text-[4rem] md:text-[5rem] text-[var(--secondary)] overflow-hidden "
            >
              <span className="tracking-[1rem]">FRANCE</span>S
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="ml-[0.2em] text-[1rem] md:text-[1.5rem] dark:text-slate-400"
            >
              Economist, Web Developer, & Graphic Artist
            </motion.div>
            <motion.button
              variants={shakeSide}
              className="mx-auto md:ml-[0.2em] mt-3 dark:text-slate-400 text-[1.3rem] py-2 px-3 border-2 dark:border-white border-[var(--primary)] block hover:bg-[var(--secondary)] dark:hover:border-[var(--secondary)] hover:border-[var(--secondary)] dark:hover:text-[var(--primary)] hover:text-[var(--primary)] transition-colors "
            >
             <Link href="/RESUME.pdf" locale={false}> My CV here <i className="fa-solid fa-download"></i></Link>
            </motion.button>
          </motion.div>
          <Social style={"mt-[100px] md:mt-auto"} />
        </div>
      </div>
    </main>
  );
}
