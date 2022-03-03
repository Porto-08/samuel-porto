import React from "react";
import styles from "./styles.module.scss";



interface ITecnologies {
  title: string;
  link: string;
}

interface IExperiencesProps {
  title: string;
  date: string;
  description: string;
  linkWebsite: string;
  technologies: ITecnologies[];
}

const Experiences = ({
  title,
  technologies,
  date,
  description,
  linkWebsite,
}: IExperiencesProps) => {

  return (
    <div className={styles.experienceBox}>
      <header>
        <h4>{title}</h4>
        <span>{date}</span>
      </header>

      <p>{description}</p>

      <ul>
        <li>
          <a
            href={linkWebsite}
            target="_blank"
            rel="noreferrer"
            title="Visitar Website"
          >
            Website
          </a>
        </li>

        <span>|</span>

        {technologies.map((technology) => {
          return (
            <li key={technology.title}>
              <a
                href={technology.link}
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                {technology.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experiences;
