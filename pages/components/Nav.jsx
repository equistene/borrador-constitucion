import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <Link href="/pilares/un-chile-con-mas-democracia">
            Un Chile con más democracia
          </Link>

          <Link href="/pilares/un-chile-mas-inclusivo">
            Un Chile inclusivo
          </Link>

          <Link href="/pilares/un-chile-con-tradicion-institucional">
            Un Chile con tradición institucional
          </Link>

          <Link href="/pilares/un-chile-libre">
            Un Chile libre
          </Link>

          <Link href="/pilares/con-igualdad-de-genero">
            Un Chile con igualdad de género
          </Link>

          <Link href="/pilares/que-proteja-naturaleza-y-medio-ambiente">
            Un Chile que proteja naturaleza y el medio ambiente
          </Link>

          <Link href="/pilares/un-chile-por-sus-regiones">
            Un Chile por sus regiones
          </Link>

          <Link href="/pilares/un-chile-para-el-futuro">
            Un Chile para el futuro
          </Link>

          <Link href="/pilares/un-chile-con-economia-responsable">
            Un Chile con economía responsable
          </Link>

          <Link href="/pilares/un-chile-que-garantice-nuestros-derechos">
            Un Chile que garantice nuestros derechos
          </Link>          
        </ul>
      </nav>
    </>
  )
}

export default Nav