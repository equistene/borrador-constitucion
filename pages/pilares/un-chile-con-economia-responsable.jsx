import Head from "next/head";
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
      </Head>

      <Hero />

      <section className="pilar">
        <div className="container">
          <h1>UN CHILE CON ECONOMÍA RESPONSABLE</h1>

          <p>La propuesta de nueva Constitución establece principios, objetivos y regulaciones bajo los cuales el Estado participará de la economía del país. Asimismo, aborda aspectos de la recaudación fiscal.</p>

          <p>En el texto se consagran principios como: responsabilidad fiscal, equidad territorial y el desarrollo armónico con la naturaleza. El Estado asumirá un rol más activo, además de regular, fiscalizar, fomentar y desarrollar actividades económicas.</p>

          <p>En este pilar también se define el rol del Banco Central y los derechos de los consumidores.</p>

          <p>Banco Central. Órgano autónomo de carácter técnico, encargado de formular y conducir la política monetaria. Lecorresponderá contribuir al bienestar de la población, velar por la estabilidad de los precios y el normal funcionamiento de los pagos internos y externos. Para ello, deberá considerar la estabilidad financiera, la volatilidad cambiaria, la protección del empleo, el cuidado del medioambiente y patrimonio natural.</p>

          <p>Sostenibilidad y responsabilidad fiscal. Las finanzas del Estado deben ser conducidas de forma que sean sostenibles en el tiempo y en base al principio de responsabilidad. Esto aplica para todas las instituciones estatales.</p>

          <p>Empresas públicas municipales. Las comunas, por medio de sus municipios, con autorización de una ley, podrán crear empresas o participar en ellas, sean públicas o privadas, con la finalidad de cumplir su función de proveer a la ciudadanía una buena calidad de vida por medio de bienes y servicios indispensables.</p>

          <p>Solidaridad interterritorial. El Estado y las entidades territoriales —regiones, comunas, territorios especiales y territorios indígenas— deben contribuir a la corrección de las desigualdades que existan entre ellas. Para esto, la ley deberá definir fondos para compensar a las entidades territoriales con menor recaudación fiscal.</p>

          <p>Agricultura campesina e indígena. El Estado reconoce y apoya la agricultura campesina e indígena, la recolección y la pesca artesanal, como actividades fundamentales de la producción de alimentos.</p>

          <p>Estatuto constitucional de los minerales. El Estado tendrá el dominio absoluto, exclusivo, inalienable e imprescriptible de las minas, independiente de la propiedad sobre los terrenos en que se encuentren situadas. La exploración, explotación y aprovechamiento de estas sustancias se sujetará a una regulación que considere su carácter finito, no renovable, de interés público intergeneracional y la protección ambiental.</p>

          <p>Potenciar mercados locales. El Estado fomentará los mercados locales, ferias libres y circuitos cortos de comercialización e intercambio de bienes y productos relacionados a la ruralidad.</p>

          <p>Abusos del mercado. El Estado deberá prevenir y sancionar los abusos en los mercados.</p>

          <p>Se entenderán como conductas contrarias al interés social las prácticas de colusión entre empresas y abusos de posición monopólica, así como las concentraciones empresariales que afecten el funcionamiento eficiente, justo y leal de los mercados.</p>

          <p>Derechos de los consumidores. El Estado protegerá los derechos a la libre elección, a la información veraz, a la no discriminación, a la seguridad, a la protección de la salud y el medio ambiente, a la reparación e indemnización adecuada y a la educación para el consumo responsable.</p>
          
        </div>
      </section>

      <Nav />

      <Banner />

      <Footer />
    </div>
  );
}
