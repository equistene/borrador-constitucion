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
            <a href="https://api.whatsapp.com/send?text=Lee la Guía Práctica Borrador Nueva Constitución (Junio 2022) - %0ahttps://www.laconstitucionpractica.cl/" target="_blank" rel="noreferrer">Whatsapp</a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.laconstitucionpractica.cl/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com/intent/tweet?url=https://www.laconstitucionpractica.cl/&text=Lee%20la%20Gu%C3%ADa%20pr%C3%A1ctica%20Borrador%20Nueva%20Constituci%C3%B3n%20(Junio%202022)" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.laconstitucionpractica.cl/" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner