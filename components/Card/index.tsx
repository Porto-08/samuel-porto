import styles from "./styles.module.scss";

interface cardProjectInterface {
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
      className={`${styles.container} animate__animated animate__fadeIn animate__slow`}
    >
      <div>
        <a href={link} target="_blank">
          <img src={imgPath} alt="Project" />
        </a>
      </div>

      <div className={styles.informations}>
        <h3>{name}</h3>
        <p>
          {description}
        </p>
        <div className={styles.tecnologies}>
          {tecnologies.map((tecnologie) => {
            return <span>{tecnologie}</span>;
          })}
        </div>
        <a href={link} target="_blank">
          See Project
        </a>
      </div>
    </div>
  );
};

export default CardProject;
