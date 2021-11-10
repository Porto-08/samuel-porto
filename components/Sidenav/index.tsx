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
          <i>
            <FaMoon />
          </i>
        ) : (
          <i>
            <FaSun />
          </i>
        )}
      </button>

      <nav className={styles.navContainer}>
        <h2>Dev.</h2>

        <ul>
          <li>
            <Link href="/" aria-label="Home">
              Home
            </Link>
          </li>
          <li>
            <Link href="about" aria-label="About Me">
              About
            </Link>
          </li>
          <li>
            <Link href="projects" aria-label="My Projects">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidenav;
