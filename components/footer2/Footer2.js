"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Logo from '/public/images/logo-arquitectura.png'
// import Services from '../../api/Services'; // 👈 Comentado si no se usa
import Image from 'next/image';
import api from '@/plugins/axios' // 👈 Importamos axios configurado

const Footer2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const [institucion, setInstitucion] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchInstitucion = async () => {
            try {
                // 👇 Usamos el nuevo servicio con axios configurado
                // Endpoint probable para datos generales de la institución
                const response = await api.get('/institucionesPrincipal/1')
                
                // 👇 Ajusta según la estructura real de la respuesta
                // console.log('Datos institución footer:', response.data) // 👈 Descomenta para depurar
                
                // Si la respuesta viene directa:
                setInstitucion(response.data)
                
                // Si viene anidada (ej: response.data.data o response.data.institucion):
                // setInstitucion(response.data.data || response.data.institucion)
                
            } catch (error) {
                console.error("❌ Error al obtener datos de la institución:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInstitucion();
    }, []);
    
    // Estado de carga (opcional, para mejor UX)
    if (loading) {
        return (
            <footer className="wpo-site-footer-s2">
                <div className="container text-center py-3">
                    <small>Cargando información...</small>
                </div>
            </footer>
        )
    }

    return (
        <footer className="wpo-site-footer-s2">
            <div className="shape-1">
                <svg width="596" height="590" viewBox="0 0 596 590" fill="none">
                    <path d="M148 590L596 0H0L148 590Z" />
                </svg>
            </div>
            <div className="shape-2">
                <svg width="328" height="510" viewBox="0 0 328 510" fill="none">
                    <path d="M62 0L328 226V510H62L0 472L62 0Z" />
                </svg>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 order-2 order-md-1">
                            {institucion && (
                                <div className="widget link-widget">

                                    <div className="widget-title">
                                        <h3>Contáctos</h3>
                                    </div>
                                    <div className="contact-ft">
                                        <ul>
                                            {/* 👇 Verifica los nombres de campos según la nueva respuesta */}
                                            <li>
                                                <i className="fi flaticon-email"></i>
                                                {institucion.institucion_correo1 || institucion.correo || ''}
                                            </li>
                                            <li>
                                                <i className="fi flaticon-phone-call"></i>
                                                {institucion.institucion_celular1 || institucion.telefono || ''}
                                            </li>
                                            <li>
                                                <i className="fi flaticon-placeholder"></i>
                                                <p dangerouslySetInnerHTML={{ 
                                                    __html: institucion.institucion_direccion || institucion.direccion || '' 
                                                }} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 order-1 order-md-2">
                            <div className="widget about-widget">

                                <div className="logo widget-title">
                                    <Image src={Logo} alt="logo" style={{ width: '80px', height: 'auto' }} unoptimized={true} />
                                </div>
                                <p>CARRERA DE ARQUITECTURA</p>
                                <p>"Piedra Historia y Cultura, adelante arquitectura"</p>
                                {institucion && (
                                    <ul>
                                        <li>
                                            <Link 
                                                onClick={ClickHandler} 
                                                href={institucion.institucion_facebook || institucion.facebook || '#'} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="ti-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                onClick={ClickHandler} 
                                                href={institucion.institucion_twitter || institucion.twitter || '#'} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="ti-twitter-alt"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                onClick={ClickHandler} 
                                                href={institucion.institucion_youtube || institucion.youtube || '#'} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                            <i className="ti-youtube"></i>
                                            </Link>
                                        </li>                                        
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 order-3">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Enlaces</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="#">Matriculación</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Inscripciones</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Campus Virtual</Link></li>
                                    <li><Link onClick={ClickHandler} href="#">Galeria</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer2;