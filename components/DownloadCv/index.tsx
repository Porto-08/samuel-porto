import styles from "./styles.module.scss"

const DownloadCv = () => {
  return (
    <a href="./Curriculo.pdf" download className={styles.btnDownloadCv} title="Baixar Currículo">
      Baixar CV
    </a>
  );
};

export default DownloadCv;
