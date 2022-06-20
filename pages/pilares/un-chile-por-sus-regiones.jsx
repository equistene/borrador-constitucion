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
        <title>UN CHILE POR SUS REGIONES | Guía Práctica Borrador - Nueva Constitución</title>
        <meta name="description" content="Guía Práctica Borrador" />
        <link rel="icon" href="/favicon.ico" />
        <Metatags />
      </Head>

      <Hero />

      <section className="pilar">
        <div className="container">
          <h1>UN CHILE POR SUS REGIONES</h1>

          <p>La propuesta constitucional señala que Chile será un Estado Regional que deberá velar por la implementación de políticas públicas pertinentes a las necesidades territoriales, adecuadas a las diversas realidades locales.</p>

          <p>Se conserva el carácter único e indivisible del Estado de Chile, junto al reconocimiento de territorios especiales y la organización en regiones y comunas autónomas. Esta propuesta consagra que el poder político se distribuya a nivel territorial a través de instituciones y autoridades encargadas de los gobiernos comunales y regionales.</p>

          <p><strong>Chile es un Estado Regional.</strong> Manteniendo la integridad del país y territorio, el Estado estará compuesto por regiones que cuentan con instituciones políticas y administrativas autónomas —Gobiernos Regionales, Municipios, entre otros—, las que deberán relacionarse en un marco de cooperación, integración armónica, solidaridad y desarrollo justo.</p>

          <p><strong>Autonomía de las entidades territoriales.</strong> Las regiones, comunas y autonomías territoriales indígenas están dotadas de autonomía política, administrativa y financiera para la realización de sus fines e intereses, pero en ningún caso el ejercicio de dicha autonomía podrá atentar en contra del carácter único e indivisible del Estado de Chile.</p>

          <p><strong>Regiones Autónomas.</strong> Las regiones son unidades administrativas y políticas del territorio nacional. Cuentan con personalidad jurídica y autonomía para desarrollar los intereses regionales, gestionar sus recursos y demás atribuciones.</p>

          <p><strong>Comuna Autónoma.</strong> Es la entidad territorial base del Estado regional. Es autónoma para el cumplimiento de sus deberes, así como para promover y garantizar la participación ciudadana de la comunidad local en la gestión, la construcción de políticas de desarrollo y la planificación del territorio.</p>
          
          <p><strong>Autonomías territoriales indígenas.</strong> Serán entidades territoriales creadas por ley, con personalidad jurídica y patrimoniopropio, donde los pueblos y naciones indígenas ejercerán derechos de autonomía. Al igual que cualquier otra institución local, deben actuar en coordinación con el resto de las entidades regionales. Todo en el marco del carácter único e indivisible del Estado de Chile.</p>

          <p>El Estado deberá reconocer, promover y garantizar dicha autonomía, lo que no afecta ni cambia la unidad del Estado. Deeste modo, se respeta lo establecido en el Convenio 169 de la Organización Internacional del Trabajo (OIT) suscrito por Chile.</p>

          <p><strong>Ruralidad. </strong>El Estado reconocerá la ruralidad como una expresión territorial donde las formas de vida y producción sedesarrollan en torno a la relación directa de las personas y comunidades con la tierra, el agua y el mar. El Estado deberá promover el desarrollo integral de los territorios rurales.</p>
          
        </div>
      </section>

      <Nav />

      <Banner />

      <Footer />
    </div>
  );
}
