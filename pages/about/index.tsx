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
import DownloadCv from "../../components/DownloadCv";

const About: NextPage = () => {
  const { dark } = useDarkMode();

  return (
    <>
      <Head>
        <title>Samuel Porto - Sobre mim</title>
      </Head>
      <div
        className={`${styles.container}  fadeInTop`}
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
                Tive o primeiro contato com programação em um curso tecnico,
                onde me apaixonei por este novo mundo na minha vida. Eu gosto
                muito de ajudar a resolver os problemas das pessoas e de
                compartilhar meus conhecimentos com elas.
                <br />
                <strong>#Never stop learning!</strong>
              </p>
            </section>

            <section className={styles.listProfile}>
              <ul>
                <li>
                  Idade: <span>20</span>
                </li>
                <li>
                  Localização: <span>São Paulo - Brazil</span>
                </li>
                <li>
                  Email: <span>samuelalcala2001@outlook.com</span>
                </li>
                <li>
                  Celular (Whats): <span>55+ (11) 980540272</span>
                </li>
                <li>
                  Cursando:
                  <span>Faculdade Impacta - 1º Semestre</span>
                </li>
                <li>
                  Formação:
                  <span>Etec - Desenvolvimentos de Sistemas</span>
                </li>
              </ul>
            </section>

            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5511980540272"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://github.com/Porto-08"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/samuelporto"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <FaLinkedin />
              </a>
            </div>

          </div>
        </div>

        <div className={styles.experiences}>
          <h3>Experiências</h3>

          <div className={styles.experienceBox}>
            <header>
              <h4>Bizsys (startup) - Fullstack Developer</h4>
              <span>Jun 2021 - Atual</span>
            </header>

            <p>
              Desenvolvimento de web apps e projetos especias com ReactJs e
              Unity. Desenvolvimento e Manutenção de APIs Rest com NodeJs e PHP
              (Laravel)
            </p>

            <ul>
              <li>
                <a
                  href="https://www.bizsys.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  title="Visitar Website"
                >
                  Website
                </a>
              </li>

              <span>|</span>

              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"
                title="Conhecer Tecnologia" >
                  ReactJs
                </a>
              </li>
              <li>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                  title="Conhecer Tecnologia"
                >
                  NodeJs
                </a>
              </li>
              <li>
                <a href="https://www.php.net/" target="_blank" rel="noreferrer"
                title="Conhecer Tecnologia" >
                  Php
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                  title="Conhecer Tecnologia"
                >
                  Javascript
                </a>
              </li>
              <li>
                <a
                  href="https://sass-lang.com/"
                  target="_blank"
                  rel="noreferrer"
                  title="Conhecer Tecnologia"
                >
                  Sass
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.experienceBox}>
            <header>
              <h4>RecodePro (startup) - Instrutor</h4>
              <span>Dez 2020 - Março 2021</span>
            </header>

            <p>
              Monitoria dos alunos três vezes por semana durante as aulas,
              mentorias (aulas) duas vezes por semana, suporte aos alunos,
              correção de projetos, criação de atividades e questões para
              desenvolvimento da aula, tomadas de decisões junto a gestão e
              colegas de trabalho.
            </p>

            <ul>
              <li>
                <a
                  href="https://www.recodepro.org.br/"
                  target="_blank"
                  rel="noreferrer"
                  title="Visitar Website"
                >
                  Website
                </a>
              </li>

              <span>|</span>

              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"
                title="Conhecer Tecnologia">
                  ReactJs
                </a>
              </li>
              <li>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                  title="Conhecer Tecnologia"
                >
                  React Native
                </a>
              </li>
              <li>
                <a href="https://www.php.net/" target="_blank" rel="noreferrer"
                title="Conhecer Tecnologia">
                  NodeJs
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                  title="Conhecer Tecnologia"
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
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer"
              title="Conhecer Tecnologia">
                <SiNextdotjs />

                <span>NextJs</span>
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer"
              title="Conhecer Tecnologia">
                <FaReact />

                <span>React</span>
              </a>

              <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"
              title="Conhecer Tecnologia">
                <FaSass />
                <span>Sass</span>
              </a>

              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <FaBootstrap />
                <span>Bootstrap</span>
              </a>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <SiJavascript />
                <span>JavaScript</span>
              </a>

              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <SiTypescript />
                <span>Typescript</span>
              </a>
            </div>
          </section>

          <section className={styles.skillsBox}>
            <h3>Back-end</h3>

            <div className={styles.skillContent}>
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"
              title="Conhecer Tecnologia">
                <FaNode />

                <span>NodeJs</span>
              </a>

              <a href="https://www.php.net/" target="_blank" rel="noreferrer"
              title="Conhecer Tecnologia">
                <FaPhp />
                <span>Php</span>
              </a>
            </div>
          </section>

          <section className={styles.skillsBox}>
            <h3>Ferramentas</h3>

            <div className={styles.skillContent}>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer"
              title="Conhecer Tecnologia">
                <FaGit />
                <span>Git</span>
              </a>

              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"
              title="Conhecer Tecnologia">
                <SiMysql />
                <span>MySql</span>
              </a>

              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <SiMongodb />
                <span>MongoDB</span>
              </a>

              <a href="https://insomnia.rest/" target="_blank" rel="noreferrer"
              title="Conhecer Tecnologia">
                <SiInsomnia />
                <span>Insomnia</span>
              </a>

              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
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
