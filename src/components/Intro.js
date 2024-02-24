import Image from "next/image";
import LogoBorderLight from "../../public/logo-border-light.png";
import LogoMainLight from "../../public/logo-main-light.png";
import { easeIn, motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="h-full w-full fixed top-0 left-0 bg-[var(--primary)] z-50">
      <div className="absolute h-[100px] w-[100px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            rotate: [0, 360, 0, 360],
          }}
          transition={{
            duration: 2,
            type: 'spring',
            ease: 'easeInOut'
          }}
          className="absolute"
        >
          <Image
            alt="logo border"
            src={LogoBorderLight}
            className="h-full w-full"
            priority
          ></Image>
        </motion.div>
        <div>
          <Image
            alt="logo main"
            src={LogoMainLight}
            className="absolute h-[50px] w-[50px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            priority
          ></Image>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            bottom: 0,
          }}
          animate={{
            bottom: -48,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="font-sans font-bold text-5xl absolute left-1/2 -translate-x-1/2"
        >
          <span className="text-[var(--secondary)]">FG</span>
          <span className="text-white">Dev</span>
        </motion.div>
      </div>
    </div>
  );
}
