import React from 'react'

function Banner() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <h3>¡Infórmate y participa!</h3>
          <p>Por una Constitución #JustaParaChile</p>

          <div className="share">
            <p>Compartir en :</p>
            <a href="https://api.whatsapp.com/send?text=Conoce%20los%2010%20pilares%20que%20sostienen%20los%20aspectos%20m%C3%A1s%20relevantes%20de%20la%20propuesta%20de%20la%20nueva%20Constituci%C3%B3n%20%3A%20https%3A%2F%2Fwww.laconstitucionpractica.cl%2F" target="_blank" rel="noreferrer">Whatsapp</a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.laconstitucionpractica.cl/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com/intent/tweet?text=Conoce%20los%2010%20pilares%20que%20sostienen%20los%20aspectos%20m%C3%A1s%20relevantes%20de%20la%20propuesta%20de%20la%20nueva%20Constituci%C3%B3n%20%3A%20https%3A//www.laconstitucionpractica.cl/" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.laconstitucionpractica.cl/&title=Gu%C3%ADa%20Pr%C3%A1ctica%20Borrador%20%7C%20Nueva%20Constituci%C3%B3n&summary=Conoce%20los%2010%20pilares%20que%20sostienen%20los%20aspectos%20m%C3%A1s%20relevantes%20de%20la%20propuesta%20de%20la%20nueva%20Constituci%C3%B3n%20&source=" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner