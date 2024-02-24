import { useRef } from "react";

let drawerControler;
let drawerContent;
let controlsNum = 0;
let contentNum = 0;

const openDrawer = (e) => {
  let drawerButtons = drawerControler.current.children;
  let drawerContents = drawerContent.current.children;
  for (let i = 0; i < drawerButtons.length; i++) {
    if (drawerButtons[i] == e.currentTarget) {
      drawerButtons[i].classList.add("active");
      drawerContents[i].classList.add("active");
    } else {
      drawerButtons[i].classList.remove("active");
      drawerContents[i].classList.remove("active");
    }
  }
};

function Drawer({ children }) {
  return <div className="drawer block md:flex">{children}</div>;
}

function Controls({ children }) {
  controlsNum = children.length;
  drawerControler = useRef();
  return (
    <div
      ref={drawerControler}
      className="drawer-controls flex flex-row md:flex-col text-bold text-lg dark:text-slate-400"
    >
      {children}
    </div>
  );
}

function Button({ children, active, icons }) {
  return (
    <button className={`text-center md:text-left ${active ? 'active': ''}`} onClick={(e) => openDrawer(e)}>
      <i className={icons}></i> <span className="hidden md:inline">{children}</span>
      <div></div>
    </button>
  );
}

function Wrapper({ children }) {
  contentNum = children.length;
  drawerContent = useRef();
  if (controlsNum !== contentNum)
    console.error("Controls and Wrapper Children must have the same length");
  return (
    <div
      ref={drawerContent}
      className="drawer-content flex-1 md:pl-5 dark:text-slate-300 text-justify"
    >
      {children}
    </div>
  );
}

function Content({ children, active }) {
  return <div className={active ? 'front-end-info active' : 'front-end-info'}>{children}</div>;
}

export { Drawer, Controls, Button, Wrapper, Content }; 
