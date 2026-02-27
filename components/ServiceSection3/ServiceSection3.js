"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/plugins/axios'

const ServiceSection3 = () => {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const result = await api.get('/institucion/21/gacetaEventos')
                
                console.log('🔍 Respuesta completa:', result.data)
                
                const cursosData = result.data.cursos || []
                
                console.log('✅ Cursos encontrados:', cursosData.length)
                cursosData.forEach((curso, index) => {
                    console.log(`📄 Curso ${index}:`, curso.det_titulo)
                    console.log(`   🖼️ Imagen:`, curso.det_img_portada)
                })
                
                setCursos(cursosData)
                
            } catch (error) {
                console.error("❌ Error al obtener cursos:", error);
                setCursos([])
            } finally {
                setLoading(false);
            }
        };

        fetchCursos();
    }, []);

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
                            // URLs posibles para intentar
                            const imagenPath = curso.det_img_portada || ''
                            
                            return (
                                <div className="service-item-wrap" key={curso.iddetalle_cursos_academicos || index}>
                                    <div className="service-item">
                                        <div className="icon" style={{
                                            position: "relative",
                                            width: "800px",
                                            height: "150px",
                                            overflow: "hidden",
                                            borderRadius: "16px",
                                            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                                            marginBottom: "10px",
                                            backgroundColor: "#f5f5f5",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            {/* 👇 Usar img en lugar de Image para evitar problemas de CORS */}
                                            <img
                                                src={`https://servicioadministrador.upea.bo/Cursos/${imagenPath}`}
                                                alt={curso.det_titulo || "curso"}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0
                                                }}
                                                onError={(e) => {
                                                    console.error(`❌ Imagen no encontrada:`, curso.det_img_portada)
                                                    // Ocultar imagen y mostrar placeholder
                                                    e.target.style.display = 'none'
                                                    
                                                    // Mostrar el div placeholder que ya está abajo
                                                    const placeholder = e.target.parentNode.querySelector('.placeholder')
                                                    if (placeholder) {
                                                        placeholder.style.display = 'flex'
                                                    }
                                                }}
                                                onLoad={() => {
                                                    console.log(`✅ Imagen cargada:`, curso.det_titulo)
                                                }}
                                            />
                                            
                                            {/* Placeholder - Se muestra si la imagen falla */}
                                            <div className="placeholder" style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                display: "none", // Se muestra solo si falla la imagen
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "white",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                                padding: "20px"
                                            }}>
                                                <div>
                                                    <div style={{fontSize: "48px", marginBottom: "10px"}}>📚</div>
                                                    <div>{curso.det_titulo || 'CURSO'}</div>
                                                    <div style={{fontSize: "12px", marginTop: "5px", opacity: 0.8}}>
                                                        {curso.det_modalidad || ''}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h2>
                                                <Link onClick={ClickHandler} href="#">
                                                    <span dangerouslySetInnerHTML={{ 
                                                        __html: curso.det_titulo || 'Sin título' 
                                                    }} />
                                                </Link>
                                            </h2>
                                            <p dangerouslySetInnerHTML={{ 
                                                __html: curso.det_descripcion || curso.det_modalidad || '' 
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