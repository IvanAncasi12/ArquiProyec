"use client";
import React, { useEffect, useState } from 'react';
import api from '@/plugins/axios';

const ObjetivoArqui = (props) => {
    const [institucion, setInstitucion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get('/institucionesPrincipal/21');
                const data = res.data?.Descripcion || res.data?.data || res.data || {};
                setInstitucion(data);
            } catch (err) {
                console.error('❌ Error fetching institución:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <section className="Arkitek-objetivo-arqui-section section-padding">
                <div className="container text-center py-5">
                    <p style={{ color: '#491d5aff', fontSize: '18px', fontWeight: '500', fontFamily: "'Poppins', sans-serif" }}>
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
                
                .objetivo-arqui-section {
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
                
                .card.objetivo {
                    background: white;
                    color: #491d5aff;
                    border: 2px solid #491d5aff;
                }
                
                .card.sobre {
                    background: linear-gradient(135deg, #491d5aff 0%, #5e2a75 100%);
                    color: white;
                    border: 2px solid transparent;
                }
                
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
                
                .card.objetivo h3 {
                    color: #491d5aff;
                    text-shadow: 1px 1px 2px rgba(73, 29, 90, 0.1);
                }
                
                .card.sobre h3 {
                    color: white;
                    border-bottom-color: rgba(255, 255, 255, 0.3);
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                }
                
                .card h3::after {
                    content: '✦';
                    font-size: 20px;
                    opacity: 0.7;
                }
                
                .card-content {
                    font-size: 16px;
                    line-height: 2;
                    text-align: justify;
                    font-weight: 400;
                }
                
                .card.objetivo .card-content {
                    color: #2d2d2d;
                }
                
                .card.sobre .card-content {
                    color: rgba(255, 255, 255, 0.95);
                }
                
                .card-content p {
                    margin-bottom: 18px;
                    font-weight: 300;
                }
                
                .card-content strong {
                    font-weight: 700;
                    color: inherit;
                }
                
                .card.objetivo .card-content strong {
                    color: #491d5aff;
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
                    color: #491d5aff;
                    font-weight: bold;
                }
                
                .card.sobre .card-content li::before {
                    color: white;
                }
                
                /* Efecto de brillo al hover en la card lila */
                .card.sobre::after {
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
                
                .card.sobre:hover::after {
                    opacity: 1;
                }
                
                /* Animación de entrada */
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
                }
            `}</style>
            
            <section className={`objetivo-arqui-section ${props.oaClass || ''}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="wpo-section-title text-center">
                                <span style={{ 
                                    color: '#491d5aff', 
                                    fontWeight: '700', 
                                    fontSize: '14px', 
                                    letterSpacing: '3px',
                                    textTransform: 'uppercase',
                                    display: 'block',
                                    marginBottom: '10px',
                                    fontFamily: "'Poppins', sans-serif"
                                }}>
                                    ARQUITECTURA
                                </span>
                                <h2 style={{ 
                                    color: '#491d5aff', 
                                    fontSize: '36px', 
                                    fontWeight: '800',
                                    textShadow: '2px 2px 4px rgba(73, 29, 90, 0.1)',
                                    margin: 0,
                                    fontFamily: "'Poppins', sans-serif"
                                }}>
                                    {institucion?.institucion_nombre || 'Carrera de Arquitectura'}
                                </h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="two-columns">
                        <div className="card objetivo">
                            <h3>Objetivo</h3>
                            {institucion?.institucion_objetivos ? (
                                <div 
                                    className="card-content"
                                    dangerouslySetInnerHTML={{
                                        __html: institucion.institucion_objetivos
                                    }}
                                />
                            ) : (
                                <p className="card-content" style={{ fontStyle: 'italic', opacity: 0.7 }}>
                                    No hay información de objetivo disponible
                                </p>
                            )}
                        </div>
                        <div className="card sobre">
                            <h3>Sobre Nosotros</h3>
                            {institucion?.institucion_sobre_ins ? (
                                <div 
                                    className="card-content"
                                    dangerouslySetInnerHTML={{
                                        __html: institucion.institucion_sobre_ins
                                    }}
                                />
                            ) : (
                                <p className="card-content" style={{ fontStyle: 'italic', opacity: 0.9 }}>
                                    No hay información disponible sobre la institución
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ObjetivoArqui;