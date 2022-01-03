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
  tecnologies: string[];
  description: string;
}

const Projects: NextPage = () => {
  const [projectsFilter, setProjectsFilter] = useState<Array<ProjectsData>>();
  const [filter, setFilter] = useState<string>("");

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
  }

  useEffect(() => {
    getProjectsFilter();
  }, [filter]);

  return (
    <>
      <Head>
          <title>Samuel Porto - Meus Projetos</title>
      </Head>
      
      <div
        className={`${styles.container} fadeInTop`}
        id="containerProjects"
      >
        <ul className={styles.filterList}>
          <li>
            <h1>Meus Projetos</h1>
          </li>
          <li onClick={() => setFilter("")} id="all">
            All
          </li>
          <li onClick={() => setFilter("front")} id="front">
            Front-End
          </li>
          <li onClick={() => setFilter("back")} id="back">
            Back-end
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
                    tecnologies={project.tecnologies}
                    description={project.description}
                  />
                );
              })}
        </section>
      </div>
    </>
  );
};

export default Projects;
