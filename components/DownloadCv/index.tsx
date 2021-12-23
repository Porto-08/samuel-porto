import styles from "./styles.module.scss"

const DownloadCv = () => {
  return (
    <a href="./Curriculo.pdf" download className={styles.btnDownloadCv}>
      Baixar CV
    </a>
  );
};

export default DownloadCv;
