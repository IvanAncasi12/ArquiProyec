"use client";
import React, { useEffect, useState } from 'react'; 
import Link from 'next/link'
import abimg from '/public/images/04.jpg'
import sign from '/public/images/signeture.png'
import Image from 'next/image'
import api from '@/plugins/axios'

const About4 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const [institucion, setInstitucion] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchInstitucion = async () => {
          try {
            const response = await api.get('/institucion/1/contenido')
            
            setInstitucion(response.data);
            
          } catch (error) {
            console.error("❌ Error al obtener datos del nuevo servicio:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchInstitucion();
      }, []);
    if (loading) {
        return (
            <section className={`Arkitek-about-section ${props.abClass}`}>
                <div className="container text-center py-5">
                    <p>Cargando información...</p>
                </div>
            </section>
        )
    }

    return (
        <section className={`Arkitek-about-section ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-8 col-12">
                        {institucion && (
                            <div className="about-left-item">
                                <div className="wpo-section-title">
                                    <span>HISTORIA</span>
                                    <h2>ARQUITECTURA</h2>
                                    <p dangerouslySetInnerHTML={{ 
                                        __html: institucion.institucion_historia || institucion.contenido || '' 
                                    }} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-4 col-md-8 col-12">
                        <div className="about-middle-item">
                            <Image src={abimg} alt="Arquitectura UPEA" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-12">
                    {institucion && (
                        <div className="about-right-item">
                             <p dangerouslySetInnerHTML={{ 
                                 __html: institucion.institucion_historia || institucion.contenido || '' 
                             }} />
                            <h2>Sobre la Carrera</h2>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About4;