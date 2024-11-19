import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function BlogSection() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Blog</h2>
        <div className={styles.blogGrid}>
          <div className={styles.blogItem}>
            <Image
              src="/assets/blog1-450x580.jpg.png"
              alt="Blog 1"
              width={450}
              height={320}
              loading="lazy"
            />
            <h3>The Covid-19 Epidemic In 2022 Is Back</h3>
            <p>20 Apr</p>
          </div>
          <div className={styles.blogItem}>
            <Image
              src="/assets/blog2-450x580.jpg.png"
              alt="Blog 2"
              width={450}
              height={320}
              loading="lazy"
            />
            <h3>The Covid-19 Epidemic In 2023 Is Back</h3>
            <p>20 Apr</p>
          </div>
          <div className={styles.blogItem}>
            <Image
              src="/assets/blog3-450x580.jpg.png"
              alt="Blog 3"
              width={450}
              height={320}
              loading="lazy"
            />
            <h3>Tellus pharetra lacus ligula fusce cum eu potenti</h3>
            <p>17 Mar</p>
          </div>
          <div className={styles.blogItem}>
            <Image
              src="/assets/blog2-450x580.jpg.png"
              alt="Blog 4"
              width={450}
              height={320}
              loading="lazy"
            />
            <h3>Hac hendrerit mus nons semper suspendisse</h3>
            <p>17 Mar</p>
          </div>
        </div>
      </div>
    </section>
  );
}