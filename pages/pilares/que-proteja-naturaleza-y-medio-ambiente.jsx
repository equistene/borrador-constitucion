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
          <h1>UN CHILE QUE PROTEJA LA NATURALEZA Y EL MEDIO AMBIENTE</h1>

          <p>La propuesta de nueva Constitución reconoce que estamos frente a una crisis climática y ecológica de la cual debemos hacernos cargo.</p>

          <p>Por primera vez se consagran los derechos de la naturaleza; el deber especial de custodia del Estado sobre los bienes comunes naturales y contempla un catálogo de derechos humanos ambientales, como el derecho a un ambiente sano y ecológicamente equilibrado. Además, se incluyen normas que otorgan protección a ecosistemas tales como glaciares y humedales. </p>

          <p>Crisis climática y ecológica. El Estado deberá adoptar medidas para prevenir, adaptar y mitigar los riesgos provocados por la crisis climática y ecológica. Tendrá que promover el diálogo, cooperación y solidaridad entre países, con el objetivo de afrontar la crisis y proteger la naturaleza.</p>

          <p>Derecho a un ambiente sano. Todas las personas tendrán derecho a un ambiente sano y ecológicamente equilibrado.</p>

          <p>Principio de responsabilidad ambiental. Cualquier persona que dañe el medio ambiente deberá repararlo, sin perjuicio de las sanciones administrativas, penales o civiles que le correspondan.</p>

          <p>Educación ambiental. Es deber del Estado garantizar una educación ambiental que fortalezca la preservación, conservación y cuidados requeridos respecto del medio ambiente y la naturaleza, y que permita formar conciencia ecológica.</p>

          <p>Derecho humano al agua y al saneamiento. Todas las personas tienen derecho al agua y al saneamiento suficiente, saludable, aceptable y de fácil acceso. El Estado deberá garantizar este derecho en base a las necesidades de los diferentes contextos del país, tanto para las actuales como futuras generaciones.</p>

          <p>Estatuto constitucional de las aguas. El agua es esencial para la vida, el ejercicio de los derechos humanos y de la naturaleza. El Estado deberá proteger las aguas, en todos sus estados, fases y ciclo natural. De esta manera, velará por un uso razonable de las aguas, en el que prevalecerá el equilibrio de los ecosistemas.</p>

          <p>La Agencia Nacional de Aguas será la encargada de autorizar sus usos, que deben ser de carácter incomerciable, justificado y en base a la disponibilidad efectiva del recurso.</p>

          <p>El Estado deberá promover y proteger la gestión comunitaria de agua potable y saneamiento, especialmente en áreas y territorios rurales y extremos, en conformidad a la ley.</p>

          <p>Protección de Glaciares. El Estado garantizará la protección de los glaciares y del entorno glaciar, incluyendo los suelos congelados y sus funciones ecosistémicas. Los glaciares quedarán excluidos de toda actividad minera, al igual que las áreas protegidas, y las que por razones de protección hidrográfica establezca la ley.</p>

          <p>Áreas protegidas. El Estado a través de un sistema nacional de áreas protegidas, único, integral y de carácter técnico, deberá garantizar la preservación, restauración y conservación de espacios naturales. Además, deberá monitorear y mantener información actualizada sobre los atributos de dichas áreas, y garantizar la participación de las comunidades locales y entidades territoriales.</p>

          <p>Derechos de los animales. Los animales son declarados como sujetos de especial protección. El Estado reconoce que son seres sintientes con derecho a vivir una vida libre de maltrato. Asimismo, deberá protegerlos y promover la educación basada en la empatía y el respeto hacia ellos.</p>

          <p>¿Sintiencia? Significa que los animales son seres que sienten, que tienen la capacidad de sufrir y disfrutar.</p>
        </div>
      </section>

      <Nav />

      <Banner />

      <Footer />
    </div>
  );
}
