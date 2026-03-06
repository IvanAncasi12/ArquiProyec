"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import api from '@/plugins/axios'

const About3 = (props) => {
    const [institucion, setInstitucion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const fetchInstitucion = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await api.get('/institucionesPrincipal/21', {
                timeout: 10000
            });
            
            const data = response.data?.Descripcion || response.data?.data || response.data;
            
            if (!data) {
                throw new Error('No se encontraron datos en la respuesta');
            }
            
            setInstitucion(data);
            setError(null);
            
        } catch (error) {
            console.error('❌ Error al cargar institución:', error);
            
            let errorMessage = 'Error de conexión';
            
            if (error.code === 'ECONNABORTED') {
                errorMessage = 'Tiempo de espera agotado. El servidor tarda demasiado en responder.';
            } else if (error.response) {
                switch (error.response.status) {
                    case 404: errorMessage = 'No se encontró la institución solicitada.'; break;
                    case 500: errorMessage = 'Error en el servidor. Intente más tarde.'; break;
                    case 403: errorMessage = 'Acceso denegado. Verifique sus permisos.'; break;
                    case 401: errorMessage = 'No autorizado. Verifique su autenticación.'; break;
                    default: errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
                }
            } else if (error.request) {
                errorMessage = 'No se pudo conectar con el servidor. Verifique su conexión a internet.';
            } else {
                errorMessage = error.message || 'Error desconocido';
            }
            
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInstitucion();
    }, []);

    const handleRetry = () => {
        setRetryCount(prev => prev + 1);
        fetchInstitucion();
    };

    if (loading) {
        return (
            <section className="Arkitek-about-section-s3 section-padding">
                <div className="container text-center py-5">
                    <p style={{ color: '#491d5aff', fontSize: '18px', fontWeight: '500', fontFamily: "'Poppins', sans-serif" }}>
                        Cargando información de la institución...
                    </p>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section className="Arkitek-about-section-s3 section-padding">
                <div className="container text-center py-5">
                    <div style={{ 
                        background: 'linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%)', 
                        border: '2px solid #ffcdd2', 
                        borderRadius: '16px', 
                        padding: '40px 30px',
                        fontFamily: "'Poppins', sans-serif",
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        <div style={{ fontSize: '60px', marginBottom: '15px' }}>⚠️</div>
                        <h3 style={{ color: '#c62828', marginBottom: '10px', fontWeight: '700', fontSize: '24px' }}>
                            Error al cargar los datos
                        </h3>
                        <p style={{ color: '#666', marginBottom: '20px', fontSize: '15px', lineHeight: '1.6' }}>{error}</p>
                        
                        {retryCount > 0 && (
                            <p style={{ color: '#999', marginBottom: '15px', fontSize: '13px' }}>
                                Intento {retryCount} de 3
                            </p>
                        )}
                        
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button 
                                onClick={handleRetry}
                                disabled={retryCount >= 3}
                                style={{
                                    background: retryCount >= 3 ? '#ccc' : '#491d5aff',
                                    color: 'white',
                                    border: 'none',
                                    padding: '12px 30px',
                                    borderRadius: '8px',
                                    cursor: retryCount >= 3 ? 'not-allowed' : 'pointer',
                                    fontWeight: '600',
                                    fontFamily: "'Poppins', sans-serif",
                                    transition: 'all 0.3s',
                                    fontSize: '14px'
                                }}
                            >
                                🔄 Reintentar
                            </button>
                            <button 
                                onClick={() => window.location.reload()}
                                style={{
                                    background: 'white',
                                    color: '#491d5aff',
                                    border: '2px solid #491d5aff',
                                    padding: '12px 30px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontFamily: "'Poppins', sans-serif",
                                    transition: 'all 0.3s',
                                    fontSize: '14px'
                                }}
                            >
                                🏠 Recargar página
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (!institucion) {
        return (
            <section className="Arkitek-about-section-s3 section-padding">
                <div className="container text-center py-5">
                    <p style={{ color: '#666', fontFamily: "'Poppins', sans-serif" }}>
                        No se encontraron datos de la institución
                    </p>
                </div>
            </section>
        )
    }

    return (
        <>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
                
                .about-section {
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
                
                /* === CONTACT CARD (BLANCO) === */
                .contact-card {
                    background: white;
                    color: #491d5aff;
                    border: 2px solid #491d5aff;
                }
                
                .contact-card h3 {
                    color: #491d5aff;
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
                    text-shadow: 1px 1px 2px rgba(73, 29, 90, 0.1);
                }
                
                .contact-card h3::after {
                    content: '✦';
                    font-size: 20px;
                    opacity: 0.7;
                }
                
                .contact-item {
                    margin-bottom: 25px;
                    display: flex;
                    align-items: flex-start;
                    padding: 15px;
                    border-radius: 12px;
                    transition: background 0.3s ease;
                }
                
                .contact-item:hover {
                    background: rgba(73, 29, 90, 0.05);
                }
                
                .contact-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #491d5aff, #5e2a75);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 18px;
                    flex-shrink: 0;
                    box-shadow: 0 5px 15px rgba(73, 29, 90, 0.3);
                }
                
                .contact-icon i {
                    font-size: 22px;
                    color: white;
                }
                
                .contact-details h5 {
                    color: #491d5aff;
                    font-size: 15px;
                    font-weight: 700;
                    margin-bottom: 6px;
                    letter-spacing: 0.5px;
                }
                
                .contact-details p, .contact-details a {
                    font-size: 14px;
                    margin: 0;
                    color: #2d2d2d;
                    text-decoration: none;
                    line-height: 1.7;
                    font-weight: 400;
                }
                
                .contact-details a {
                    color: #491d5aff;
                    font-weight: 500;
                    transition: color 0.3s;
                }
                
                .contact-details a:hover {
                    color: #5e2a75;
                    text-decoration: none;
                }
                
                /* === PROFILE CARD (LILA) === */
                .profile-card {
                    background: linear-gradient(135deg, #491d5aff 0%, #5e2a75 100%);
                    color: white;
                    border: 2px solid transparent;
                }
                
                .profile-card h3 {
                    color: white;
                    font-size: 28px;
                    font-weight: 800;
                    margin-bottom: 25px;
                    padding-bottom: 20px;
                    border-bottom: 3px solid rgba(255, 255, 255, 0.3);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                }
                
                .profile-card h3::after {
                    content: '✦';
                    font-size: 20px;
                    opacity: 0.7;
                }
                
                .profile-content {
                    color: #ffffff;
                    line-height: 2;
                    font-size: 16px;
                    text-align: justify;
                    font-weight: 400;
                }
                
                .profile-content p {
                    margin-bottom: 18px;
                    font-weight: 300;
                }
                
                .profile-content strong {
                    color: #ffffff;
                    font-weight: 700;
                }
                
                .profile-content ul {
                    padding-left: 25px;
                    margin: 20px 0;
                }
                
                .profile-content li {
                    margin-bottom: 12px;
                    position: relative;
                    padding-left: 10px;
                }
                
                .profile-content li::before {
                    content: '▹';
                    position: absolute;
                    left: -15px;
                    color: #ffffff;
                    font-weight: bold;
                }
                
                /* === EFECTO BRILLO PARA CARD LILA === */
                .profile-card::after {
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
                
                .profile-card:hover::after {
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
                
                .contact-card, .profile-card {
                    animation: fadeInUp 0.6s ease forwards;
                }
                
                .profile-card {
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
                    
                    .contact-card, .profile-card {
                        padding: 30px;
                    }
                    
                    .contact-card h3, .profile-card h3 {
                        font-size: 24px;
                    }
                    
                    .wpo-section-title h2 {
                        font-size: 28px !important;
                    }
                }
            `}</style>
            
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-section-title text-center">
                                <span>INFORMACIÓN DE LA CARRERA</span>
                                <h2>{institucion?.institucion_nombre || 'Arquitectura'}</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="two-columns">
                        {/* Columna Izquierda - Contacto (FONDO BLANCO) */}
                        <div className="card contact-card">
                            <h3>📞 Contáctanos</h3>
                            
                            {institucion?.institucion_direccion && (
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fi flaticon-location"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h5>Dirección:</h5>
                                        <p>{institucion.institucion_direccion}</p>
                                    </div>
                                </div>
                            )}
                            
                            {(institucion?.institucion_telefono1 || institucion?.institucion_telefono2) && (
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fi flaticon-phone"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h5>Teléfonos:</h5>
                                        {institucion.institucion_telefono1 && (
                                            <p>📱 {institucion.institucion_telefono1}</p>
                                        )}
                                        {institucion.institucion_telefono2 && institucion.institucion_telefono2 !== institucion.institucion_telefono1 && (
                                            <p>📱 {institucion.institucion_telefono2}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                            
                            {(institucion?.institucion_celular1 || institucion?.institucion_celular2) && (
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fi flaticon-smartphone"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h5>Celulares:</h5>
                                        {institucion.institucion_celular1 && (
                                            <p>📲 {institucion.institucion_celular1}</p>
                                        )}
                                        {institucion.institucion_celular2 && institucion.institucion_celular2 !== institucion.institucion_celular1 && (
                                            <p>📲 {institucion.institucion_celular2}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                            
                            {(institucion?.institucion_correo1 || institucion?.institucion_correo2) && (
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fi flaticon-email"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h5>Correos:</h5>
                                        {institucion.institucion_correo1 && (
                                            <a href={`mailto:${institucion.institucion_correo1}`}>
                                                ✉️ {institucion.institucion_correo1}
                                            </a>
                                        )}
                                        {institucion.institucion_correo2 && institucion.institucion_correo2 !== institucion.institucion_correo1 && (
                                            <a href={`mailto:${institucion.institucion_correo2}`}>
                                                ✉️ {institucion.institucion_correo2}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                            
                            {institucion?.institucion_facebook && (
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fi flaticon-facebook"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h5>Facebook:</h5>
                                        <a href={institucion.institucion_facebook} target="_blank" rel="noopener noreferrer">
                                            Visítanos en Facebook
                                        </a>
                                    </div>
                                </div>
                            )}
                            
                            {institucion?.institucion_youtube && (
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fi flaticon-youtube"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h5>YouTube:</h5>
                                        <a href={institucion.institucion_youtube} target="_blank" rel="noopener noreferrer">
                                            Canal de YouTube
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="card profile-card">
                            <h3>🎓 Perfil Profesional</h3>
                            {institucion?.institucion_historia ? (
                                <div 
                                    className="profile-content"
                                    dangerouslySetInnerHTML={{
                                        __html: institucion.institucion_historia
                                    }}
                                />
                            ) : (
                                <p style={{ fontStyle: 'italic', opacity: 0.9 }}>
                                    No hay información del perfil profesional disponible
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About3;