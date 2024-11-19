import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <img src="/assets/logo.png" alt="Elbrit Logo" />
            <p>
              Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
            </p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Community</h3>
            <ul>
              <li>Help Center</li>
              <li>Publishers</li>
              <li>Affiliates</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>About Us</h3>
            <ul>
              <li>Contact Us</li>
              <li>How It Works</li>
              <li>Create</li>
              <li>Explore</li>
              <li>Terms & Services</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Get in Touch</h3>
            <p>Phone Number: +974 3118 1843</p>
            <p>Email: Elbrithcqhr@gmail.com</p>
          </div>
        </div>
        <div className={styles.copyrightSection}>
          <p>&copy; 2024 Elbrit Life Sciences Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}