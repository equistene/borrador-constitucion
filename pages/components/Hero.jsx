import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <>
      <header>        
        <div className="container">
          <h3>Guía Práctica Borrador</h3>
          <Link href="/"><h1>Nueva Constitución</h1></Link>
          <p>Junio 2022</p>
        </div>
      </header>
    </>
  )
}

export default Hero