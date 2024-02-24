import Link from "next/link";
import Theme from "./Theme";
import { use, useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import ScrollIntoView from "react-scroll-into-view";
import Logo from "./Logo";

export default function Topnav({
  openNav,
  changeTheme,
  currentTheme,
  setMenuBar,
  inView,
}) {
  let [open, setOpen] = useState(false);
  let menuBar = useRef();

  useEffect(() => {
    setMenuBar(menuBar);
  }, []);

  const handleClick = (e) => {
    openNav();
  };

  const introDropdown = {
    title: {
      name: "Introduction",
      icon: "fa fa-info-circle",
    },
    links: [
      {
        name: "About Me",
        icon: "fa fa-user",
        selector: "#about",
        scrollOptions: {
          block: "top",
        },
      },
      {
        name: "Knowledge",
        icon: "fa fa-book",
        selector: "#knowledge",
        scrollOptions: {
          block: "top",
        },
      },
      {
        name: "Focus",
        icon: "fa fa-crosshairs",
        selector: "#focus",
        scrollOptions: {
          block: "top",
        },
      },
    ],
  };

  const projectDropdown = {
    title: {
      name: "Projects",
      icon: "fas fa-project-diagram",
    },
    links: [
      {
        name: "Web Projects",
        icon: "fa fa-code-branch",
        selector: "#webdev",
        scrollOptions: {
          block: "top",
        },
      },
      {
        name: "Design Projects",
        icon: "fa fa-paintbrush",
        selector: "#designs",
        scrollOptions: {
          block: "top",
        },
      },
    ],
    style: "w-[200px]",
  };

  return (
    <nav className="py-2 md:py-5 px-5 fixed w-full bg-[var(--secondaryTranslucent)] z-40 topnav dark:bg-[var(--primaryTranslucent)]">
      <div className="container flex justify-between">
        <div className="flex items-center w-full">
          <Link href={"#"}>
            <Logo currentTheme={currentTheme} />
          </Link>
          <Theme
            style={"ml-auto px-7 hidden md:block"}
            changeTheme={changeTheme}
            currentTheme={currentTheme}
          />
          <div className="space-x-3 md:space-x-8 text-[var(--dark)] dark:text-slate-300  hidden md:flex">
            <Dropdown
              inView={inView.section}
              section={"introduction"}
              init={introDropdown}
            />
            <Dropdown
              inView={inView.section}
              section={"projects"}
              init={projectDropdown}
            />
            <ScrollIntoView selector={"#contacts"}>
              <button
                className={`${
                  inView.section == "contacts"
                    ? "dark:text-[var(--secondary)] text-[var(--neon)] font-bold"
                    : ""
                } hover:text-[var(--neon)] dark:hover:text-[var(--secondary)] transition-colors tilt`}
              >
                <i className="fa fa-phone"></i> Contacts
              </button>
            </ScrollIntoView>
            <Link
              href={"#"}
              className="hover:text-[var(--neon)] dark:hover:text-[var(--secondary)] transition-colors tilt"
            >
              <i className="fa fa-question-circle"></i> About Page
            </Link>
          </div>

          <div
            className="hamburger-menu block md:hidden ml-auto"
            onClick={(e) => handleClick(e)}
            ref={menuBar}
          >
            <div className="bg-[var(--primary)] dark:bg-[var(--secondary)]"></div>
            <div className="bg-[var(--primary)] dark:bg-[var(--secondary)]"></div>
            <div className="bg-[var(--primary)] dark:bg-[var(--secondary)]"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
