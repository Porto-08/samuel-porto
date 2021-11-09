import { useEffect, useState } from "react";
import axios from "axios";
import CardProject from "../../components/Card";
import styles from "./styles.module.scss";
import loadingGif from "../../assets/img/loading.gif";
import { NextPage } from "next";
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
  const [projects, setProjects] = useState<Array<ProjectsData>>();
  const [projectsFilter, setProjectsFilter] = useState<Array<ProjectsData>>();
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);

  function getProjectsFilter() {
    const front = document.querySelector("#front");
    const back = document.querySelector("#back");
    const all = document.querySelector("#all");

    if (filter === "front") {
      const filtered = projectsJson.filter((project) => {
        return project.type === filter;
      });

      front?.classList.add("active");
      back?.classList.remove("active");
      all?.classList.remove("active");

      setProjectsFilter(filtered);
    }

    if (filter === "back") {
      const filtered = projectsJson.filter((project) => {
        return project.type === filter;
      });
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
    <div
      className={`${styles.container}  animate__animated animate__fadeInLeft`}
      id="containerProjects"
    >
      <ul className={styles.filterList}>
        <li>
          <h1>My Projects</h1>
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

      <section className={styles.projects}>
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
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("https://vast-coast-20781.herokuapp.com/");
//   const data: ProjectsData[] = await res.json();
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// };

export default Projects;
