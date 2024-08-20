import dynamic from "next/dynamic";
import Topnav from "@/components/Topnav";
import Showcase from "@/components/Showcase";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
const Sidenav = dynamic(() => import("@/components/Sidenav"));
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Intro from "@/components/Intro";
import ImageFull from "@/components/ImageFull";

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [inView, setInView] = useState({
    section: null,
    sub: null,
  });

  const [menuBar, setMenuBar] = useState(null);
  //For Navigation
  const [isOpen, setIsOpen] = useState(false);
  // For Menu Bar Icon
  const [open, setOpen] = useState(false);

  // Change the appearance of menu bar
  const menuBarIcon = () => {
    let children = menuBar.current.children;
    for (let i = 0; i < children.length; i++) {
      if (!open) {
        children[i].classList.remove("reverse");
        children[i].classList.add("forwards");
        children[i].classList.add("active");
        setOpen(true);
      } else {
        children[i].classList.add("reverse");
        children[i].classList.remove("forwards");
        children[i].classList.remove("active");
        setOpen(false);
      }
    }
  };

  const [currentImage, setCurrentImage] = useState()
  const openFullScreen = (src) => {
    setCurrentImage(src)
  }

  const [closeImage, setCloseImage] = useState(true)
  const onCloseImage = () => {
    setCloseImage(true)
}

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setIntro(false);
    }, 2500);
  }, []);

  const openNav = (menuBar) => {
    setIsOpen(!isOpen);
    menuBarIcon(menuBar);
  };

  if (!mounted) return null;
  const changeTheme = (currTheme) => {
    setTheme(currTheme);
  };

  return (
    <>
      {intro ? <Intro /> : ""}
      <ImageFull currentImage={currentImage} onCloseImage={onCloseImage} closeImage={closeImage}/>
      <Topnav
        home={true}
        openNav={openNav}
        changeTheme={changeTheme}
        currentTheme={currentTheme}
        setMenuBar={setMenuBar}
        inView={inView}
      />
      <Sidenav
        isOpen={isOpen}
        setOpen={setIsOpen}
        changeTheme={changeTheme}
        currentTheme={currentTheme}
        openNav={openNav}
        inView={inView}
      />
      <div className="container px-5">
        <Showcase setInView={setInView} intro={intro} />
        <Section setInView={setInView} inView={inView} openFullScreen={openFullScreen} setCloseImage={setCloseImage}/>
      </div>

      <Footer currentTheme={currentTheme} />
    </>
  );
}
