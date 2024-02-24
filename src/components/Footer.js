import Image from "next/image";
import LogoDark from "../../public/logo-dark.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] px-2 py-8 text-center" id="footer">
      <Link href={"/"} className="flex justify-center p-5 px-3">
        <Image alt="logo" src={LogoDark} height="50" width="50" quality={60}/>
      </Link> 

      <p className="text-white">
        Copyright © 2023 Frances Gonzales <br /> All Rights Reserved <br />{" "}
        v.1.0.1
      </p>
    </footer>
  );
}
