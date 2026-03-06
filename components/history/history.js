"use client";
import React, { useEffect, useState } from 'react';
import api from '@/plugins/axios';

const History = (props) => {
    const [institucion, setInstitucion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get('/institucionesPrincipal/21');
                const data = res.data?.Descripcion || res.data?.data || res.data || {};
                setInstitucion(data);
            } catch (err) {
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <section className="Arkitek-history-section section-padding">
                <div className="container text-center py-5">
                    <p style={{ 
                        color: '#491d5aff', 
                        fontSize: '18px', 
                        fontWeight: '500',
                        fontFamily: "'Poppins', sans-serif"
                    }}>
                        Cargando información...
                    </p>
                </div>
            </section>
        );
    }

    return (
        <>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
                
                .history-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #ede7f6 100%);
                    font-family: 'Poppins', sans-serif;
                }
                
                .two-columns {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    margin-top: 30px;
                }
                
                /* === CARD ESTILOS BASE === */
                .card {
                    padding: 40px;
                    border-radius: 20px;
                    box-shadow: 0 15px 40px rgba(73, 29, 90, 0.15);
                    height: 100%;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                    overflow: hidden;
                }
                
                .card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #491d5aff, #7b4397, #491d5aff);
                }
                
                .card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 25px 60px rgba(73, 29, 90, 0.25);
                }
                
                /* === CARD VISIÓN (BLANCO) === */
                .card.vision {
                    background: white;
                    color: #491d5aff;
                    border: 2px solid #491d5aff;
                }
                
                .card.vision h3 {
                    color: #491d5aff;
                    text-shadow: 1px 1px 2px rgba(73, 29, 90, 0.1);
                }
                
                .card.vision .card-content {
                    color: #2d2d2d;
                }
                
                .card.vision .card-content strong {
                    color: #491d5aff;
                }
                
                .card.vision .card-content li::before {
                    color: #491d5aff;
                }
                
                /* === CARD MISIÓN (LILA) === */
                .card.mission {
                    background: linear-gradient(135deg, #491d5aff 0%, #5e2a75 100%);
                    color: white;
                    border: 2px solid transparent;
                }
                
                .card.mission h3 {
                    color: white;
                    border-bottom-color: rgba(255, 255, 255, 0.3);
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                }
                
                .card.mission .card-content {
                    color: #ffffff;  /* ← BLANCO PURO */
                }
                
                .card.mission .card-content p {
                    color: #ffffff;  /* ← BLANCO PURO */
                }
                
                .card.mission .card-content strong {
                    color: #ffffff;  /* ← BLANCO PURO */
                    font-weight: 700;
                }
                
                .card.mission .card-content li {
                    color: #ffffff;  /* ← BLANCO PURO */
                }
                
                .card.mission .card-content li::before {
                    color: #ffffff;  /* ← BLANCO PURO */
                }
                
                /* === TÍTULOS === */
                .card h3 {
                    font-size: 28px;
                    font-weight: 800;
                    margin-bottom: 25px;
                    padding-bottom: 20px;
                    border-bottom: 3px solid rgba(73, 29, 90, 0.2);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    position: relative;
                }
                
                .card h3::after {
                    content: '✦';
                    font-size: 20px;
                    opacity: 0.7;
                }
                
                /* === CONTENIDO === */
                .card-content {
                    font-size: 16px;
                    line-height: 2;
                    text-align: justify;
                    font-weight: 400;
                }
                
                .card-content p {
                    margin-bottom: 18px;
                    font-weight: 300;
                }
                
                .card-content strong {
                    font-weight: 700;
                    color: inherit;
                }
                
                .card-content ul {
                    padding-left: 25px;
                    margin: 20px 0;
                }
                
                .card-content li {
                    margin-bottom: 12px;
                    position: relative;
                    padding-left: 10px;
                }
                
                .card-content li::before {
                    content: '▹';
                    position: absolute;
                    left: -15px;
                    font-weight: bold;
                }
                
                /* === EFECTO BRILLO PARA CARD LILA === */
                .card.mission::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }
                
                .card.mission:hover::after {
                    opacity: 1;
                }
                
                /* === ANIMACIÓN DE ENTRADA === */
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .card {
                    animation: fadeInUp 0.6s ease forwards;
                }
                
                .card:nth-child(2) {
                    animation-delay: 0.2s;
                }
                
                /* === TÍTULO DE SECCIÓN === */
                .wpo-section-title span {
                    color: #491d5aff !important;
                    font-weight: 700 !important;
                    font-size: 14px !important;
                    letter-spacing: 3px !important;
                    text-transform: uppercase !important;
                    display: block !important;
                    margin-bottom: 10px !important;
                    font-family: 'Poppins', sans-serif !important;
                }
                
                .wpo-section-title h2 {
                    color: #491d5aff !important;
                    font-size: 36px !important;
                    font-weight: 800 !important;
                    text-shadow: 2px 2px 4px rgba(73, 29, 90, 0.1) !important;
                    margin: 0 !important;
                    font-family: 'Poppins', sans-serif !important;
                }
                
                /* === RESPONSIVE === */
                @media (max-width: 991px) {
                    .two-columns {
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }
                    
                    .card {
                        padding: 30px;
                    }
                    
                    .card h3 {
                        font-size: 24px;
                    }
                    
                    .wpo-section-title h2 {
                        font-size: 28px !important;
                    }
                }
            `}</style>
            
            <section className={`history-section ${props.hClass || ''}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="wpo-section-title text-center">
                                <span>NUESTRA INSTITUCIÓN</span>
                                <h2>{institucion?.institucion_nombre || 'Carrera de Arquitectura'}</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="two-columns">
                        <div className="card vision">
                            <h3>Visión</h3>
                            {institucion?.institucion_vision ? (
                                <div 
                                    className="card-content"
                                    dangerouslySetInnerHTML={{
                                        __html: institucion.institucion_vision
                                    }}
                                />
                            ) : (
                                <p className="card-content" style={{ fontStyle: 'italic', opacity: 0.7 }}>
                                    No hay información de visión disponible
                                </p>
                            )}
                        </div>
                        
                        {/* Columna Derecha - Misión */}
                        <div className="card mission">
                            <h3>Misión</h3>
                            {institucion?.institucion_mision ? (
                                <div 
                                    className="card-content"
                                    dangerouslySetInnerHTML={{
                                        __html: institucion.institucion_mision
                                    }}
                                />
                            ) : (
                                <p className="card-content" style={{ fontStyle: 'italic', opacity: 0.9 }}>
                                    No hay información de misión disponible
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default History;