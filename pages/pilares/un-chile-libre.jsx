import Head from "next/head";
import Metatags from "../components/Metatags";
import Hero from "./../components/Hero";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import Banner from "./../components/Banner";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guía Práctica Borrador - Nueva Constitución - Junio 2022</title>
        <meta name="description" content="Guía Práctica Borrador" />
        <link rel="icon" href="/favicon.ico" />
        <Metatags />
      </Head>

      <Hero />

      <section className="pilar">
        <div className="container">
          <h1>UN CHILE LIBRE</h1>

          <p>Nuestra convivencia democrática se sustenta en el respeto a las libertades individuales y colectivas. El proyecto consagra la libertad de religión, pensamiento, expresión, enseñanza, y la libertad de emprender y de desarrollar actividades económicas, entre otras.</p>

          <p>Libertad de religión. Chile es un Estado laico, es decir, no tiene religión o creencia oficial; sino que respeta y garantiza la libertad de religión y de creencias espirituales de todas las personas.</p>

          <p>Libertad de pensamiento. Se consagra el derecho a la libertad de pensamiento, conciencia, religión y cosmovisión. Este derecho incluye la libertad de profesar y cambiar de religión o creencias y de ejercerlas en espacios públicos y privados.</p>

          <p>Se podrán constituir templos, dependencias y lugares para el culto; mantener, proteger y acceder a los lugares sagrados y aquellos de relevancia espiritual; así como rescatar y preservar los objetos de culto o que tengan un significado sagrado.</p>

          <p>Libertad de expresión. Se garantiza el derecho a la libertad de expresión y opinión en cualquier forma y por cualquier medio. Este derecho comprende la libertad de buscar, recibir y difundir informaciones e ideas de toda índole.</p>
          
          <p>Libertad de prensa. El Estado debe respetar la libertad de prensa, promover el pluralismo de los medios de comunicación y la diversidad de información. Se prohíbe la censura previa.</p>

          <p>Libertad de enseñanza. Se garantizará la libertad de enseñanza y el deber del Estado de respetarla. Esto incluye la libertad de las apoderadas y apoderados a elegir el tipo de educación de las personas a su cargo, respetando el interés superior y la autonomía progresiva de niñas, niños y adolescentes. Asimismo, las y los profesores serán titulares de la libertad de cátedra, mientras lo hagan en el marco de los fines y principios de la educación.</p>

          <p>Libertad de emprender y de desarrollar actividades económicas. La ley deberá regular la aplicación de este derecho y promover el desarrollo de las pymes (pequeñas y medianas empresas) y la protección de los consumidores. Las prácticas de colusión se declaran contrarias al interés social y la ley deberá establecer las sanciones respectivas.</p>
        </div>
      </section>

      <Nav />

      <Banner />

      <Footer />
    </div>
  );
}
