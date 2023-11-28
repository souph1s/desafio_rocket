import styles from "./Header.module.css";

import rocket from "../../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Rocket" />
      <strong className={styles.strong}>to</strong>
      <strong className={styles.strongPurple}>do</strong>
    </header>
  );
}
