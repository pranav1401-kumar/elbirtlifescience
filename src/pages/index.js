import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Blog from '../components/Blog';
import Products from '../components/Products';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Elbrit Pharmacy</title>
      </Head>
      <Header />
      <HeroSection />
      <Features />
      <Blog />
      <Products />
      <CTASection />
      <Footer />
    </div>
  );
}
