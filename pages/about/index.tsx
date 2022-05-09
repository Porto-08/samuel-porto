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
import Experiences from "../../components/Experiences";

const About: NextPage = () => {
  const { dark } = useDarkMode();

  return (
    <>
      <Head>
        <title>Samuel Porto - Sobre mim</title>
      </Head>
      <div className={`${styles.container}  fadeInTop`}>
        <div className={styles.about}>
          <div>
            {dark === true ? (
              <Image src={svgHeaderDark} alt="Sobre mim" draggable={false} />
            ) : (
              <Image src={svgHeaderLight} alt="Sobre mim" draggable={false} />
            )}
          </div>

          <div className={styles.information}>
            <section>
              <h1>Samuel Porto - Dev. Fullstack</h1>

              <p>
                Tive o primeiro contato com programação com a minha formação no curso tecnico da Etec,
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
                  Email:
                  <span>
                    <a
                      href="mailto:samuelalcala2001@outlook.com?Subject=Bora%20falar%20de%20projetos%3F&Body=Sua%20mensagem..."
                      title="Mandar um email">
                      samuelalcala2001@outlook.com
                    </a>
                  </span>
                </li>
                <li>
                  Celular (Whats):
                  <span>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511980540272"
                      target="_blank"
                      rel="noreferrer"
                      title="mandar uma mensagem por Whatsapp"
                    >
                      55+ (11) 980540272
                    </a>
                  </span>
                </li>
                <li>
                  Cursando:
                  <span>
                    <a
                      href="https://www.impacta.edu.br/"
                      target="_blank"
                      rel="noreferrer"
                      title="mandar uma mensagem por Whatsapp"
                    >

                      Faculdade Impacta - 1º Semestre
                    </a>
                  </span>
                </li>
                <li>
                  idioma:
                  <span>Inglês - intermediário</span>
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
          <h2>Experiências</h2>

          <Experiences
            title="Act Digital (Albert Einstein) - Desenvolvedor Fullstack Jr."
            date="Março 2022 - Atual"
            description="
              - Desenvolvimento e manutenção de Dashboards com React/Typescript.
              - Desenvolvimento e manutenção de APis com NodeJs/Typescript 
              - Scrum (Planning, Review, 15 dias de Sprint)
            "
            linkWebsite="https://actdigital.com/pt/"
            technologies={[{ title: "React", link: "https://reactjs.org/" }, { title: "NodeJs", link: "https://nodejs.org/en/" }]}
          />

          <Experiences
            title="Bizsys (startup) - Desenvolvedor Fullstack Jr."
            date="Junho 2021 - Fevereiro 2022"
            description="Desenvolvimento de web apps e projetos especias com ReactJs e Unity. Desenvolvimento e Manutenção de APIs Rest com NodeJs e PHP (Laravel)"
            linkWebsite="https://bizsys.com.br/"
            technologies={[{ title: "React", link: "https://reactjs.org/" }, { title: "NodeJs", link: "https://nodejs.org/en/" }, { title: "PHP", link: "https://www.php.net/" }, { title: "Laravel", link: "https://laravel.com/" }]}
          />

          <Experiences
            title="RecodePro (startup) - Monitor"
            date="Dezembro 2020 - Março 2021"
            description="Monitoria dos alunos três vezes por semana durante as aulas, mentorias (aulas) duas vezes por semana, suporte aos alunos, correção de projetos, criação de atividades e questões para desenvolvimento da aula, tomadas de decisões junto a gestão e colegas de trabalho."
            linkWebsite="https://recodepro.org.br/"
            technologies={[{ title: "React", link: "https://reactjs.org/" }, { title: "NodeJs", link: "https://nodejs.org/en/" }, { title: "React Native", link: "https://reactnative.dev/" }]}
          />
        </div>

        <div className={styles.skills}>
          <section className={styles.skillsBox}>
            <h3>Front-end</h3>

            <div className={styles.skillContent}>
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <SiNextdotjs />

                <span>NextJs</span>
              </a>
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <FaReact />

                <span>React</span>
              </a>

              <a
                href="https://sass-lang.com/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
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
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <FaNode />

                <span>NodeJs</span>
              </a>

              <a
                href="https://www.php.net/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <FaPhp />
                <span>Php</span>
              </a>
            </div>
          </section>

          <section className={styles.skillsBox}>
            <h3>Ferramentas</h3>

            <div className={styles.skillContent}>
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                <FaGit />
                <span>Git</span>
              </a>

              <a
                href="https://www.mysql.com/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
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

              <a
                href="https://insomnia.rest/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
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
