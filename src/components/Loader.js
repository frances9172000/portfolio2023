import Image from "next/image";
import LogoBorderLight from "../../public/logo-border-light.png";
import LogoMainLight from "../../public/logo-main-light.png";
import { motion } from "framer-motion";

export default function Loader({ className }) {
  return (
    <div
      className={`${
        className ? className : ""
      } h-full w-full absolute top-0 left-0 bg-[var(--primary)]`}
    >
      <div className="absolute h-[70px] w-[70px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            rotate: [null, 0, 180, -180, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            type: 'type'
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
            priority
            className="absolute h-[30px] w-[30px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></Image>
        </div>
      </div>
    </div>
  );
}
