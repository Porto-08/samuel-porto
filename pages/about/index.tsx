import styles from "./styles.module.scss";
import svgHeaderDark from "../../assets/img/aboutDark.svg";
import svgHeaderLight from "../../assets/img/aboutLight.svg";
import {
  FaReact,
  FaPhp,
  FaSass,
  FaGit,
  FaNode,
  FaBootstrap,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiInsomnia,
  SiVisualstudiocode,
  SiNextdotjs,
} from "react-icons/si";
import { useDarkMode } from "../../context/DarkModeContext";
import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

const About: NextPage = () => {
  const { dark } = useDarkMode();

  return (
    <>
      <Head>
        <title>Samuel Porto - About</title>
      </Head>
      <div
        className={`${styles.container}  animate__animated animate__fadeInLeft`}
      >
        <div className={styles.about}>
          <div>
            {dark === true ? (
              <Image src={svgHeaderDark} alt="profile svg" />
            ) : (
              <Image src={svgHeaderLight} alt="profile svg" />
            )}
          </div>

          <div className={styles.information}>
            <section>
              <h1>Samuel Porto - Fullstack Developer</h1>

              <p>
                I had the first contact with programming in the technical course
                where I loved this new world in my life, where I always have
                curiosity to learn new technologies! I really like to pass hours
                talking with my colleagues and friends about games, movies and,
                of course, programming.
                <br />
                <strong>#Never stop learning!</strong>
              </p>
            </section>

            <section className={styles.listProfile}>
              <ul>
                <li>
                  Birthday: <span>06/12/2001</span>
                </li>
                <li>
                  Age: <span>20</span>
                </li>
                <li>
                  Location: <span>São Paulo - Brazil</span>
                </li>
                <li>
                  Email: <span>samuelalcala2001@outlook.com</span>
                </li>
                <li>
                  Phone: <span>55+ (11) 980540272</span>
                </li>
                <li>
                  Study:
                  <span>Impacta College - 1º Semester</span>
                </li>
                <li>
                  Formation:
                  <span>Etec - Systems Development</span>
                </li>
              </ul>
            </section>

            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5511980540272"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://github.com/Porto-08"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/samuelporto"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.experiences}>
          <h3>Experiences</h3>

          <div className={styles.experienceBox}>
            <header>
              <h4>Bizsys (startup) - Fullstack Developer</h4>
              <span>Jun 2021 - Present</span>
            </header>

            <p>
              Web Apps development with React focused on responsiveness.
              Development and maintenance of REST APIs with NodeJs and PHP.
              Daily meetings about ongoing projects.
            </p>

            <ul>
              <li>
                <a
                  href="https://www.bizsys.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </li>

              <span>|</span>

              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  ReactJs
                </a>
              </li>
              <li>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  NodeJs
                </a>
              </li>
              <li>
                <a href="https://www.php.net/" target="_blank" rel="noreferrer">
                  Php
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  Javascript
                </a>
              </li>
              <li>
                <a
                  href="https://sass-lang.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sass
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.experienceBox}>
            <header>
              <h4>RecodePro (startup) - Instructor</h4>
              <span>Dec 2020 - March 2021</span>
            </header>

            <p>
              Monitoring students three times a week during classes, mentoring
              (classes) twice a week, supporting students, correcting projects,
              creating activities and questions for class development, decision
              making with management and co-workers.
            </p>

            <ul>
              <li>
                <a
                  href="https://www.recodepro.org.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </li>

              <span>|</span>

              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  ReactJs
                </a>
              </li>
              <li>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Native
                </a>
              </li>
              <li>
                <a href="https://www.php.net/" target="_blank" rel="noreferrer">
                  NodeJs
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  Javascript
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.skills}>
          <section className={styles.skillsBox}>
            <h3>Front-end</h3>

            <div className={styles.skillContent}>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <SiNextdotjs />

                <span>NextJs</span>
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <FaReact />

                <span>React</span>
              </a>

              <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                <FaSass />
                <span>Sass</span>
              </a>

              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaBootstrap />
                <span>Bootstrap</span>
              </a>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <SiJavascript />
                <span>JavaScript</span>
              </a>

              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <SiTypescript />
                <span>Typescript</span>
              </a>
            </div>
          </section>

          <section className={styles.skillsBox}>
            <h3>Back-end</h3>

            <div className={styles.skillContent}>
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                <FaNode />

                <span>NodeJs</span>
              </a>

              <a href="https://www.php.net/" target="_blank" rel="noreferrer">
                <FaPhp />
                <span>Php</span>
              </a>
            </div>
          </section>

          <section className={styles.skillsBox}>
            <h3>Tools</h3>

            <div className={styles.skillContent}>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <FaGit />
                <span>Git</span>
              </a>

              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <SiMysql />
                <span>MySql</span>
              </a>

              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
              >
                <SiMongodb />
                <span>MongoDB</span>
              </a>

              <a href="https://insomnia.rest/" target="_blank" rel="noreferrer">
                <SiInsomnia />
                <span>Insomnia</span>
              </a>

              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noreferrer"
              >
                <SiVisualstudiocode />
                <span>VS Code</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
