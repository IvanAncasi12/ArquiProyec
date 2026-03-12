"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import api from '@/plugins/axios'

const ServiceSection3 = () => {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const cleanHTML = (html) => {
        if (!html) return '';
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    };

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const result = await api.get('/institucion/21/gacetaEventos')
                const cursosData = result.data.cursos || []
                setCursos(cursosData)
            } catch (error) {
                setCursos([])
            } finally {
                setLoading(false);
            }
        };

        fetchCursos();
    }, []);

    if (loading) {
        return (
            <section className="Arkitek-service-section section-padding" style={{
                position: 'relative',
                padding: '80px 0',
                margin: '40px 0',
                zIndex: 1
            }}>
                <div className="container text-center py-5">
                    <p>Cargando cursos...</p>
                </div>
            </section>
        )
    }

    return (
        <section className="Arkitek-service-section section-padding" style={{
            position: 'relative',
            padding: '80px 0',
            margin: '40px 0',
            zIndex: 1
        }}>
            <div className="container" style={{position: 'relative', zIndex: 2}}>
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
                            const descripcionLimpia = cleanHTML(curso.det_descripcion)
                            const tituloLimpio = cleanHTML(curso.det_titulo)

                            let imageUrl = curso.det_imagen || curso.det_imagen_curso || curso.imagen || curso.imagen_url || null;
                            if (imageUrl && typeof imageUrl === 'string' && !imageUrl.startsWith('http')) {
                                imageUrl = `https://apiadministrador.upea.bo${imageUrl}`
                            }

                            return (
                                <div className="service-item-wrap" key={curso.iddetalle_cursos_academicos || index}>
                                    <div className="service-item">
                                        <div className="icon" style={{
                                            position: "relative",
                                            width: "100%",
                                            minHeight: "150px",
                                            padding: "0",
                                            borderRadius: "16px",
                                            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                                            marginBottom: "10px",
                                            overflow: 'hidden',
                                            background: imageUrl ? 'transparent' : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            {imageUrl ? (
                                                <div style={{position: 'relative', width: '100%'}}>
                                                    <Image
                                                        src={imageUrl}
                                                        alt={tituloLimpio || 'CURSO'}
                                                        width={700}
                                                        height={350}
                                                        style={{objectFit: 'cover', width: '100%', height: '100%'}}
                                                        unoptimized={true}
                                                    />
                                                    <div style={{position: 'absolute', left: '20px', bottom: '20px', color: 'white'}}>
                                                        <h3 style={{
                                                            fontSize: "20px",
                                                            fontWeight: "700",
                                                            margin: 0,
                                                            textShadow: '0 2px 6px rgba(0,0,0,0.5)'
                                                        }}>{tituloLimpio || 'CURSO'}</h3>
                                                        <div style={{
                                                            fontSize: "12px",
                                                            opacity: 0.95,
                                                            backgroundColor: "rgba(0,0,0,0.35)",
                                                            padding: "5px 10px",
                                                            borderRadius: "16px",
                                                            display: "inline-block",
                                                            marginTop: '6px'
                                                        }}>{curso.det_modalidad || 'VIRTUAL'}</div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div style={{textAlign: "center", color: "white", padding: '30px'}}>
                                                    <h3 style={{
                                                        fontSize: "24px",
                                                        fontWeight: "bold",
                                                        marginBottom: "10px",
                                                        margin: "0"
                                                    }}>
                                                        {tituloLimpio || 'CURSO'}
                                                    </h3>
                                                    <div style={{
                                                        fontSize: "14px",
                                                        opacity: 0.9,
                                                        backgroundColor: "rgba(255,255,255,0.2)",
                                                        padding: "5px 15px",
                                                        borderRadius: "20px",
                                                        display: "inline-block"
                                                    }}>
                                                        {curso.det_modalidad || 'VIRTUAL'}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="text" style={{
                                            padding: "20px",
                                            backgroundColor: "white",
                                            borderRadius: "0 0 16px 16px",
                                            boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
                                        }}>
                                            <p style={{
                                                fontSize: "14px",
                                                color: "#666",
                                                lineHeight: "1.6",
                                                margin: "0"
                                            }}>
                                                {descripcionLimpia.substring(0, 150)}...
                                            </p>
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