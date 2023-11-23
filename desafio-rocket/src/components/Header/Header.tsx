import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <strong className={styles.strong}>to</strong>
      <strong className={styles.strongPurple}>do</strong>
    </header>
  );
}
