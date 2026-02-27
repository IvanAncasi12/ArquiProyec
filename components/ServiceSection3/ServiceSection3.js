"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import api from '@/plugins/axios' // 👈 Importamos axios configurado

const ServiceSection3 = () => {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                // 👇 Usamos el nuevo servicio con axios configurado
                const result = await api.get('/institucion/21/gacetaEventos')
                
                console.log('🔍 Respuesta gacetaEventos:', result.data)
                
                // 👇 Extraer los datos según la estructura del API
                // Ajusta la propiedad según donde estén los cursos/ofertas
                const cursosData = result.data.cursos || 
                                  result.data.ofertasAcademicas || 
                                  result.data.ofertas_academicas || 
                                  result.data.gacetaEventos || 
                                  result.data.data || 
                                  (Array.isArray(result.data) ? result.data : [])
                
                console.log('🔍 Cursos extraídos:', cursosData)
                
                if (Array.isArray(cursosData)) {
                    setCursos(cursosData)
                } else {
                    console.warn('⚠️ Los datos no son un array:', cursosData)
                    setCursos([])
                }
                
            } catch (error) {
                console.error("❌ Error al obtener cursos:", error);
                setCursos([])
            } finally {
                setLoading(false);
            }
        };

        fetchCursos();
    }, []);

    // Estado de carga
    if (loading) {
        return (
            <section className="Arkitek-service-section section-padding">
                <div className="container text-center py-5">
                    <p>Cargando cursos...</p>
                </div>
            </section>
        )
    }

    return (
        <section className="Arkitek-service-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <span>cursos</span>
                            <h2>Arquitectura</h2>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    {cursos.length > 0 ? (
                        cursos.map((curso, index) => {
                            // 👇 Construir URL de imagen correctamente (sin espacios)
                            const imageUrl = curso.det_img_portada?.startsWith('http')
                                ? curso.det_img_portada
                                : `https://servicioadministrador.upea.bo/recursos/${curso.det_img_portada}`
                            
                            return (
                                <div className="service-item-wrap" key={curso.id || index}>
                                    <div className="service-item">
                                        <div className="icon" style={{
                                            position: "relative",
                                            width: "800px",
                                            height: "150px",
                                            overflow: "hidden",
                                            borderRadius: "16px",
                                            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                                            marginBottom: "10px"
                                        }}>
                                            <Image
                                                src={imageUrl}
                                                alt={curso.det_titulo || "curso"}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                unoptimized={true}
                                                onError={(e) => {
                                                    console.warn('❌ Error cargando imagen:', imageUrl)
                                                    e.target.style.opacity = '0.5'
                                                }}
                                            />
                                        </div>
                                        <div className="text">
                                            <h2>
                                                <Link onClick={ClickHandler} href="#">
                                                    <span dangerouslySetInnerHTML={{ 
                                                        __html: curso.det_titulo || curso.titulo || curso.nombre || 'Sin título' 
                                                    }} />
                                                </Link>
                                            </h2>
                                            <p dangerouslySetInnerHTML={{ 
                                                __html: curso.det_modalidad || curso.modalidad || curso.descripcion || '' 
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="col-12 text-center py-4">
                            <p>No hay cursos disponibles</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection3;
