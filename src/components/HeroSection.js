import styles from '../styles/Home.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Supercharge Your Health</h1>
        <p>
          Adjacent to the Elbrit Health Center, Eve's Pharmacy brings you the best
          in medicines and healthcare products at an accessible location - with a
          wide range of choices including products made right here in India!
        </p>
        <button className={styles.heroButton}>Shop Now</button>
      </div>
    </section>
  );
}