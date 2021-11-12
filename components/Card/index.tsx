import styles from "./styles.module.scss";
import Image from "next/image"

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
    <div
      className={`${styles.container} animate__animated animate__fadeIn`}
    >
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          <Image width={500} height={350} layout="responsive" src={imgPath} loading="lazy" alt="Project" />
        </a>
      </div>

      <div className={styles.informations} >
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.tecnologies}>
          {tecnologies.map((tecnologie, index) => {
            return <span key={index}>{tecnologie}</span>;
          })}
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          See Project
        </a>
      </div>
    </div>
  );
};

export default CardProject;
