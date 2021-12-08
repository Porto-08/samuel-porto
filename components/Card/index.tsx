import styles from "./styles.module.scss";
import Image from "next/image";

interface cardProjectInterface {
  key: number;
  link: string;
  imgPath: string;
  name: string;
  tecnologies: string[];
  description: string;
}

const CardProject = ({
  link,
  imgPath,
  name,
  tecnologies,
  description,
}: cardProjectInterface) => {
  return (
    <div className={`${styles.container} fadeInTop`}>
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={imgPath} loading="lazy" alt="Project Card" title={name} />
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
        {link === "#" ? null : (
          <a href={link} target="_blank" rel="noreferrer">
            See Project
          </a>
        )}
      </div>
    </div>
  );
};

export default CardProject;
