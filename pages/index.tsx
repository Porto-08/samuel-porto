import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import profile from "../assets/img/eu.jpeg";
import styles from "./styles.module.scss";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}  animate__animated animate__fadeIn`}>
      <Image
        src={profile}
        height={350}
        width={350}
        alt="profile picture"
        title="Profile picture"
        priority
      />

      <div className={styles.description}>
        <h2 title="Me!">Samuel Porto</h2>

        <p>
          Sou um Desenvolvedor FullStack que ama resolver problemas e passar
          meus conhecimentos para outras pessoas. 
        </p>

        <div>
          <a
            href="https://github.com/Porto-08"
            target="_blank"
            title="My github"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/porto__0/"
            target="_blank"
            title="My instagram"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/samuelporto/"
            target="_blank"
            title="My linkedin"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511980540272"
            target="_blank"
            title="My WhatsApp"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
