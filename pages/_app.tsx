import "../styles/globals.scss";
import "../styles/reset.scss";
import "animate.css";
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from "next/app";
import { DarkModeStorage } from "../context/DarkModeContext";
import Sidenav from "../components/Sidenav";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import{ init } from 'emailjs-com';
init("user_22xaQbtww7rTCYUpasb5c");

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#444444" />
        <meta name="author" content="Samuel Porto" />
        <meta
          name="description"
          content="This is a Portfolio to show my word to World."
        />
        <meta
          name="keywords"
          content="sites, web, desenvolvimento, portfolio, profile, contato, fullstack developer, front-end, back-end, fullstack developer"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:url"
          content="https://portfolio-nine-rose-40.vercel.app/"
        />
        <meta property="og:type" content="portfolio" />
        <meta property="og:title" content="Samuel Porto - Portfolio" />
        <meta
          property="og:description"
          content="This is a Portfolio to show my word to World."
        />
        <link rel="icon" type="icon" href="./favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />

        <title>Samuel Porto - Portfolio</title>
      </Head>

      <DarkModeStorage>
        <div className="container">
          <div className="animate__animated animate__fadeInLeft">
            <Sidenav />
          </div>

          <div className="content">
            <Component {...pageProps} />
          </div>
        </div>
      </DarkModeStorage>
    </>
  );
}

export default MyApp;
