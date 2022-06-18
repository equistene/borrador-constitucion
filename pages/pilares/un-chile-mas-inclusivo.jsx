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
          <h1>UN CHILE INCLUSIVO</h1>

          <p>La nueva propuesta reconoce que Chile es un único país, indivisible y al que pertenecemos todas y todos. Establece como principios básicos la igualdad sustantiva y no discriminación, la inclusión social y la integración.</p>

          <p>La Constitución también es un mecanismo para reducir las desigualdades, en particular a grupos históricamente excluidos y de especial protección. En este pilar destacan las propuestas que reconocen los derechos de las personas mayores, las personas con discapacidad, las niñas, niños y adolescentes, y los pueblos y naciones indígenas.</p>
        
          <p>Derechos de las personas mayores. Las personas tienen derecho a envejecer con dignidad, libres de maltrato, y a contar con prestaciones de seguridad social para una vejez digna. Además, reconoce su participación política y social, y el derecho de accesibilidad al entorno físico, económico, cultural y digital.</p>

          <p>Derechos de las personas con discapacidad. Se reconoce que las personas con discapacidad tienen derecho a la accesibilidad universal, la inclusión social, su inserción laboral, y participación política, económica, social y cultural.</p>

          <p>Se deberán ejecutar políticas públicas que apunten a atender las necesidades de las personas con discapacidad. Entre ellas se considera la educación, la vivienda, la salud y el cuidado.</p>

          <p>Deben realizarse con la participación de personas con discapacidad y de organizaciones que las representen.</p>

          <p>Por otro lado, para facilitar y garantizar su comunicación y participación en sociedad, se reconoce el derecho a expresarse y comunicarse a través de sus lenguas y el acceso a mecanismos, medios y formas alternativas de comunicación, como el sistema braille y lengua de señas.</p>

          <p>Derechos de niñas, niños y adolescentes. Se reconoce su derecho a vivir en condiciones familiares y ambientales que permitan su pleno desarrollo. Estará consagrado el derecho a ser escuchados y protegidos contra toda forma de violencia, maltrato, abuso, explotación, acoso y negligencia. Se otorga máxima prioridad por parte del Estado a la erradicación de la violencia contra la niñez.</p>

          <p>La ley establecerá un sistema de protección integral que proteja los derechos de niñas, niños y adolescentes, de tal forma que se asegure la prevención de la violencia. A su vez, la Defensoría de los Derechos de la Niñez será un organismo autónomo con foco en difusión, promoción y protección de sus derechos, velando siempre por su interés superior y su autonomía progresiva.</p>

          <p>Chile es un Estado plurinacional e intercultural. Se reconoce la coexistencia de diversas naciones y pueblos en el marco de la unidad e indivisibilidad del Estado. Todas las identidades y culturas son respetadas, regidas bajo la misma Constitución y los poderes del Estado establecidos en ella.</p>

          <p>La propuesta de nueva Constitución reconoce como pueblos y naciones indígenas a los Mapuche, Aymara, Rapa Nui,Lickanantay, Quechua, Colla, Diaguita, Chango, Kawashkar, Yaghan, Selk`nam y otros que puedan ser reconocidos en la forma que establezca la ley.</p>

          <p>Emblemas nacionales. Son símbolos que nos identifican como país. Son emblemas nacionales de Chile la bandera, el escudo y el himno nacional. Además, el Estado reconocerá los símbolos y emblemas de los distintos pueblos indígenas.</p>
        </div>
      </section>

      <Nav />

      <Banner />

      <Footer />
    </div>
  );
}
