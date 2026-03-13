"use client";
import React, { useEffect, useState, memo } from 'react';
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';
import api from '@/plugins/axios'

const Gaceta = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const [gacetas, setGacetas] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let isMounted = true;
        
        const fetchGacetas = async () => {
          try {
            const result = await api.get('/institucion/21/gacetaEventos')
            
            // Obtener gacetas universitarias
            const gacetasData = result.data.upea_gaceta_universitaria || 
                               result.data.gacetas || 
                               []
            
            if (isMounted && Array.isArray(gacetasData)) {
                setGacetas(gacetasData)
            }
            
          } catch (error) {
            if (isMounted) setGacetas([])
          } finally {
            if (isMounted) setLoading(false);
          }
        };
    
        fetchGacetas();
        
        return () => { isMounted = false; }
    }, []);
    
    // Función para construir URL del PDF correctamente
    const getPdfUrl = (documentoPath) => {
        if (!documentoPath) return null;
        if (documentoPath.startsWith('http')) return documentoPath;
        if (documentoPath.startsWith('/storage')) {
            return `https://apioadministrador.upea.bo${documentoPath}`;
        }
        return `https://apiadministrador.upea.bo${documentoPath}`;
    };
    
    // Formatear fecha
    const formatDate = (fechaString) => {
        if (!fechaString) return '';
        const date = new Date(fechaString);
        return date.toLocaleDateString('es-BO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
      
    if (loading) {
        return (
            <section className="Arkitek-team-section-s2 section-padding">
                <div className="container text-center py-5">
                    <p>Cargando gacetas...</p>
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
                    display: flex;
                    align-items: center;
                    justify-content: center;
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
                .pdf-icon {
                    transition: transform 0.3s ease;
                }
                .team-item:hover .pdf-icon {
                    transform: scale(1.1) rotate(5deg);
                }
            `}</style>
            
            <section className="Arkitek-team-section-s2 section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-12">
                            <SectionTitle subTitle={'ARQUITECTURA'} Title={'Gaceta Universitaria'} />
                        </div>
                    </div>
                    <div className="team-wrapar">
                        <div className="row">
                        {gacetas.length > 0 ? (
                            gacetas.map((item, index) => {
                                const pdfUrl = getPdfUrl(item.gaceta_documento)
                                const fechaFormateada = formatDate(item.gaceta_fecha)
                                
                                return (
                                    <div className="col col-lg-4 col-md-6 col-12" key={item.gaceta_id || index}>
                                        <div className="team-item">
                                            <div className="image" style={{
                                                position: 'relative',
                                                width: '100%',
                                                height: '250px',
                                                overflow: 'hidden',
                                                borderRadius: '8px',
                                                background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                                                cursor: 'pointer'
                                            }}>
                                                {/* Icono de PDF */}
                                                <div className="pdf-icon" style={{
                                                    textAlign: 'center',
                                                    color: 'white'
                                                }}>
                                                    <div style={{
                                                        fontSize: '80px',
                                                        marginBottom: '15px',
                                                        textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
                                                    }}>
                                                        📄
                                                    </div>
                                                    <div style={{
                                                        fontSize: '18px',
                                                        fontWeight: 'bold',
                                                        marginBottom: '8px'
                                                    }}>
                                                        PDF
                                                    </div>
                                                    <div style={{
                                                        fontSize: '12px',
                                                        opacity: 0.9
                                                    }}>
                                                        {item.gaceta_tipo || 'ARQ'}
                                                    </div>
                                                </div>
                                                
                                                {/* Badge de tipo */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '15px',
                                                    right: '15px',
                                                    backgroundColor: 'rgba(255,255,255,0.95)',
                                                    color: '#dc2626',
                                                    padding: '6px 12px',
                                                    borderRadius: '20px',
                                                    fontSize: '12px',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase'
                                                }}>
                                                    GACETA
                                                </div>
                                            </div>
                                        
                                            <div className="team-content">
                                                <h2 style={{
                                                    fontSize: '18px',
                                                    marginBottom: '10px'
                                                }}>
                                                    {item.gaceta_titulo || 'Sin título'}
                                                </h2>
                                                
                                                {fechaFormateada && (
                                                    <div style={{
                                                        fontSize: '13px',
                                                        color: '#888',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px',
                                                        marginBottom: '15px'
                                                    }}>
                                                        <span>📅</span>
                                                        <span>{fechaFormateada}</span>
                                                    </div>
                                                )}
                                                
                                                {/* Botón de descarga/visualización */}
                                                {pdfUrl ? (
                                                    <Link 
                                                        href={pdfUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            padding: '10px 20px',
                                                            backgroundColor: '#dc2626',
                                                            color: 'white',
                                                            textDecoration: 'none',
                                                            borderRadius: '8px',
                                                            fontSize: '14px',
                                                            fontWeight: '600',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.target.style.backgroundColor = '#b91c1c';
                                                            e.target.style.transform = 'translateY(-2px)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.target.style.backgroundColor = '#dc2626';
                                                            e.target.style.transform = 'translateY(0)';
                                                        }}
                                                    >
                                                        <span>👁️</span>
                                                        <span>Ver documento</span>
                                                    </Link>
                                                ) : (
                                                    <span style={{
                                                        fontSize: '13px',
                                                        color: '#999',
                                                        fontStyle: 'italic'
                                                    }}>
                                                        Documento no disponible
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <div className="col-12 text-center">
                                <p>No hay gacetas universitarias disponibles</p>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Gaceta);