import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <Image
              src="/assets/feature-1.png"
              alt="Feature 1"
              width={100}
              height={100}
              loading="lazy"
            />
            <h3>Feel better or your money back</h3>
            <p>
              With our commitment to providing safe and effective medical and
              healthcare products, you can rest assured when you buy from Eve
              Pharmacy. A full 60 days money back guarantee, no questions asked.
            </p>
          </div>
          <div className={styles.featureItem}>
            <Image
              src="/assets/feature-2.png"
              alt="Feature 2"
              width={100}
              height={100}
              loading="lazy"
            />
            <h3>Better Ingredients</h3>
            <p>
              Only the best when you choose products offered on our platform -
              high-quality ingredients for high quality products!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
