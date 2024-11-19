import styles from '../styles/Home.module.css';

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2>Start Feeling Better Today</h2>
        <p>
          Don't wait - get the right medicine and the right time. Our shelves are
          stocked and ready to fulfil your needs so that you can start feeling
          better today!
        </p>
        <button className={styles.ctaButton}>Buy Now</button>
      </div>
    </section>
  );
}
