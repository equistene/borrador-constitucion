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
          <h1>UN CHILE CON MÁS DEMOCRACIA</h1>

          <p>La democracia es un tipo de gobierno en que la soberanía reside en el pueblo, por y para el pueblo. Se materializa por medio de mecanismos de representación política y participación ciudadana.</p>

          <p>La propuesta de nueva Constitución consagra principios como la transparencia, la igualdad, libertad de pensamiento y de expresión; el respeto a las diversidades, los acuerdos de las mayorías y la garantía del derecho al voto libre, igualitario,secreto, universal e informado.</p>
          
          <p>Destacamos los artículos sobre sistema político, la elección de representantes de la ciudadanía y la distribución territorial del poder. En especial, los mecanismos de democracia directa y la participación en la toma de decisiones, una de las diferencias más profundas con la Constitución vigente.</p>

          <p><strong>Democracia.</strong> En Chile, la democracia es inclusiva y paritaria. Se ejerce en forma directa, participativa, comunitaria y representativa.</p>

          <p><strong>Soberanía.</strong> La soberanía reside en el pueblo de Chile, que a su vez está conformado por diversas naciones. Se ejercerá democráticamente, de manera directa y mediante representantes.</p>
          
          <p><strong>Ciudadanía.</strong> Todas las personas que tengan la nacionalidad chilena serán ciudadanas y ciudadanos de Chile. Asimismo, lo serán aquellas personas extranjeras avecindadas en el país por, al menos, cinco años.</p>
          
          <p>El sufragio será personal, igualitario, secreto y obligatorio para todas las personas mayores de 18 años. Además, será voluntario para chilenas y chilenos que vivan en el extranjero, y para jóvenes de 16 y 17 años.</p>

          <p><strong>Democracia Participativa.</strong> La ciudadanía tiene el derecho a participar de manera incidente o vinculante —según corresponda— en los asuntos de interés público y en la toma de decisiones que le afecten. El Estado deberá dar adecuada publicidad a los mecanismos de democracia, y asegurar la participación y deliberación ciudadana en la gestión de asuntos públicos.</p>
          
          <p><strong>Iniciativa popular de ley.</strong> Es una de las innovaciones en materia de participación directa. Consiste en que la ciudadanía podrá organizarse para proponer al Congreso un proyecto de ley.</p>

          <p>¿Cómo? Un grupo de ciudadanos equivalente al 3% de los habilitados para votar, podrá presentar una iniciativa popular de ley para su tramitación legislativa.</p>

          <p>Las propuestas no podrán tener relación con tributos, presupuesto del Estado, ni ser contrarias a los derechos fundamentales.</p>

          <p><strong>Participación en las entidades territoriales.</strong> Las entidades territoriales —como los gobiernos regionales y municipios— también deberán garantizar que sus habitantes puedan participar de las decisiones públicas. En el caso de pueblos y naciones indígenas, deberán ser consultados y otorgar el consentimiento respecto de las decisiones que afecten sus derechos territoriales.</p>
        </div>
      </section>

      <Nav />

      <Banner />

      <Footer />
    </div>
  );
}
