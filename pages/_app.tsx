import "../styles/globals.scss";
import "../styles/reset.scss";
import type { AppProps } from "next/app";
import { DarkModeStorage } from "../context/DarkModeContext";
import Sidenav from "../components/Sidenav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeStorage>
      <div className="container">
        <Sidenav />

        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </DarkModeStorage>
  );
}

export default MyApp;
