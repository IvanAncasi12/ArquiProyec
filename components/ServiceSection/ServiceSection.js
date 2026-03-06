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
                const result = await api.get('/institucion/21/gacetaEventos')
                
                const ofertasData = result.data.ofertasAcademicas || 
                                   result.data.ofertas_academicas || 
                                   result.data.recursos || 
                                   result.data.data || 
                                   (Array.isArray(result.data) ? result.data : [])
                
                setOfertas(Array.isArray(ofertasData) ? ofertasData : [])
                
            } catch (error) {
                setOfertas([])
            } finally {
                setLoading(false);
            }
        };

        fetchOfertas();
    }, []);
    
    if (loading) {
        return (
            <section className="Arkitek-service-section-s3 section-padding" style={{
                position: 'relative',
                padding: '80px 0',
                margin: '40px 0',
                zIndex: 1
            }}>
                <div className="container text-center py-5">
                    <p>Cargando ofertas académicas...</p>
                </div>
            </section>
        )
    }

    return (
        <section className="Arkitek-service-section-s3 section-padding" style={{
            position: 'relative',
            padding: '80px 0',
            margin: '40px 0',
            zIndex: 1
        }}>
            <div className="shape-1" style={{pointerEvents: 'none', zIndex: 0, display: 'none'}}>
                <svg width="596" height="590" viewBox="0 0 596 590" fill="none">
                    <path d="M148 590L596 0H0L148 590Z" />
                </svg>
            </div>
            <div className="shape-2" style={{pointerEvents: 'none', zIndex: 0, display: 'none'}}>
                <svg width="328" height="510" viewBox="0 0 328 510" fill="none">
                    <path d="M62 0L328 226V510H62L0 472L62 0Z" />
                </svg>
            </div>
            <div className="container-fluid" style={{position: 'relative', zIndex: 2}}>
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
                                    // 👇 CORRECCIÓN: Construir URL correctamente (SIN ESPACIOS)
                                    let imageUrl = oferta.ofertas_imagen || oferta.imagen || oferta.imagen_url || null;
                                    
                                    if (imageUrl && typeof imageUrl === 'string' && !imageUrl.startsWith('http')) {
                                        imageUrl = `https://servicioadministrador.upea.bo${imageUrl}`
                                    }
                                    
                                    return (
                                        <div className="service-item" key={index}>
                                            <div className="icon" style={{
                                                position: "relative",
                                                width: "100%",
                                                overflow: 'hidden',
                                                borderRadius: '16px',
                                                marginBottom: '10px'
                                            }}>
                                                {imageUrl ? (
                                                    <Image
                                                        src={imageUrl}
                                                        alt={oferta.ofertas_titulo || 'Oferta académica'}
                                                        width={500}
                                                        height={300}
                                                        style={{objectFit: 'cover', width: '100%'}}
                                                        unoptimized={true}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none'
                                                        }}
                                                    />
                                                ) : (
                                                    <div style={{
                                                        width: '100%',
                                                        height: '300px',
                                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white'
                                                    }}>
                                                        <div style={{textAlign: 'center', padding: '20px'}}>
                                                            <div style={{fontSize: '48px', marginBottom: '10px'}}>📚</div>
                                                            <div style={{fontSize: '16px', fontWeight: 'bold'}}>
                                                                {oferta.ofertas_titulo || 'OFERTA ACADÉMICA'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text">
                                                <h2>
                                                    <Link onClick={ClickHandler} href="#">
                                                        <span dangerouslySetInnerHTML={{
                                                            __html: oferta.ofertas_titulo || oferta.titulo || oferta.nombre || 'Sin título'
                                                        }} />
                                                    </Link>
                                                </h2>
                                                <div className="description" dangerouslySetInnerHTML={{
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