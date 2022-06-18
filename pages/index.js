import Head from "next/head";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Articulo from "./components/Articulo";
import Banner from "./components/Banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guía Práctica Borrador - Nueva Constitución - Junio 2022</title>
        <meta name="description" content="Guía Práctica Borrador" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Intro />

      <Nav />

      <Articulo />

      <Banner />

      <Footer />
    </div>
  );
}
