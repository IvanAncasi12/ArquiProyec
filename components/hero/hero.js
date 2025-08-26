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
                                    <p>La carrera de Arquitectura con innovación tecnológica y construcciones modernas</p>
                                    <Link href="/about" className="theme-btn">Conocer más</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero;