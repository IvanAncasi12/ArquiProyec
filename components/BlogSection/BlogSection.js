"use client";
import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle'
import Link from 'next/link'
import Image from 'next/image'
import api from '@/plugins/axios'

const WBlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await api.get('/institucion/21/gacetaEventos')
                
                console.log('🔍 Respuesta eventos:', result.data)
                
                const eventosData = result.data.upea_evento || 
                                   result.data.upea_gaceta_universitaria || 
                                   result.data.gacetaEventos || 
                                   result.data.eventos || 
                                   []
                
                console.log('🔍 Eventos extraídos:', eventosData)
                setUsers(Array.isArray(eventosData) ? eventosData : [])
                
            } catch (error) {
                console.error("❌ Error al obtener eventos:", error);
                setUsers([])
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);
    
    if (loading) {
        return (
            <section className="wpo-blog-section-s2 section-padding" id="gallery">
                <div className="container text-center py-5">
                    <p>Cargando eventos...</p>
                </div>
            </section>
        )
    }

    return (
        <section className="wpo-blog-section-s2 section-padding" id="gallery">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subTitle={'Carrera de Arquitectura'} Title={'Eventos'} />
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gallery-container clearfix">
                                {users.length > 0 ? (
                                    users.map((user, index) => {
                                        // 👉 Construir URL de imagen correctamente
                                        const imageUrl = user.evento_imagen?.startsWith('http') 
                                            ? user.evento_imagen 
                                            : `https://servicioadministrador.upea.bo/contenido/21${user.evento_imagen}`
                                        
                                        return (
                                            <div className="grid" key={index} style={{width: '100%', height: 'auto'}}>
                                                <div>
                                                    <div className="image" style={{position: 'relative', width: '100%', height: '400px', overflow: 'hidden'}}>
                                                        <Image 
                                                            src={imageUrl}
                                                            alt={user.evento_titulo || 'Evento'}
                                                            fill
                                                            style={{objectFit: 'cover'}}
                                                            unoptimized={true}
                                                            onError={() => {
                                                                console.warn('❌ Error cargando imagen:', imageUrl)
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="thumb">
                                                            <ul>
                                                                <li>
                                                                    {user.evento_lugar || user.lugar || ''} 
                                                                    {user.evento_fecha && (
                                                                        <p dangerouslySetInnerHTML={{ __html: user.evento_fecha }} />
                                                                    )}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h2>
                                                            <p dangerouslySetInnerHTML={{ 
                                                                __html: user.evento_titulo || user.titulo || 'Sin título' 
                                                            }} />
                                                        </h2>
                                                        <p dangerouslySetInnerHTML={{ 
                                                            __html: user.evento_descripcion || user.descripcion || '' 
                                                        }} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                ) : (
                                    <div className="col-12 text-center py-5">
                                        <p>No hay eventos disponibles</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;