"use client";
import React, { useEffect, useState, memo } from 'react';
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';
import api from '@/plugins/axios'

const Comunicas = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const [comunicados, setComunicados] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let isMounted = true;
        
        const fetchComunicados = async () => {
          try {
            const result = await api.get('/institucion/21/gacetaEventos')
            
            // Filtrar solo comunicados del array 'convocatorias'
            const todos = result.data.convocatorias || []
            const comunicadosData = todos.filter(item => {
                const tipo = item.tipo_conv_comun?.tipo_conv_comun_titulo?.toLowerCase() || ''
                return tipo.includes('comunicado')
            })
            
            if (isMounted && Array.isArray(comunicadosData)) {
                setComunicados(comunicadosData)
            }
            
          } catch (error) {
            if (isMounted) setComunicados([])
          } finally {
            if (isMounted) setLoading(false);
          }
        };
    
        fetchComunicados();
        
        return () => { isMounted = false; }
    }, []);
    
    // Función para construir URL de imagen correctamente
    const getImageUrl = (imagenPath) => {
        if (!imagenPath) return null;
        if (imagenPath.startsWith('http')) return imagenPath;
        if (imagenPath.startsWith('/storage')) {
            return `https://apiadministrador.upea.bo${imagenPath}`;
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
                    <p>Cargando comunicados...</p>
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
            `}</style>
            
            <section className="Arkitek-team-section-s2 section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-12">
                            <SectionTitle subTitle={'ARQUITECTURA'} Title={'Comunicados'} />
                        </div>
                    </div>
                    <div className="team-wrapar">
                        <div className="row">
                        {comunicados.length > 0 ? (
                            comunicados.map((item, index) => {
                                const imageUrl = getImageUrl(item.con_foto_portada)
                                const descripcionLimpia = cleanHTML(item.con_descripcion)
                                
                                return (
                                    <div className="col col-lg-4 col-md-6 col-12" key={item.idconvocatorias || index}>
                                        <div className="team-item">
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
                                                        alt={item.con_titulo || 'Comunicado'}
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
                                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        fontSize: '48px'
                                                    }}>
                                                        📄
                                                    </div>
                                                )}
                                            </div>
                                        
                                            <div className="team-content">
                                                <h2>{item.con_titulo || 'Sin título'}</h2>
                                                <span style={{
                                                    fontSize: '14px',
                                                    color: '#666',
                                                    display: 'block',
                                                    marginTop: '8px'
                                                }}>
                                                    {descripcionLimpia.substring(0, 80)}...
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <div className="col-12 text-center">
                                <p>No hay comunicados registrados</p>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Comunicas);