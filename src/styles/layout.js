import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Elbrit Health - Essential Vitamins & Healthcare Products',
  description: 'Your trusted source for medicines and healthcare products. Quality assured pharmacy products delivered to your doorstep.',
  keywords: 'pharmacy, healthcare, vitamins, medicines, India, online pharmacy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
