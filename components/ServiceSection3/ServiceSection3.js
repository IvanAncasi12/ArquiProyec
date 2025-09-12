"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServiceSection3 = () => {
    const [cursos, setCursos] = useState([]);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const response = await fetch("https://serviciopagina.upea.bo/api/cursosAll/21");
                const data = await response.json();
                setCursos(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchCursos();
    }, []);

    return (
        <section className="Arkitek-service-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <span>cursos</span>
                            <h2> Arquitectura</h2>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    {cursos.map((curso, index) => (
                        <div className="service-item-wrap" key={index}>
                            <div className="service-item">
                                <div className="icon" style={{
                                    position: "relative",
                                    width: "800px",
                                    height: "150px",     // 🔥 aquí controlas el tamaño de la imagen
                                    overflow: "hidden",
                                    borderRadius: "16px", // 🔥 redondeo opcional
                                    boxShadow: "0 6px 18px rgba(0,0,0,0.1)", // 🔥 sombra alrededor
                                    marginBottom: "10px" // 🔥 espacio debajo de la imagen
                                }}>
                                    <Image
                                        src={`https://serviciopagina.upea.bo/Cursos/${curso.det_img_portada}`}
                                        alt={curso.det_titulo || "curso"}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        unoptimized
                                    />
                                </div>
                                <div className="text">
                                    <h2>
                                        <Link onClick={ClickHandler} href="#">
                                            <span dangerouslySetInnerHTML={{ __html: curso.det_titulo }} />
                                        </Link>
                                    </h2>
                                    <p dangerouslySetInnerHTML={{ __html: curso.det_modalidad }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection3;
