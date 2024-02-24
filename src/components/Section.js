import Subheading from "./Subheading";
import Heading from "./Heading";
import { Drawer, Controls, Button, Wrapper, Content } from "./Drawer";
import Gallery from "./Gallery";
import Projects from "./Projects";
import Focus from "./Focus";
import Contacts from "./Contacts";
import Avatar from "../../public/avatar.png";
import Avatar2 from "../../public/avatar-illustration.png";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
            <div ref={avatar} className="group mx-auto my-5 md:h-[300px] h-[300px] w-[300px] shrink-0 md:mr-5 relative">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius at
              est omnis, esse quo pariatur quod laborum officiis voluptates
              aliquam, animi exercitationem enim ut! Nam optio rerum consequatur
              quaerat dolorum, numquam enim quasi, harum culpa, et eum possimus
              dolores esse ratione atque accusantium similique repellendus!
              Consectetur cum quos ullam? Asperiores fuga sequi iure rem,
              molestiae, dignissimos voluptates facilis, temporibus nam modi
              consequuntur amet quaerat beatae deleniti incidunt fugiat quos
              quas vel? Dolor adipisci perferendis, fuga explicabo ea totam
              dicta ad.
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
              <Button icons={"fa-solid fa-heart"}>Other Skills</Button>
            </Controls>
            <Wrapper>
              <Content active={true}>
                <h1 className="text-2xl text-center md:text-left md:text-3xl mt-5 md:mt-0 drawer-content-title fade-in text-black dark:text-white">
                  <i className="fa fa-chart-line"></i> Economist
                </h1>
                <div className="text-center">
                  <i className="fa-brands fa-html5 color-change anim-delay-3"></i>
                  <i className="fa-brands fa-css3-alt color-change anim-delay-4"></i>
                  <i className="fa-brands fa-js-square color-change anim-delay-5"></i>
                </div>
                <div className="fade-in anim-delay-8">
                  <p className="indent-10">
                    <span className="text-lg text-[var(--secondary)]">
                      Unlock the Secrets to Crafting Stunning Websites: Harness
                      the Power of HTML, CSS3, and Vanilla JavaScript!
                    </span>{" "}
                    <span className="text-sm">
                      With 5 years of hands-on experience, these three tools
                      have been my trusty companions in bringing my wildest web
                      development dreams to life. But wait, there's more! I also
                      rely on cutting-edge front-end libraries and frameworks to
                      take my skills to the next level. These are some of the
                      awesome tools I use in my projects:
                    </span>
                  </p>
                  <div className="text-sm flex justify-evenly mt-5">
                    <ul>
                      <li>- Bootsrap</li>
                      <li>- Jquery</li>
                      <li>- React</li>
                    </ul>
                    <ul>
                      <li>- Tailwind</li>
                      <li>- Materialize</li>
                      <li>- Sass</li>
                    </ul>
                  </div>
                </div>
              </Content>
              <Content>
                <h1 className="text-2xl text-center md:text-left md:text-3xl mt-5 md:mt-0 drawer-content-title fade-in dark:text-white">
                  <i className="fa fa-code-branch"></i> Web Developer
                </h1>
                <div className="text-center">
                  <i className="fa-brands fa-node-js color-change anim-delay-3"></i>
                  <i className="fa-brands fa-php color-change anim-delay-4"></i>
                  <i className="fas fa-database color-change anim-delay-5"></i>
                </div>
                <p className="indent-10 fade-in anim-delay-8">
                  Welcome to [Your Name]'s portfolio, where you'll discover the
                  work of a talented backend developer with a passion for
                  Node.js and PHP. With expertise in both technologies, [Your
                  Name] has created a variety of robust and scalable web
                  applications, from APIs and database management systems to
                  high-performance server infrastructure. [Your Name]'s clean
                  and efficient code is designed to deliver exceptional results,
                  and clients have consistently praised [Your Name] for their
                  ability to build powerful backend systems that drive business
                  growth. If you're looking for a backend developer who can
                  create web solutions that perform at the highest level, look
                  no further than [Your Name]. Check out their portfolio to see
                  their exceptional work in action!
                </p>
              </Content>
              <Content>
                <h1 className="text-2xl text-center md:text-left md:text-3xl mt-5 md:mt-0 drawer-content-title fade-in dark:text-white">
                  <i className="fa fa-bezier-curve"></i> Graphic Designer
                </h1>
                <div className="text-center">
                  <i className="fa-brands fa-node-js color-change anim-delay-3"></i>
                  <i className="fa-brands fa-react color-change anim-delay-4"></i>
                  <i className="fa-brands fa-laravel color-change anim-delay-5"></i>
                </div>
                <p className="indent-10 fade-in anim-delay-8">
                  <span className="text-lg text-[var(--secondary)]">
                    Unlock the Secrets to Crafting Stunning Websites: Harness
                    the Power of HTML, CSS3, and Vanilla JavaScript!
                  </span>{" "}
                  <span className="text-sm">
                    With 3 years of hands-on experience, these three tools have
                    been my trusty companions in bringing my wildest web
                    development dreams to life. But wait, there's more! I also
                    rely on cutting-edge front-end libraries and frameworks to
                    take my skills to the next level. These are some of the
                    awesome tools I use in my projects:
                  </span>
                </p>
              </Content>
              <Content>
                <h1 className="text-2xl text-center md:text-left md:text-3xl mt-5 md:mt-0 drawer-content-title fade-in dark:text-white">
                  <i className="fa fa-graduation-cap"></i> Educator
                </h1>
                <div className="text-center">
                  <i className="fa-brands fa-node-js color-change anim-delay-3"></i>
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
              </Content>
              <Content>
                {" "}
                <h1 className="text-2xl text-center md:text-left md:text-3xl mt-5 md:mt-0 drawer-content-title fade-in dark:text-white">
                  <i className="fa fa-heart"></i> Other Skills
                </h1>
                <div className="text-center">
                  <i className="fa-brands fa-node-js color-change anim-delay-3"></i>
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
              </Content>
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
            {Projects.map((e, i) => {
              return (
                <Gallery
                  alt={"Portfolio"}
                  title={"Portfolio1"}
                  img={e}
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
            {Projects.map((e, i) => {
              return (
                <Gallery
                  alt={"Portfolio"}
                  title={"Portfolio1"}
                  img={e}
                  key={i}
                />
              );
            })}
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
