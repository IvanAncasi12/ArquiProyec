"use client";
import React, { useEffect, useState, memo } from 'react';
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';
import api from '@/plugins/axios'

const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let isMounted = true;
        
        const fetchUsers = async () => {
          try {
            const result = await api.get('/institucion/21/contenido')
            
            console.log('🔍 Respuesta autoridades:', result.data)
            
            const autoridadesData = result.data.autoridad || 
                                   result.data.upea_publicaciones || 
                                   result.data.linksExternoInterno || 
                                   result.data.links ||
                                   []
            
            if (isMounted && Array.isArray(autoridadesData)) {
                setUsers(autoridadesData)
            }
            
          } catch (error) {
            console.error("❌ Error al obtener autoridades:", error);
            if (isMounted) setUsers([])
          } finally {
            if (isMounted) setLoading(false);
          }
        };
    
        fetchUsers();
        
        return () => { isMounted = false; }
    }, []);
      
    if (loading) {
        return (
            <section className="Arkitek-team-section-s2 section-padding">
                <div className="container text-center py-5">
                    <p>Cargando autoridades...</p>
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
                            <SectionTitle subTitle={'ARQUITECTURA'} Title={'Autoridades'} />
                        </div>
                    </div>
                    <div className="team-wrapar">
                        <div className="row">
                        {users.length > 0 ? (
                            users.map((user, index) => {
                                const imageUrl = user.foto_autoridad?.startsWith('http') 
                                    ? user.foto_autoridad 
                                    : `https://servicioadministrador.upea.bo/contenido/${user.foto_autoridad}`
                                
                                // 👇 Extraer URLs de redes sociales (ajusta según los campos reales)
                                const facebookUrl = user.facebook_autoridad || user.facebook || ''
                                const twitterUrl = user.twitter_autoridad || user.twiter_autoridad || user.twitter || ''
                                const instagramUrl = user.instagram_autoridad || user.instagram || ''
                                
                                return (
                                    <div className="col col-lg-4 col-md-6 col-12" key={user.id || index}>
                                        <div className="team-item">
                                            <div className="image" style={{
                                                position: 'relative',
                                                width: '100%',
                                                height: '250px',
                                                overflow: 'hidden',
                                                borderRadius: '8px'
                                            }}>
                                                <Image 
                                                    src={imageUrl}
                                                    alt={user.nombre_autoridad || 'Autoridad'}
                                                    fill
                                                    style={{objectFit: 'cover'}}
                                                    unoptimized={true}
                                                    priority={index < 3}
                                                    onError={(e) => {
                                                        console.warn('❌ Error imagen:', imageUrl)
                                                        e.target.style.opacity = '0.5'
                                                    }}
                                                />
                                            </div>
                                        
                                            <div className="team-content">
                                                <h2>{user.cargo_autoridad || user.cargo || 'Sin cargo'}</h2>
                                                <span>{user.nombre_autoridad || user.nombre || 'Sin nombre'}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <div className="col-12 text-center">
                                <p>No hay autoridades registradas</p>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(TeamSection);