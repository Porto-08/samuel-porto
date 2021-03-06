import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import profile from "../assets/img/eu.jpeg";
import styles from "./styles.module.scss";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import DownloadCv from "../components/DownloadCv";
import Typist from 'react-text-typist';
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}  fadeInTop`}>
      <Image
        src={profile}
        height={300}
        width={300}
        alt="Samuel Porto - Perfil"
        title="Samuel Porto - Perfil"
        objectFit="cover"
        priority={true}
        draggable={false}
        loading="eager"
      />

      <div className={styles.description}>
        <h1 title="Me!">
          <Typist sentences={["Samuel Porto", "Dev. Fullstack"]} cursorSmooth />
        </h1>

        <p>
          Sou um Desenvolvedor FullStack que ama resolver problemas e passar
          meus conhecimentos para outras pessoas.
        </p>

        <div>
          <a
            href="https://github.com/Porto-08"
            target="_blank"
            title="Visitar github"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/porto__0/"
            target="_blank"
            title="Visitar instagram"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/samuelporto/"
            target="_blank"
            title="Visitar linkedin"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511980540272"
            target="_blank"
            title="Enviar uma mensagem por WhatsApp"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

        <section className={styles.buttons}>
          <DownloadCv />

          <Link href="/contact">
            Contato
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
