import { ReactNode } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

type LayoutProps = {
  children: ReactNode;
};

export const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <div>
      <Head>
        <title>AVD Turbo</title>
        <meta name="description" content="AVD Turbo official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>AVD Turbo</h1>
        <nav>
          <ul>
            <li><Link href="/">Acasa</Link></li>
            <li><Link href="/prices">Lista Preturi</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/utils">Utile</Link></li>
            <li><Link href="/equipment">Echipamente</Link></li>
            <li><Link href="/assembly">Montaj</Link></li>
            <li><Link href="/dpf">Curatare DPF</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 AVD Turbo. All rights reserved.</p>
      </footer>
    </div>
  );
};
