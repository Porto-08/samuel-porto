import styles from "./styles.module.scss";
import Image from "next/image";
import {FiGithub} from "react-icons/fi";
import {IoIosRocket} from "react-icons/io"; 
interface cardProjectInterface {
  key: number;
  link: string;
  imgPath: string;
  name: string;
  tecnologies: string[];
  description: string;
  linkGit: string;
}

const CardProject = ({
  link,
  imgPath,
  name,
  tecnologies,
  description,
  linkGit,
}: cardProjectInterface) => {
  return (
    <div className={`${styles.container} fadeInTop`}>
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={imgPath} alt="Project Card" title={name} />
        </a>
      </div>

      <div className={styles.informations}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.tecnologies}>
          {tecnologies.map((tecnologie, index) => {
            return <span key={index}>{tecnologie}</span>;
          })}
        </div>

        <div className={styles.links}>
          {link === "#" ? null : (
            <a href={link} target="_blank" rel="noreferrer">
              <IoIosRocket /> Website
            </a>
          )}

          {linkGit === "#" ? null : (
            <a href={linkGit} target="_blank" rel="noreferrer">
              <FiGithub /> Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
