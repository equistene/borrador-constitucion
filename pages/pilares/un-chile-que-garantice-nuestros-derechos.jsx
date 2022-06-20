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
        <title>UN CHILE POR SUS REGIONES | Guía Práctica Borrador - Nueva Constitución</title>
        <meta name="description" content="Guía Práctica Borrador" />
        <link rel="icon" href="/favicon.ico" />
        <Metatags />
      </Head>

      <Hero />

      <section className="pilar">
        <div className="container">
          <h1>UN CHILE POR SUS REGIONES</h1>

          <p>Todas las personas gozamos de los mismos derechos, los cuales son universales, indivisibles e interdependientes, para garantizar así la dignidad de las personas.</p>

          <p>La propuesta de nueva Constitución, considerando los estándares internacionales de derechos humanos, ha consagrado derechos esenciales como la salud, la educación, el reconocimiento del trabajo doméstico y de cuidados, el derecho a la vivienda, a la alimentación adecuada, el derecho humano al agua y al saneamiento, y el derecho a vivir en entornos seguros y libres de violencia, entre otros.</p>

          <p>El borrador consagra también el derecho de propiedad y la no expropiación sin causa legal.</p>

          <p><strong>Derecho a la vida y a la integridad física y psíquica.</strong> Toda persona tiene derecho a la vida. Nadie podrá ser condenado a muerte ni ejecutado.</p>

          <p>Se garantiza el derecho a la integridad física, psicosocial, sexual y afectiva. Nadie podrá ser sometido a torturas, ni penas o tratos crueles, inhumanos o degradantes.</p>

          <p><strong>Verdad, justicia, reparación y garantías de no repetición.</strong> Las víctimas de graves violaciones a los derechos humanos tienen derecho a la reparación integral.</p>

          <p>Además, las víctimas y la comunidad tienen el derecho al esclarecimiento y conocimiento de la verdad, especialmente, en casos de crímenes de lesa humanidad, crímenes de guerra, genocidio o despojo territorial.</p>

          <p>El Estado garantizará el derecho a la memoria desde un enfoque que considere su relación con las garantías de no repetición y los derechos a la verdad, justicia y reparación integral.</p>

          <p><strong>El derecho a vivir en entornos seguros y libres de violencia.</strong> El Estado tendrá el deber de prevenir, perseguir y sancionar la violencia y los delitos, así como generar políticas de fortalecimiento comunitario. Los organismos que se encarguen de resguardar este derecho deberán actuar de forma coordinada y respetando los derechos humanos.</p>

          <p><strong>Derecho a la salud.</strong> Toda persona tendrá derecho a la salud y bienestar integral, incluyendo su dimensión física y mental. En cuanto a la salud mental, el Estado deberá generar políticas y programas, aumentando progresivamente su financiamiento.</p>

          <p>La atención primaria constituirá la base del Sistema Nacional de Salud, el cual será financiado a través de las rentas generales de la nación y podrá estar integrado por prestadores públicos y privados. La ley determinará los requisitos para que estos últimos puedan integrarse. Por ley se podrá definir el cobro cotizaciones obligatorias de salud.</p>

          <p><strong>Derecho a la muerte digna.</strong> La Constitución asegurará el derecho a las personas a tomar decisiones libres e informadas sobre sus cuidados y tratamientos al final de su vida.</p>

          <p>El Estado deberá garantizar el acceso a los cuidados paliativos de todas las personas portadoras de enfermedades crónicas avanzadas, progresivas y limitantes de la vida, dedicando especial atención a grupos vulnerables y/o en riesgo social.</p>

          <p>La ley regulará las condiciones para garantizar el ejercicio de este derecho, incluyendo el acceso a la información y el acompañamiento adecuado.</p>

          <p><strong>Derecho a la vivienda y a la ciudad.</strong> Toda persona tendrá derecho a una vivienda digna y adecuada que permita el libre desarrollo de su vida personal, familiar y comunitaria. El Estado podrá participar en el diseño, construcción, rehabilitación, conservación e innovación de la vivienda, considerando particularmente a personas con bajos ingresos y grupos de especial protección.</p>

          <p>El Estado garantizará la creación de viviendas de acogida en caso de violencia de género y otras formas de vulneración de derechos, y garantiza la disponibilidad de suelos para que los proyectos habitacionales se ubiquen apropiadamente, en entornos libre de violencia, con accesibilidad a servicios públicos, transporte y que permitan el goce igualitario de la ciudad.</p>

          <p><strong>Derecho a la educación.</strong> El Estado tendrá como deber primordial e ineludible asegurar a todas las personas el derecho a la educación. Esta se debe impartir bajo los principios de cooperación, no discriminación, inclusión, justicia, participación, solidaridad, interculturalidad, enfoque de género y pluralismo. La educación será de carácter no sexista y sedesarrollará considerando el contexto cultural de las y los estudiantes.</p>

          <p><strong>La educación debe orientarse a la calidad.</strong> Su acceso será universal en todos sus niveles y obligatorio desde el nivel básico hasta el medio. Además, se deberá brindar oportunidades y apoyo adicional a quienes estén en situación de discapacidad y/o en riesgo de exclusión.</p>

          <p>El Sistema Nacional de Educación estará integrado por los establecimientos e instituciones de educación parvularia, básica, media y superior, creadas o reconocidas por el Estado.</p>

          <p>Estas instituciones tendrán prohibida toda forma de lucro. El Estado deberá articular, gestionar y financiar un Sistema de Educación Pública, de carácter laico y gratuito, compuesto por establecimientos e instituciones estatales de todos los niveles y modalidades educativas.</p>

          <p>La propuesta de nueva Constitución reconoce el rol fundamental de las profesoras y profesores. </p>
          
          <p><strong>Reconocimiento del trabajo doméstico y de cuidados.</strong> El Estado reconoce que los trabajos domésticos y de cuidados son socialmente necesarios e indispensables para el desarrollo del país y deben ser considerados en la formulación y ejecución de las políticas públicas.</p>

          <p>El Estado promoverá la corresponsabilidad y mecanismos para la distribución de los trabajos domésticos y de cuidados.</p>

          <p><strong>Derecho al trabajo decente.</strong> Toda persona tendrá derecho al trabajo y su libre elección. El Estado garantizará el trabajo decente y su protección, condiciones laborales equitativas, a la salud y seguridad, al descanso y al disfrute del tiempo libre.</p>

          <p>Las trabajadoras y trabajadores tendrán derecho a una remuneración equitativa, justa y suficiente, que les asegure su sustento y el de su familia. Garantizará su protección y las de organizaciones sindicales, mediante un órgano fiscalizador. Se prohíbe toda forma de precarización laboral, así como el trabajo forzoso, humillante o denigrante.</p>

          <p><strong>Derecho a la seguridad social.</strong> Toda persona tendrá derecho a la seguridad social basado en la universalidad, solidaridad, integridad, unidad, igualdad, suficiencia, participación, sostenibilidad y oportunidad. La ley establecerá un sistema de seguridad social público que proteja a las personas en caso de enfermedad, vejez, discapacidad, supervivencia, maternidad, paternidad, desempleo, accidentes del trabajo y enfermedades.</p>

          <p>El Estado definirá la política de seguridad social y esta se financiará por trabajadoras, trabajadores y empleadores, a través de cotizaciones obligatorias y por rentas generales de la nación. Los recursos con que se financie la seguridad social no podrán ser destinados a fines distintos que el pago de los beneficios que establezca el sistema.</p>

          <p><strong>Derecho de propiedad.</strong> Toda persona, natural o jurídica, tiene derecho de propiedad en todas sus especies y sobre toda clase de bienes. Se exceptúan aquellos bienes que la naturaleza ha hecho comunes a todas las personas y que la Constitución o la ley declaren inapropiables —como el agua o el aire—. La ley deberá determinar el modo de adquirir la propiedad, su contenido, límites y deberes, conforme con su función social y ecológica.</p>

          <p><strong>Expropiación.</strong> Ninguna persona puede ser privada de su propiedad. Solo la ley podrá autorizar una expropiación por causa de utilidad pública o interés general de la sociedad, la que debe ser debidamente fundada.</p>

          <p><strong>Indemnización en caso de expropiación.</strong> Ante una expropiación, el propietario siempre tendrá derecho a que se le indemnice por el justo precio del bien. El pago deberá efectuarse de forma previa a la toma de posesión material de bien. La persona expropiada podrá reclamar ante los tribunales sobre el monto y la modalidad de pago de la indemnización.</p>

        </div>
      </section>

      <Nav />

      <Banner />

      <Footer />
    </div>
  );
}
