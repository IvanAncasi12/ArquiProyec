"use client";
import React, { useEffect, useState, memo } from 'react';
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';
import api from '@/plugins/axios'

const ServiciosArqui = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let isMounted = true;
        
        const fetchServicios = async () => {
          try {
            const result = await api.get('/institucion/21/gacetaEventos')
            
            // Obtener servicios de la carrera
            const serviciosData = result.data.serviciosCarrera || 
                                 result.data.servicios || 
                                 []
            
            // Filtrar solo los activos
            const activos = serviciosData.filter(item => item.serv_active === '1' || item.serv_active === 1)
            
            if (isMounted && Array.isArray(activos)) {
                setServicios(activos)
            }
            
          } catch (error) {
            if (isMounted) setServicios([])
          } finally {
            if (isMounted) setLoading(false);
          }
        };
    
        fetchServicios();
        
        return () => { isMounted = false; }
    }, []);
    
    // Función para construir URL de imagen correctamente
    const getImageUrl = (imagenPath) => {
        if (!imagenPath) return null;
        if (imagenPath.startsWith('http')) return imagenPath;
        if (imagenPath.startsWith('/storage')) {
            return `https://apioadministrador.upea.bo${imagenPath}`;
        }
        return `https://apiadministrador.upea.bo${imagenPath}`;
    };
    
    // Función para limpiar HTML
    const cleanHTML = (html) => {
        if (!html) return '';
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent || temp.innerText || '';
    };
      
    if (loading) {
        return (
            <section className="Arkitek-team-section-s2 section-padding">
                <div className="container text-center py-5">
                    <p>Cargando servicios...</p>
                </div>
            </section>
        )
    }

    return (
        <>
            <style jsx global>{`
                .team-item {
                    will-change: auto;
                    transform: translateZ(0);
                    backface-visibility: hidden;
                }
                .team-item .image {
                    position: relative !important;
                    overflow: hidden;
                }
                .team-item img {
                    transition: opacity 0.2s ease-in-out;
                }
                .team-item .icon li a {
                    transition: transform 0.2s ease;
                }
                .team-item .icon li a:hover {
                    transform: scale(1.2);
                }
                .servicio-card {
                    transition: all 0.3s ease;
                }
                .servicio-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(73, 29, 90, 0.2) !important;
                }
            `}</style>
            
            <section className="Arkitek-team-section-s2 section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-12">
                            <SectionTitle subTitle={'ARQUITECTURA'} Title={'Servicios'} />
                        </div>
                    </div>
                    <div className="team-wrapar">
                        <div className="row">
                        {servicios.length > 0 ? (
                            servicios.map((item, index) => {
                                const imageUrl = getImageUrl(item.serv_imagen)
                                const descripcionLimpia = cleanHTML(item.serv_descripcion)
                                
                                return (
                                    <div className="col col-lg-4 col-md-6 col-12" key={item.serv_id || index}>
                                        <div className="team-item servicio-card">
                                            <div className="image" style={{
                                                position: 'relative',
                                                width: '100%',
                                                height: '250px',
                                                overflow: 'hidden',
                                                borderRadius: '8px'
                                            }}>
                                                {imageUrl ? (
                                                    <Image 
                                                        src={imageUrl}
                                                        alt={item.serv_nombre || 'Servicio'}
                                                        fill
                                                        style={{objectFit: 'cover'}}
                                                        unoptimized={true}
                                                        priority={index < 3}
                                                        onError={(e) => {
                                                            e.target.style.opacity = '0.5'
                                                        }}
                                                    />
                                                ) : (
                                                    <div style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        fontSize: '48px'
                                                    }}>
                                                        🛠️
                                                    </div>
                                                )}
                                                
                                                {/* Badge de servicio */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '15px',
                                                    right: '15px',
                                                    backgroundColor: 'rgba(16, 185, 129, 0.95)',
                                                    color: 'white',
                                                    padding: '6px 12px',
                                                    borderRadius: '20px',
                                                    fontSize: '12px',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase'
                                                }}>
                                                    Servicio
                                                </div>
                                            </div>
                                        
                                            <div className="team-content">
                                                <h2 style={{
                                                    fontSize: '18px',
                                                    marginBottom: '10px'
                                                }}>
                                                    {item.serv_nombre || 'Sin nombre'}
                                                </h2>
                                                <span style={{
                                                    fontSize: '14px',
                                                    color: '#666',
                                                    display: 'block',
                                                    lineHeight: '1.6'
                                                }}>
                                                    {descripcionLimpia.substring(0, 100)}...
                                                </span>
                                                
                                                {/* Botón de contacto */}
                                                <div style={{
                                                    marginTop: '15px',
                                                    display: 'flex',
                                                    gap: '10px',
                                                    flexWrap: 'wrap'
                                                }}>
                                                    <Link 
                                                        href="/contact"
                                                        onClick={ClickHandler}
                                                        style={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '6px',
                                                            padding: '8px 16px',
                                                            backgroundColor: '#10b981',
                                                            color: 'white',
                                                            textDecoration: 'none',
                                                            borderRadius: '6px',
                                                            fontSize: '13px',
                                                            fontWeight: '600',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.target.style.backgroundColor = '#059669';
                                                            e.target.style.transform = 'translateY(-2px)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.target.style.backgroundColor = '#10b981';
                                                            e.target.style.transform = 'translateY(0)';
                                                        }}
                                                    >
                                                        <span>📞</span>
                                                        <span>Más información</span>
                                                    </Link>
                                                    
                                                    {item.serv_nro_celular && (
                                                        <Link 
                                                            href="https://wa.me/591XXXXXXXX"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '6px',
                                                                padding: '8px 16px',
                                                                backgroundColor: '#25D366',
                                                                color: 'white',
                                                                textDecoration: 'none',
                                                                borderRadius: '6px',
                                                                fontSize: '13px',
                                                                fontWeight: '600',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.backgroundColor = '#128C7E';
                                                                e.target.style.transform = 'translateY(-2px)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.backgroundColor = '#25D366';
                                                                e.target.style.transform = 'translateY(0)';
                                                            }}
                                                        >
                                                            <span>💬</span>
                                                            <span>WhatsApp</span>
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <div className="col-12 text-center">
                                <p>No hay servicios disponibles</p>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(ServiciosArqui);