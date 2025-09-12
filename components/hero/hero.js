import React from "react";
import Link from 'next/link'


const Hero = () => {
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-10 col-12">
                                <div className="wpo-static-hero-inner">
                                    <h2 className="title">CARRERA  <br />
                                        ARQUITECTURA</h2>
                                    <p>¡Bienvenidos a la brillante carrera de Arquitectura de la Universidad Pública de El Alto!</p>
                                    <Link href="/about" className="theme-btn">Conocer más</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* Fondo de líneas estructurales animadas (sin modificar estructura) */}
      <style jsx>{`
        .static-hero-s3 {
          position: relative;
          overflow: hidden; /* oculta el fondo animado que sale del contenedor */
          /* si ya tienes padding/altura desde tu tema, no toco nada aquí */
        }

        /* Capa 1: retícula/blueprint */
        .static-hero-s3::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            /* líneas verticales */
            repeating-linear-gradient(
              to right,
              rgba(0,0,0,0.07) 0 1px,
              transparent 1px 40px
            ),
            /* líneas horizontales */
            repeating-linear-gradient(
              to bottom,
              rgba(0,0,0,0.07) 0 1px,
              transparent 1px 40px
            );
          animation: gridPan 36s linear infinite;
          /* si quieres fondo blanco garantizado, descomenta:
          background-color: #fff;
          */
        }

        /* Capa 2: diagonales/tirantes estructurales */
        .static-hero-s3::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            /* tirantes morados */
            repeating-linear-gradient(
              35deg,
              rgba(124,58,237,0.18) 0 1px,
              transparent 1px 90px
            ),
            /* tirantes plomo */
            repeating-linear-gradient(
              -35deg,
              rgba(31,41,55,0.12) 0 1px,
              transparent 1px 110px
            );
          animation: braceDrift 46s linear infinite reverse;
          mix-blend-mode: multiply; /* sutil integración sobre fondos claros */
        }

        /* Animaciones */
        @keyframes gridPan {
          0%   { background-position:   0   0,   0   0; }
          100% { background-position: 60px 60px, -60px -60px; }
        }
        @keyframes braceDrift {
          0%   { background-position:   0   0,   0   0; }
          100% { background-position: -100px 0, 100px 0; }
        }

        /* Ajuste opcional para temas oscuros/claros (no cambia estructura) */
        @media (prefers-color-scheme: light) {
          .static-hero-s3::before {
            /* líneas un poco más suaves en claro */
            background-image:
              repeating-linear-gradient(to right, rgba(0,0,0,0.06) 0 1px, transparent 1px 40px),
              repeating-linear-gradient(to bottom, rgba(0,0,0,0.06) 0 1px, transparent 1px 40px);
          }
        }
      `}</style>
        </section>
    )
}



export default Hero;