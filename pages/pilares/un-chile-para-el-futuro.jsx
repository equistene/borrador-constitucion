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
          <h1>UN CHILE PARA EL FUTURO</h1>

          <p>El proyecto de nueva Constitución reconoce los desafíos que traen los avances de la ciencia y la tecnología. Aquí se incorporan normas como el derecho a la participación política digital, a la información, al conocimiento, a la educación y conectividad digital, y a la protección de los datos personales.</p>

          <p>Por otro lado, se suman los principios de la bioética y el deber del Estado de incluir los mejores avances de las ciencias, tecnología, conocimientos e innovación al quehacer público.</p>

          <p>Participación ciudadana y educación digital. La ley regulará la utilización de herramientas digitales en la implementación de los mecanismos de participación. Toda persona tendrá el derecho a la educación digital, al desarrollo del conocimiento, pensamiento y lenguaje tecnológico, así como a gozar de sus beneficios.</p>
          
          <p>Acceso a medios digitales. Todas las personas tendrán derecho al acceso universal, a la conectividad digital y a las tecnologías de la información y comunicación. El Estado tiene la obligación de superar las brechas de acceso, uso y participación en el espacio digital, sus dispositivos e infraestructuras. El Estado tendrá el deber de promover y participar del desarrollo de las telecomunicaciones, servicios de conectividad y tecnologías de la información y comunicación.</p>

          <p>Derecho a la Protección de Datos Personales. Se garantizará el derecho a la protección de los datos de carácter personal, a conocer, decidir y controlar el uso de las informaciones que les conciernen.</p>

          <p>Acceso a servicios básicos de comunicación. El Estado deberá garantizar el acceso libre, equitativo y descentralizado, concondiciones de calidad y velocidad adecuadas y efectivas a los servicios básicos de comunicación.</p>

          <p>Bioética. Las ciencias y las tecnologías deben desarrollarse siguiendo los principios de solidaridad, cooperación, responsabilidad y respetando la dignidad humana, la sintiencia de los animales y los derechos de la naturaleza.</p>

          <p>Innovación del Estado. Será deber del Estado utilizar los mejores avances de las ciencias, tecnología, conocimientos e innovación para promover la mejora continua de los servicios públicos.</p>

        </div>
      </section>

      <Nav />

      <Banner />

      <Footer />
    </div>
  );
}
