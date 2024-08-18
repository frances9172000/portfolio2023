import Subheading from "./Subheading";
import Heading from "./Heading";
import { Drawer, Controls, Button, Wrapper, Content } from "./Drawer";
import LinkCard from "./LinkCard";
import Projects from "./Projects";
import Focus from "./Focus";
import Contacts from "./Contacts";
import Avatar from "../../public/avatar.png";
import Avatar2 from "../../public/avatar-illustration.png";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Gallery from "./Gallery";

export default function Section({ setInView }) {
  const avatar = useRef();
  const inView = useInView(avatar, { margin: "-300px 0px -300px 0px" });

  return (
    <div className="container">
      <Heading title="INTRODUCTION" />
      <section className="pb-[4rem]">
        <div id="about">
          <Subheading
            setInView={setInView}
            section={{ section: "introduction", sub: "about" }}
            icon="fa fa-user"
            title={"About Me"}
          />
          <div className="block md:flex items-center">
            <div
              ref={avatar}
              className="group mx-auto my-5 md:h-[300px] h-[300px] w-[300px] shrink-0 md:mr-5 relative"
            >
              <Image
                alt="avatar"
                src={Avatar}
                className={`${
                  inView ? "opacity-0" : "opacity-100"
                } absolute transition-all duration-700 group-hover:opacity-100`}
              />
              <Image
                alt="avatar"
                src={Avatar2}
                className={`${
                  inView ? "opacity-100" : "opacity-0"
                } absolute transition-all  duration-500 group-hover:opacity-0`}
              />
            </div>
            <p className="text-justify dark:text-slate-300 text-md">
              Oh hello there! I'm Frances M. Gonzales your Web Developer,
              Graphic Designer, and Economist at your service. I started web
              developing when I'm only at 17 years old with a shitty computer
              which can only run a notepad HTML and javascript codes. With this,
              I harness the power of sticks and stones to create a beautiful and
              attactive UI with the help of my graphic designing and web
              developing knowledge. But wait there's more, being attractive
              won't be helpful without fuctionality and accessibilty, so I also
              focuses on creating the best UX out there to sufice client's
              needs. You can check more from me by scrolling down. Thank you!
            </p>
          </div>
        </div>
      </section>

      <section className="pb-[4rem]">
        <div id="knowledge">
          <Subheading
            icon="fa fa-book"
            style={"text-left"}
            title={"Knowledge"}
            setInView={setInView}
            section={{ section: "introduction", sub: "knowledge" }}
          />
          <Drawer>
            <Controls>
              <Button active={true} icons={"fa fa-chart-line"}>
                Economics
              </Button>
              <Button icons={"fa fa-code-branch"}>Web Development</Button>
              <Button icons={"fa fa-bezier-curve"}>Graphic Design</Button>
              <Button icons={"fa fa-graduation-cap"}>Education</Button>
              {/* <Button icons={"fa-solid fa-heart"}>Other Skills</Button> */}
            </Controls>
            <Wrapper>
              <Content active={true}>
                <h1 className="text-2xl text-center md:text-left md:text-3xl mt-5 md:mt-0 drawer-content-title fade-in text-black dark:text-white">
                  <i className="fa fa-chart-line"></i> Economist
                </h1>
                <div className="text-center">
                  <i className="fas fa-hand-holding-usd color-change anim-delay-3"></i>
                  <i className="fa fa-money-bill color-change anim-delay-4"></i>
                  <i className="fa fa-book color-change anim-delay-5"></i>
                </div>
                <h1 className="text-lg text-[var(--secondary)] my-5 text-center">
                  Wait, how come your an Economics degree holder but also
                  knowledgeable about web developing and designing?
                </h1>
                <div className="fade-in anim-delay-6">
                  <p className="indent-10">
                    <span className="text-sm">
                      Well, let's just say I'm into tech. I'm a graduate of
                      Economics program at Partido State University, Goa,
                      Camarines Sur, Philippines but with knowledge at web
                      developing and graphic designing. You see, I started web
                      developing when I'm at senior high school but fate decided
                      to put me off-track - out of plan. I decided to continue
                      what fate given me and fortunately love it! Right now my
                      interests are on technologies and social science. It's
                      kind of hard to let go of your first love for what you
                      love currently, so I decided to not leave any behind.
                    </span>
                  </p>
                </div>
              </Content>
              <Content>
                <h1 className="text-2xl text-center md:text-left md:text-3xl mt-5 md:mt-0 drawer-content-title fade-in dark:text-white">
                  <i className="fa fa-code-branch"></i> Web Developer
                </h1>
                <div className="text-center">
                  <i className="fab fa-html5 color-change anim-delay-3"></i>
                  <i className="fab fa-css3 color-change anim-delay-4"></i>
                  <i className="fa-brands fa-node-js color-change anim-delay-5"></i>
                </div>
                <h1 className="text-lg text-[var(--secondary)] my-5 text-center">
                  Can you give us a detail about being aweb developer for fun?
                </h1>
                <p className="indent-10 fade-in anim-delay-6">
                  As a web developer I am knowlegeable of creating an either
                  Full-Stack and Front-End web pages. I used HTML, Javascript,
                  and CSS in harmony to create a responsive and compatible web
                  pages. To make it easier, some of the front-end frameworks and
                  libraries I used are Bootstrap, Materialize, JQuery, ReactJS,
                  Tailwind, and Sass. For backend, I used nodeJS and Express JS.
                  I also on track of learning PHP and Typescript for a flexible
                  coding. Additionally, NextJS is also on my list for full-stack
                  web develolopment like my Portfolio, oh right Laravel also.
                  Right now I'm only at web developing freelancing/part-time and
                  hope to gain clients and try my service for a level up web
                  developing. Feel free to check my personal projects below,
                  handcrafted by yours truly.
                </p>
              </Content>
              <Content>
                <h1 className="text-2xl text-center md:text-left md:text-3xl mt-5 md:mt-0 drawer-content-title fade-in dark:text-white">
                  <i className="fa fa-bezier-curve"></i> Graphic Designer
                </h1>
                <div className="text-center">
                  <i className="fa-solid fa-paintbrush color-change anim-delay-3"></i>
                  <i className="fa-solid fa-fill-drip color-change anim-delay-4"></i>
                  <i className="fa-solid fa-palette color-change anim-delay-5"></i>
                </div>
                <h1 className="text-lg text-[var(--secondary)] text-center my-5">
                  Graphic Designing? No worries, I got your site
                </h1>
                <p className="indent-10 fade-in anim-delay-6">
                  <span className="text-sm">
                    I also do graphic designing which I integrate on my web
                    pages. I'm into graphic designing and have experienced
                    designing for 2 years at one of Naga City, Philippine's
                    successful review center, Asiawise Study Center, Inc. Aside
                    from that, I also accept various clients which ask for
                    designing for free or with payment. Some of my works in
                    graphic designing includes, logo creation, layout for
                    prinatbles such as tarpauline, brochures, and pamphlets, and
                    social media posters. I usually used Photoshop and
                    Illustrator for my works. You can check out my projects
                    below.
                  </span>
                </p>
              </Content>
              <Content>
                <h1 className="text-2xl text-center md:text-left md:text-3xl mt-5 md:mt-0 drawer-content-title fade-in dark:text-white">
                  <i className="fa fa-graduation-cap"></i> Educator
                </h1>
                <div className="text-center">
                  <i className="fa-solid fa-chalkboard-user color-change anim-delay-3"></i>
                  <i className="fa-solid fa-user-graduate color-change anim-delay-4"></i>
                  <i className="fa-solid fa-award color-change anim-delay-5"></i>
                </div>
                <h1 className="text-lg text-[var(--secondary)] text-center my-5">
                  Wait, your also an Educator?
                </h1>
                <p className="indent-10 fade-in anim-delay-8">
                  Yes! I also do tutorials on Science and Mathematics with
                  subjects ranging from interediate levels to senior high
                  school. Maybe I'll add web developing on this if someone
                  avail. I do online tutorials and face-to-face tutorials.
                </p>
              </Content>
              {/* <Content>
                {" "}
                <h1 className="text-2xl text-center md:text-left md:text-3xl mt-5 md:mt-0 drawer-content-title fade-in dark:text-white">
                  <i className="fa fa-heart"></i> Other Skills
                </h1>
                <div className="text-center">
                  <i
                    classNam
                    e="fa-brands fa-node-js color-change anim-delay-3"
                  ></i>
                  <i className="fa-brands fa-react color-change anim-delay-4"></i>
                  <i className="fa-brands fa-laravel color-change anim-delay-5"></i>
                </div>
                <p className="indent-10 fade-in anim-delay-8">
                  <span className="text-lg text-[var(--secondary)]">
                    Unlock the Secrets to Crafting Stunning Websites: Harness
                    the Power of HTML, CSS3, and Vanilla JavaScript!
                  </span>{" "}
                  With 3 years of hands-on experience, these three tools have
                  been my trusty companions in bringing my wildest web
                  development dreams to life. But wait, there's more! I also
                  rely on cutting-edge front-end libraries and frameworks to
                  take my skills to the next level. These are some of the
                  awesome tools I use in my projects:
                </p>
              </Content> */}
            </Wrapper>
          </Drawer>
        </div>
      </section>

      <section className="pb-[4rem]">
        <div id={"focus"}>
          <Subheading
            icon="fa fa-crosshairs"
            style={"text-left"}
            title={"Focus"}
            setInView={setInView}
            section={{ section: "introduction", sub: "focus" }}
          />
          <Focus />
        </div>
      </section>

      <Heading title="Projects" />
      <section className="pb-[4rem]">
        <div id={"webdev"}>
          <Subheading
            icon="fa fa-code-branch"
            style={"text-left"}
            title={"Web Projects"}
            setInView={setInView}
            section={{ section: "projects", sub: "webdev" }}
          />

          <div className="flex justify-evenly flex-wrap">
          {Projects.web.map((e, i) => {
              return (
                <LinkCard
                  alt={e.name}
                  title={e.name}
                  img={e.src}
                  link={e.link}
                  key={i}
                />
              );
            })}
          </div>
        </div>

        <div id={"designs"}>
          <Subheading
            icon="fa fa-paintbrush"
            style={"text-left"}
            title={"Design Projects"}
            setInView={setInView}
            section={{ section: "projects", sub: "designs" }}
          />

          <div className="flex justify-evenly flex-wrap">
            <Gallery/>
          </div>
        </div>
      </section>

      <Heading title="CONTACTS" />
      <section className="pb-[4rem]">
        <div id={"contacts"}>
          <Subheading
            icon="fa fa-phone"
            style={"text-left"}
            title={"Contact Me"}
            setInView={setInView}
            section={{ section: "contacts", sub: "contacts" }}
          />
          <Contacts />
        </div>
      </section>
    </div>
  );
}
