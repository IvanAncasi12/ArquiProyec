"use client";
import React, { useEffect, useState } from 'react';
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
        const fetchUsers = async () => {
          try {
            // 👇 Usamos 'result' en lugar de 'response' para evitar conflicto
            const result = await api.get('/institucion/21/contenido') // 👈 Endpoint para obtener autoridades (ajusta si es otro)
            
            console.log('🔍 Respuesta completa del API:', result.data)
            
            // 👇 Extraemos los datos según la estructura que veo en tu consola
            // Probablemente las autoridades están en alguna de estas propiedades
            const autoridadesData = result.data.upea_publicaciones || 
                                   result.data.linksExternoInterno || 
                                   result.data.links || 
                                   result.data.autoridad ||
                                   []
            
            console.log('🔍 Datos de autoridades extraídos:', autoridadesData)
            
            // Nos aseguramos de que sea un array
            if (Array.isArray(autoridadesData)) {
                setUsers(autoridadesData)
            } else {
                console.warn('⚠️ Los datos no son un array:', autoridadesData)
                setUsers([])
            }
            
          } catch (error) {
            console.error("❌ Error al obtener autoridades:", error);
            setUsers([])
          } finally {
            setLoading(false);
          }
        };
    
        fetchUsers();
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
                        users.map((user, index) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={index}>
                                <div className="team-item">
                                    <div className="image">
                                        <div className="shape-1"></div>
                                        <Image 
                                            src={
                                                user.foto_autoridad?.startsWith('http') 
                                                ? user.foto_autoridad 
                                                : `https://servicioadministrador.upea.bo/contenido/21${user.foto_autoridad}`
                                            } 
                                            alt={user.nombre_autoridad || 'Autoridad'} 
                                            width={200} 
                                            height={200} 
                                            unoptimized={true}
                                        />
                                        <ul className="icon">
                                            <li><Link onClick={ClickHandler} href="#" aria-label="Facebook"><i className="ti-facebook"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="#" aria-label="Twitter"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="#" aria-label="Instagram"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <h2>{user.cargo_autoridad || user.cargo || 'Sin cargo'}</h2>
                                        <span>{user.nombre_autoridad || user.nombre || 'Sin nombre'}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p>No hay autoridades registradas</p>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;