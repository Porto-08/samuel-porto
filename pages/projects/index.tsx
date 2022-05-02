import { useEffect, useState } from "react";
import CardProject from "../../components/Card";
import styles from "./styles.module.scss";
import { NextPage } from "next";
import Head from "next/head";
import projectsJson from "../../assets/projects.json";

interface ProjectsData {
  id: number;
  name: string;
  pathPhoto: string;
  type: string;
  link: string;
  linkGit: string;
  tecnologies: string[];
  description: string;
}

const Projects: NextPage = () => {
  const [projectsFilter, setProjectsFilter] = useState<Array<ProjectsData>>();
  const [filter, setFilter] = useState<string>("");
  const allProjectsNumber = projectsJson.length;
  const frontEndProjectsNumber = projectsJson.filter((project) => project.type === "front").length
  const backEndProjectsNumber = projectsJson.filter((project) => project.type === "back").length

  const getProjectsFilter = () => {
    const front = document.querySelector("#front");
    const back = document.querySelector("#back");
    const all = document.querySelector("#all");

    if (filter === "front") {
      const filtered = projectsJson.filter(
        (project) => project.type === filter
      );

      front?.classList.add("active");
      back?.classList.remove("active");
      all?.classList.remove("active");

      setProjectsFilter(filtered);
    }

    if (filter === "back") {
      const filtered = projectsJson.filter(
        (project) => project.type === filter
      );

      back?.classList.add("active");
      front?.classList.remove("active");
      all?.classList.remove("active");

      setProjectsFilter(filtered);
    }

    if (filter === "") {
      front?.classList.remove("active");
      back?.classList.remove("active");
      all?.classList.add("active");

      setProjectsFilter(undefined);
    }
  };

  useEffect(() => {
    getProjectsFilter();
  }, [filter]);

  return (
    <>
      <Head>
        <title>Samuel Porto - Meus Projetos</title>
      </Head>

      <div className={`${styles.container} fadeInTop`} id="containerProjects">
        <div>
          <h1>Meus Projetos</h1>
          <span>Conheça meu trabalho e projetos!</span>
        </div>
        
        <ul className={styles.filterList}>
          <li onClick={() => setFilter("")} id="all">
            Todos ({allProjectsNumber})
          </li>
          <li onClick={() => setFilter("front")} id="front">
            Front-End ({frontEndProjectsNumber})
          </li>
          <li onClick={() => setFilter("back")} id="back">
            Back-End  ({backEndProjectsNumber})
          </li>
        </ul>

        <section className={`${styles.projects}`}>
          {!projectsFilter
            ? projectsJson.map((project: ProjectsData) => {
              return (
                <CardProject
                  key={project.id}
                  name={project.name}
                  imgPath={project.pathPhoto}
                  link={project.link}
                  linkGit={project.linkGit}
                  tecnologies={project.tecnologies}
                  description={project.description}
                />
              );
            })
            : projectsFilter.map((project: ProjectsData) => {
              return (
                <CardProject
                  key={project.id}
                  name={project.name}
                  imgPath={project.pathPhoto}
                  link={project.link}
                  linkGit={project.linkGit}
                  tecnologies={project.tecnologies}
                  description={project.description}
                />
              )
            })}
        </section>

        <div className={styles.footer}>
          <span>Chegou ao fim :(</span>

          <p>Sempre estou desenvolvendo novas aplicações, então fica de olho em!</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
