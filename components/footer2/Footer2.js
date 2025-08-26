"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Logo from '/public/images/logo-arquitectura.png'
import Services from '../../api/Services';
import Image from 'next/image';



const Footer2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const [institucion, setInstitucion] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchInstitucion = async () => {
            try {
                const response = await fetch("https://serviciopagina.upea.bo/api/InstitucionUPEA/21");
                const data = await response.json();
                setInstitucion(data.Descripcion);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInstitucion();
    }, []);
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
                                            <li><i className="fi flaticon-email"></i>{institucion.institucion_correo1}</li>
                                            <li><i className="fi flaticon-phone-call"></i>{institucion.institucion_celular1}</li>
                                            <li><i className="fi flaticon-placeholder"></i><p dangerouslySetInnerHTML={{ __html: institucion.institucion_direccion }} /></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 order-1 order-md-2">
                            <div className="widget about-widget">

                                <div className="logo widget-title">
                                    <Image src={Logo} alt="logo" style={{ width: '80px', height: 'auto' }} />
                                </div>
                                <p>CARRERA DE ARQUITECTURA</p>
                                <p>"Piedra Historia y Cultura, adelante arquitectura"</p>
                                {institucion && (
                                    <ul>
                                        <li>
                                            <Link onClick={ClickHandler} href={institucion.institucion_facebook} Target="_blank">
                                                <i className="ti-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href={institucion.institucion_twitter} Target="_blank">
                                                <i className="ti-twitter-alt"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href={institucion.institucion_youtube} Target="_blank">
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