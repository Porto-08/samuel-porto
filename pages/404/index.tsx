import React, { useContext } from "react";
import Link from "next/link";
import { DarkModeContext } from "../../context/DarkModeContext";
import NotFoundDark from "../../assets/svg/notFoundDark.svg";
import NotFoundLight from "../../assets/svg/notFoundLight.svg";
import Image from "next/image";
import styles from "./styles.module.scss";

const NotFound = () => {
  const { dark } = useContext(DarkModeContext);
  return (
    <div className={`${styles.container} fadeInTop`}>
      <div className={styles.imageContainer}>
        {dark ? (
          <Image src={NotFoundDark} layout="responsive" alt="404 - Page not found" />
        ) : (
          <Image src={NotFoundLight} layout="responsive" alt="404 - Page not found" />
        )}
      </div>

      <div>
        <h1>Você foi muito longe! Aqui não há nada.</h1>
        <span>
          Mas não se preoucupe, é só voltar pra <Link href="/">Home</Link>.
        </span>
      </div>
    </div>
  );
};

export default NotFound;
