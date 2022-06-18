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
          <h1>UN CHILE CON IGUALDAD DE GÉNERO</h1>

          <p>Diversas normas que garantizan los derechos de las mujeres, niñas, jóvenes, diversidades y disidencias sexuales y de género se incorporaron al borrador de nueva Constitución. La inclusión de la paridad y perspectiva de género en el texto constitucional resulta crucial para garantizar la igualdad y no discriminación de las actuales y futuras generaciones.</p>

          <p>Destacan el derecho a una vida libre de violencia de género, perspectiva de género en la justicia, derechos sexuales y reproductivos, derecho a la identidad, principios de paridad y representación política paritaria e inclusiva.</p>

          <p>Democracia paritaria. Todos los órganos del Estado, empresas públicas y semipúblicas, así como los órganos autónomos, deberán tener una composición paritaria que asegure que al menos el 50% de sus integrantes sean mujeres. Derecho a una vida libre de violencia de género. El Estado tendrá la obligación de garantizar y promover el derecho delas mujeres, niñas, diversidades y disidencias sexuales a una vida libre de violencia. Para esto deberá realizar las acciones necesarias para erradicar todo tipo de violencia de género y brindar atención, protección y reparación integral a las víctimas.</p>

          <p>Todas las personas tendrán derecho a un espacio digital —como las redes sociales— libre de violencia. Se deberá dar especial protección a mujeres, niñas, niños, jóvenes y disidencias sexuales.</p>

          <p>Derecho a la identidad. Toda persona tendrá derecho a la identidad, en todas sus dimensiones y manifestaciones, incluyendo las características sexuales, expresiones de género, nombre y orientaciones sexoafectivas. El Estado deberá garantizar el pleno ejercicio de este derecho a través de acciones afirmativas, procedimientos y leyes correspondientes.</p>

          <p>Derechos sexuales y derechos reproductivos. Se garantizará el ejercicio de los derechos sexuales y reproductivos sin discriminación, con enfoque de género, inclusión y pertinencia cultural, así como el acceso a la información, educación, salud, y a los servicios y prestaciones requeridos para ello. Se asegurará a todas las mujeres y personas con capacidad de gestar, las condiciones para un embarazo, su interrupción voluntaria, parto y maternidad voluntarios y protegidos. También, reconoce que las personas puedan beneficiarse del progreso científico para ejercer estos derechos, siendo la ley la que regule su ejercicio.</p>

          <p>Justicia con enfoque de género. El Sistema de Justicia deberá adoptar medidas para prevenir, sancionar y erradicar la violencia contra las mujeres, disidencias y diversidades sexuales. </p>

          <p>Los tribunales, cualquiera sea su competencia, deben resolver con enfoque de género. Se deberá asegurar la formación y capacitación constante a todas las funcionarias, funcionarios y auxiliares para eliminar estereotipos de género e incorporar dicha perspectiva en el sistema judicial.</p>
        </div>
      </section>

      <Nav />

      <Banner />

      <Footer />
    </div>
  );
}
