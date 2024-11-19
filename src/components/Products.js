import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function ProductsSection() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Products</h2>
        <div className={styles.productGrid}>
          <div className={styles.productItem}>
            <Image
              src="/assets/product-3.png.png"
              alt="Product 1"
              width={200}
              height={200}
              loading="lazy"
            />
            <h3>Voluptas assumenda est</h3>
            <span className={styles.discountBadge}>-27%</span>
            <p>$19.99</p>
            <button className={styles.productButton}>Add to Cart</button>
          </div>
          <div className={styles.productItem}>
            <Image
              src="/assets/product-6-400x400.png.png"
              alt="Product 2"
              width={200}
              height={200}
              loading="lazy"
            />
            <h3>Pamol Film Coated Tablet</h3>
            <span className={styles.discountBadge}>-6%</span>
            <p>$12.99</p>
            <button className={styles.productButton}>Add to Cart</button>
          </div>
          <div className={styles.productItem}>
            <Image
              src="/assets/product-8-400x400.png.png"
              alt="Product 3"
              width={200}
              height={200}
              loading="lazy"
            />
            <h3>Maca Root Capsules</h3>
            <span className={styles.discountBadge}>-16%</span>
            <p>$24.99</p>
            <button className={styles.productButton}>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
