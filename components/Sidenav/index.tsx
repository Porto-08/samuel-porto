import Link from "next/link";
import styles from "./styles.module.scss";
import { useDarkMode } from "../../context/DarkModeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Sidenav = () => {
  const { dark, setDarkState } = useDarkMode();

  return (
    <aside className={styles.nav}>
      <button
        type="button"
        className={styles.changeMode}
        onClick={setDarkState}
      >
        {dark === true ? (
          <i role="button">
            <FaSun
              role="button"
              aria-label="Turn on Dark Mode"
              title="Trocar para Light Mode"
              />
          </i>
        ) : (
          <i role="button">
            <FaMoon
              role="button"
              aria-label="Turn on Light Mode"
              title="Trocar para Dark Mode"
            />
          </i>
        )}
      </button>

      <nav className={styles.navContainer}>
        <h2>Dev.</h2>

        <ul>
          <li title="Home">
            <Link href="/" aria-label="Home">
              Home
            </Link>
          </li>
          <li title="Sobre">
            <Link href="about" aria-label="About Me">
              Sobre
            </Link>
          </li>
          <li title="Projetos">
            <Link href="projects" aria-label="My Projects">
              Projetos
            </Link>
          </li>
          <li title="Contato">
            <Link href="contact" aria-label="Contact Me">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidenav;
