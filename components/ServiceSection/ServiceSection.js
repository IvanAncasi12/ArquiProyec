"use client";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import api from '@/plugins/axios'

const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        { breakpoint: 1600, settings: { slidesToShow: 3, slidesToScroll: 1 }},
        { breakpoint: 1500, settings: { slidesToShow: 2, slidesToScroll: 1 }},
        { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 }},
        { breakpoint: 1100, settings: { slidesToShow: 2, slidesToScroll: 1 }},
        { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 }},
        { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1 }}
    ]
};

const ServiceSection = (props) => {
    const ClickHandler = () => { window.scrollTo(10, 0); }
    
    const [ofertas, setOfertas] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchOfertas = async () => {
            try {
                // 👇 Endpoint CORRECTO - gacetaEventos
                const result = await api.get('/institucion/21/gacetaEventos')
                
                console.log('🔍 Respuesta completa gacetaEventos:', result.data)
                
                // 👇 Extraer ofertas académicas (ajusta según la estructura)
                const ofertasData = result.data.ofertasAcademicas || 
                                   result.data.ofertas_academicas || 
                                   result.data.recursos || 
                                   result.data.data || 
                                   (Array.isArray(result.data) ? result.data : [])
                
                console.log('🔍 Ofertas académicas extraídas:', ofertasData)
                console.log('🔍 Cantidad:', Array.isArray(ofertasData) ? ofertasData.length : 'No es array')
                
                setOfertas(Array.isArray(ofertasData) ? ofertasData : [])
                
            } catch (error) {
                console.error("❌ Error al obtener ofertas académicas:", error);
                setOfertas([])
            } finally {
                setLoading(false);
            }
        };

        fetchOfertas();
    }, []);
    
    if (loading) {
        return (
            <section className="Arkitek-service-section-s3 section-padding">
                <div className="container text-center py-5">
                    <p>Cargando ofertas académicas...</p>
                </div>
            </section>
        )
    }

    return (
        <section className="Arkitek-service-section-s3 section-padding">
            <div className="shape-1">
                <svg width="596" height="590" viewBox="0 0 596 590" fill="none">
                    <path d="M148 590L596 0H0L148 590Z" />
                </svg>
            </div>
            <div className="shape-2">
                <svg width="328" height="510" viewBox="0 0 328 510" fill="none">
                    <path d="M62 0L328 226V510H62L0 472L62 0Z" />
                </svg>
            </div>
            <div className="container-fluid">
                <div className="service-wrap">
                    <div className="service-title-left">
                        <div className="wpo-section-title">
                            <h2>Ofertas Académicas</h2>
                            <p>¡Bienvenida a la Carrera de Arquitectura de la UPEA! Te damos la más cordial bienvenida a esta emocionante casa superior de estudios. La carrera de Arquitectura te ofrece una sólida base teórica y práctica para convertirte en un profesional capaz de diseñar y proyectar espacios funcionales, estéticos y sostenibles. Te invitamos a explorar este nuevo mundo lleno de creatividad, innovación y responsabilidad social.</p>
                        </div>
                    </div>
                    <div className="service-content service-content-slider">
                        <Slider {...settings}>
                            {ofertas.length > 0 ? (
                                ofertas.map((oferta, index) => {
                                    // 👇 Construir URL de imagen correctamente
                                    const imageUrl = oferta.ofertas_imagen?.startsWith('http')
                                        ? oferta.ofertas_imagen
                                        : `https://servicioadministrador.upea.bo/recursos/21${oferta.ofertas_imagen}`
                                    
                                    return (
                                        <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                            <div className="icon">
                                                <Image 
                                                    src={imageUrl}
                                                    alt={oferta.ofertas_titulo || 'Oferta académica'}
                                                    width={500}
                                                    height={300}
                                                    style={{objectFit: 'cover'}}
                                                    unoptimized={true}
                                                    onError={() => console.warn('❌ Error imagen:', imageUrl)}
                                                />
                                            </div>
                                            <div className="text">
                                                <h2>
                                                    <Link onClick={ClickHandler} href='#'>
                                                        <p dangerouslySetInnerHTML={{ 
                                                            __html: oferta.ofertas_titulo || oferta.titulo || oferta.nombre || 'Sin título' 
                                                        }} />
                                                    </Link>
                                                </h2>
                                                <p dangerouslySetInnerHTML={{ 
                                                    __html: oferta.ofertas_referencia || oferta.descripcion || oferta.referencia || '' 
                                                }} />
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div className="col-12 text-center py-4">
                                    <p>No hay ofertas académicas disponibles</p>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection;