import Link from "next/link";
import Theme from "./Theme";
import Image from "next/image";
import LogoDark from "../../public/logo-dark.png";
import ScrollIntoView from "react-scroll-into-view";

export default function Sidenav({
  isOpen,
  changeTheme,
  currentTheme,
  openNav,
  inView,
}) {
  const setClose = () => {
    openNav();
  };

  const linkActive = (subsection) => {
    return inView.sub == subsection ? "text-[var(--secondary)] font-bold" : "";
  };
  return (
    <div
      className={`block md:hidden transition-all fixed h-[100vh] bg-[var(--dark)] top-0 left-0 z-50 p-5 overflow-x-auto no-scrollbar ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="text-slate-300">
        <ul>
          <li className="text-center p-5">
            <Link href={"/"}>
              <Image
                alt="logo"
                src={LogoDark}
                height="50"
                width="50"
                className="inline-block"
              />
            </Link>
          </li>
          <li className="hover:text-[var(--secondary)] transition-colors">
            <ScrollIntoView selector="#about">
              <button
                className={`${linkActive("about")} p-5 block w-full text-left`}
                onClick={() => setClose()}
              >
                <i className="fa fa-user"></i> About Me
              </button>
            </ScrollIntoView>
          </li>
          <li className="hover:text-[var(--secondary)] transition-colors">
            <ScrollIntoView selector="#knowledge">
              <button
                className={`${linkActive(
                  "knowledge"
                )} p-5 block w-full text-left`}
                onClick={() => setClose()}
              >
                <i className="fa fa-book"></i> Knowledge
              </button>
            </ScrollIntoView>
          </li>
          <li className="hover:text-[var(--secondary)] transition-colors">
            <ScrollIntoView selector="#focus">
              <button
                className={`${linkActive("focus")} p-5 block w-full text-left`}
                onClick={() => setClose()}
              >
                <i className="fa fa-crosshairs"></i> Focus
              </button>
            </ScrollIntoView>
          </li>
          <li className="hover:text-[var(--secondary)] transition-colors">
            <ScrollIntoView selector="#webdev">
              <button
                className={`${linkActive("webdev")} p-5 block w-full text-left`}
                onClick={() => setClose()}
              >
                <i className="fa fa-code-branch"></i> Web Projects
              </button>
            </ScrollIntoView>
          </li>
          <li className="hover:text-[var(--secondary)] transition-colors">
            <ScrollIntoView selector="#designs">
              <button
                className={`${linkActive("designs")} p-5 block w-full text-left`}
                onClick={() => setClose()}
              >
                <i className="fa fa-paintbrush"></i> Design Projects
              </button>
            </ScrollIntoView>
          </li>
          <li className="hover:text-[var(--secondary)] transition-colors">
            <ScrollIntoView selector="#contacts">
              <button
                className={`${linkActive(
                  "contacts"
                )} p-5 block w-full text-left`}
                onClick={() => setClose()}
              >
                <i className="fa fa-phone"></i> Contacts
              </button>
            </ScrollIntoView>
          </li>
          <li className="hover:text-[var(--secondary)] transition-colors">
            <Link href={"#"} className="p-5 block w-full text-left">
              <i className="fa fa-question-circle"></i> About Page
            </Link>
          </li>
          <li className="mt-5">
            <Theme
              style={"text-center"}
              sidenav={true}
              changeTheme={changeTheme}
              currentTheme={currentTheme}
              setClose={setClose}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
