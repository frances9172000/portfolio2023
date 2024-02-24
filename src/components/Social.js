import Link from "next/link";

export default function Social( {col = true,  color = false, style}) {
  return (
    <div className={`showcase flex justify-evenly ${style} ${color ? color : 'dark:text-slate-400 text-[var(--primary)]'} ${col ? 'md:flex-col' : ''}`}>
      <Link className="text-[2rem] md:text-[3rem] hover:text-[var(--secondary)]" href={"#"}>
        <i className="fa-brands fa-square-facebook"></i>
      </Link>
      <Link className="text-[2rem] md:text-[3rem] hover:text-[var(--secondary)]" href={"#"}>
        <i className="fa-brands fa-square-twitter hover:text-[var(--secondary)]"></i>
      </Link>
      <Link className="text-[2rem] md:text-[3rem] hover:text-[var(--secondary)]" href={"#"}>
        <i className="fa-brands fa-codepen"></i>
      </Link>
      <Link className="text-[2rem] md:text-[3rem] hover:text-[var(--secondary)]" href={"#"}>
        <i className="fa-brands fa-square-github"></i>
      </Link>
      <Link className="text-[2rem] md:text-[3rem] hover:text-[var(--secondary)]" href={"#"}>
        <i className="fa-solid fa-envelope"></i>
      </Link>
    </div>
  );
}
