import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/home/hero/Hero";
import Intro from "../components/home/intro/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ARK Trust</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Intro />
      </main>
      <Footer />
    </div>
  );
}
