"use client";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
// import Services from '../../api/Services'; // 👈 Comentado si no se usa
import Image from 'next/image';
import api from '@/plugins/axios' // 👈 Importamos axios configurado

const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: { slidesToShow: 3, slidesToScroll: 1 }
        },
        {
            breakpoint: 1500,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
        },
        {
            breakpoint: 1200,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
        },
        {
            breakpoint: 1100,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
        },
        {
            breakpoint: 767,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
        },
        {
            breakpoint: 575,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
        }
    ]
};

const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const [ofertas, setOfertas] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchOfertas = async () => {
            try {
                // 👇 Usamos el nuevo servicio con axios configurado
                // Endpoint probable para ofertas académicas/recursos
                const response = await api.get('/institucion/21/gacetaEventos') // 👈 Ejemplo de endpoint para ofertas académicas
                
                // 👇 Ajusta según la estructura real de la respuesta
                // console.log('🔍 Datos Ofertas:', response.data) // 👈 Descomenta para depurar
                
                // Si la respuesta viene como array directo:
                setOfertas(response.data)
                
                // Si viene anidada (ej: response.data.ofertas o response.data.data):
                // setOfertas(response.data.ofertas || response.data.data || [])
                
            } catch (error) {
                console.error("❌ Error al obtener ofertas académicas:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOfertas();
    }, []);

    // Estado de carga (opcional, para mejor UX)
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
                                ofertas.map((oferta, index) => (
                                    <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                        <div className="icon">
                                            {/* 👇 Actualizamos la URL de imágenes al nuevo dominio */}
                                            <Image 
                                                src={
                                                    oferta.ofertas_imagen?.startsWith('http') 
                                                    ? oferta.ofertas_imagen 
                                                    : `https://servicioadministrador.upea.bo/api/v2/institucion/21/gacetaEventos${oferta.ofertas_imagen}`
                                                } 
                                                alt={oferta.ofertas_titulo || 'Oferta académica'} 
                                                width={500} 
                                                height={300} 
                                                layout="responsive" 
                                                unoptimized={true} 
                                            />
                                        </div>
                                        <div className="text">
                                            <h2>
                                                <Link onClick={ClickHandler} href='#'>
                                                    <p dangerouslySetInnerHTML={{ 
                                                        __html: oferta.ofertas_titulo || oferta.titulo || oferta.nombre || '' 
                                                    }} />
                                                </Link>
                                            </h2>
                                            <p dangerouslySetInnerHTML={{ 
                                                __html: oferta.ofertas_referencia || oferta.descripcion || oferta.referencia || '' 
                                            }} />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center">
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