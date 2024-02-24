import Image from "next/image";
import LogoBorderLight from "../../public/logo-border-light.png";
import LogoMainLight from "../../public/logo-main-light.png";
import LogoBorderDark from "../../public/logo-border-dark.png";
import LogoMainDark from "../../public/logo-main-dark.png";

export default function Logo({ currentTheme }) {
  return (
    <div className="relative h-[50px] w-[50px] group">
      <div className="absolute h-full w-full group-hover:rotate-[360deg] group-hover:scale-125 duration-500 transition-all">
        <Image
          alt="logo border"
          src={currentTheme == "dark" ? LogoBorderLight : LogoBorderDark}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35px] w-[35px]">
        <Image
          alt="logo main"
          src={currentTheme == "dark" ? LogoMainLight : LogoMainDark}
        />
      </div>
    </div>
  );
}
