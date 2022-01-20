import React from "react";
import styles from "./styles.module.scss";

interface IExperiencesProps {
  title: string;
  date: string;
  description: string;
  linkWebsite: string;
  technologies: string[];
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
            <li key={technology}>
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                title="Conhecer Tecnologia"
              >
                {technology}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experiences;
