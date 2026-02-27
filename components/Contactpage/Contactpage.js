"use client";
import React, { useEffect, useState } from 'react';
import ContactForm from '../ContactFrom'
import api from '@/plugins/axios'

const Contactpage = () => {
    const [institucion, setInstitucion] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchInstitucion = async () => {
            try {
                const response = await api.get('/institucionesPrincipal/21')
                setInstitucion(response.data)
            } catch (error) {
                console.error("❌ Error al obtener datos de contacto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInstitucion();
    }, []);
    if (loading) {
        return (
            <section className="wpo-contact-pg-section section-padding">
                <div className="container text-center py-5">
                    <p>Cargando información de contacto...</p>
                </div>
            </section>
        )
    }

    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                {institucion && (
<>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Dirección</h2>
                                            <div className="text">
                                                <p>{institucion.institucion_direccion || institucion.direccion || institucion.address || 'Sin dirección registrada'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Correo Electrónico</h2>
                                            {/* 👇 Validamos que existan antes de renderizar */}
                                            {institucion.institucion_correo1 && <p>{institucion.institucion_correo1}</p>}
                                            {institucion.institucion_correo2 && <p>{institucion.institucion_correo2}</p>}
                                            {/* Fallback si los nombres cambian */}
                                            {!institucion.institucion_correo1 && !institucion.institucion_correo2 && (
                                                <>
                                                    {institucion.correo_principal && <p>{institucion.correo_principal}</p>}
                                                    {institucion.correo_secundario && <p>{institucion.correo_secundario}</p>}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Teléfono</h2>
                                            {institucion.institucion_celular1 && <p>{institucion.institucion_celular1}</p>}
                                            {institucion.institucion_celular2 && <p>{institucion.institucion_celular2}</p>}
                                            {/* Fallback si los nombres cambian */}
                                            {!institucion.institucion_celular1 && !institucion.institucion_celular2 && (
                                                <>
                                                    {institucion.telefono_principal && <p>{institucion.telefono_principal}</p>}
                                                    {institucion.telefono_secundario && <p>{institucion.telefono_secundario}</p>}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                </>
                )}
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>¿Dónde puedes encontrarnos?</h2>
                            <p>{institucion?.institucion_direccion || 'Av. Sucre Z. Villa Esperanza, Campus Upea Bloque B Piso 3.'}</p>
                        </div>
                        {/*  <div className="wpo-contact-form-area">
                            <ContactForm />
                        </div> */}
                    </div>
                </div>
            </div>
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d713.6885377271602!2d-68.19414190200722!3d-16.49238963172233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf00108c36d3%3A0x13ada1efc0fad78b!2sARQUITECTURA!5e0!3m2!1ses-419!2sbo!4v1761579901445!5m2!1ses-419!2sbo"
                        style={{
                            border: 0,
                            width: "100%",
                            height: "min(60vh, 520px)",
                            filter: "none",
                            WebkitFilter: "none",
                            mixBlendMode: "normal",
                            background: "transparent"
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <style jsx>{`
                    .wpo-contact-map, .wpo-contact-map * {
                        filter: none !important;
                        -webkit-filter: none !important;
                        mix-blend-mode: normal !important;
                    }
                `}</style>
            </section>
        </section>
    )
}

export default Contactpage;