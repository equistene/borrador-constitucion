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
        <title>UN CHILE CON TRADICIÓN INSTITUCIONAL | Guía Práctica Borrador - Nueva Constitución</title>
        <meta name="description" content="Guía Práctica Borrador" />
        <link rel="icon" href="/favicon.ico" />
        <Metatags />
      </Head>

      <Hero />

      <section className="pilar">
        <div className="container">
          <h1>UN CHILE CON TRADICIÓN INSTITUCIONAL</h1>

          <p>La propuesta de nueva Constitución establece que el Poder Ejecutivo estará en manos de la Presidenta o Presidente de la República y el Poder Legislativo estará conformado por el Congreso de Diputadas y Diputados y la nueva Cámara de las Regiones. Adicionalmente, se contemplan las entidades territoriales, los Sistemas de Justicia y los órganos autónomos constitucionales, entre otras importantes instituciones.</p>

          <p><strong>Poder Legislativo.</strong> Compuesto por dos cámaras paritarias y plurinacionales:</p>

          <p>El Congreso de Diputadas y Diputados: su principal función es debatir y representar al pueblo en el proceso de creación de leyes. Estará conformado, al menos, por 155 personas electas democráticamente.</p>

          <p>La Cámara de las Regiones: compuesta por un número de integrantes que deberá ser determinado por ley. Todas las regiones contarán con la misma cantidad de representantes —mínimo 3— electos democráticamente.</p>

          <p><strong>Poder Ejecutivo.</strong> La Presidenta o Presidente de la República será el jefe de gobierno y de Estado, es decir, conducirá la política interna del país y será el representante de Chile en instancias internacionales. Durará 4 años en el cargo con posibilidad de reelección inmediata o posterior, solo una vez. (Esta regla no aplicará para el actual Presidente Gabriel Boric Font, quien no podrá ser reelegido de forma inmediata).</p>

          <p>Sistemas de Justicia. Encargados de la resolución de conflictos, estará integrado por los Tribunales de Instancia (civiles, penales, de ejecución de penas, de familia, laborales, etc.), las Cortes de Apelaciones y la Corte Suprema. El Consejo de la Justicia, estará encargado del nombramiento, el gobierno, la gestión, la formación y la disciplina de los jueces.</p>

          <p>El Estado reconocerá los sistemas jurídicos de los pueblos indígenas, los que en virtud de su derecho a la libre determinación coexistirán coordinados en un plano de igualdad con el Sistema Nacional de Justicia. La Corte Suprema conocerá y resolverá de las impugnaciones de sus decisiones, para velarporque se respeten los derechos fundamentales que establece la Constitución y los tratados e instrumentos internacionales sobre derechos humanos de los que Chile es parte, y mantener la unidad y uniformidad estando sujetos al mismo estatuto jurídico y los mismos principios.</p>

          <p><strong>Policías.</strong> Serán instituciones no militares, de carácter centralizado y con competencias en todo el territorio nacional.</p>

          <p>Su función es garantizar la seguridad pública y resguardar los derechos fundamentales. El ingreso a estas instituciones será un proceso gratuito y no discriminatorio. La educación y formación policial se fundará en el respeto irrestricto a los derechos humanos.</p>

          <p><strong>Fuerzas Armadas. </strong>Integradas única y exclusivamente por el Ejército, la Armada y la Fuerza Aérea. Estarán a cargo del ministerio de defensa nacional y serán instituciones destinadas a resguardar la soberanía, independencia e integridad territorial de la República, ante agresiones externas.</p>

          <p><strong>Probidad. </strong>No podrán optar a cargos públicos o de elección popular las personas condenadas por crímenes de lesa humanidad, delitos sexuales y violencia intrafamiliar, ni aquellas vinculadas a delitos de corrupción.</p>

          <p><strong>Corrupción.</strong> La corrupción se declara como contraria al bien común y atenta contra la democracia. El Estado debe estudiar, prevenir, investigar, perseguir y sancionar estos actos.</p>

        </div>
      </section>

      <Nav />

      <Banner />

      <Footer />
    </div>
  );
}
