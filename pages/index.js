import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer";
import Hero from "../components/home/hero/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
