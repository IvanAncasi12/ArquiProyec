"use client";
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import abimg1 from '/public/images/01.jpg'
import abimg2 from '/public/images/06.jpg'
import Link from 'next/link'
import Image from 'next/image';
import api from '@/plugins/axios'

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const [institucion, setInstitucion] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchInstitucion = async () => {
          try {
            const response = await api.get('/institucion/21/contenido')
            setInstitucion(response.data)
          } catch (error) {
            console.error("❌ Error al obtener datos de la institución:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchInstitucion();
      }, []);
    
    if (loading) {
        return (
            <section className="Arkitek-about-section-s4 section-padding">
                <div className="container text-center py-5">
                    <p>Cargando información...</p>
                </div>
            </section>
        )
    }
    
    return (
        <section className="Arkitek-about-section-s4 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className="about-text">
                            <span>SOBRE LA CARRERA</span>
                            <h2>ARQUITECTURA</h2>
                            {/* Renderizado condicional del contenido pero mantener estructura de columnas */}
                            {institucion ? (
                                <p dangerouslySetInnerHTML={{
                                    __html: institucion.institucion_sobre_ins || institucion.sobre_carrera || institucion.descripcion || ''
                                }} />
                            ) : (
                                <p>Descripción no disponible</p>
                            )}
                            <Link onClick={ClickHandler} href="/about" className="theme-btn">MÁS</Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12 order-2 ">
                        <div className="about-right-content">
                            <div className="info">
                                <h3><CountUp end={5} enableScrollSpy />+</h3>
                                <p>Años de carrera</p>
                            </div>
                            <div className="images">
                                <Image src={abimg1} alt="Arquitectura UPEA" unoptimized={true} />
                            </div>
                            <div className="bg-img">
                                <Image src={abimg2} alt="Arquitectura UPEA fondo" unoptimized={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default About;