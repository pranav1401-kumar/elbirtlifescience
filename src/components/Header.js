import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.container} ${styles.navWrapper}`}>
        <div className={styles.logo}>
          <img src="/assets/logo.png" alt="Elbrit Logo" />
        </div>
        <ul className={styles.navMenu}>
          <li>Our products</li>
          <li>New Arrivals</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}