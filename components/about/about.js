"use client";
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import abimg1 from '/public/images/01.jpg'
import abimg2 from '/public/images/06.jpg'
import Link from 'next/link'
import Image from 'next/image';

const About = (props) => {

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
        <section className="Arkitek-about-section-s4 section-padding">
            <div className="container">
                <div className="row">
                {institucion && (               
                    <div className="col-lg-5 col-12">
                        <div className="about-text">
                            <span>SOBRE LA CARRERA</span>
                            <h2>ARQUITECTURA</h2>
                            <p dangerouslySetInnerHTML={{ __html: institucion.institucion_sobre_ins }} />
                            {/* <ul>
                                <li>Arkitekdemo@gmail.com</li>
                                <li>(239) 555-0108</li>
                                <li>8502 Preston Rd. Inglewood, Maine 98380</li>
                            </ul> */}
                            <Link onClick={ClickHandler} href="/about" className="theme-btn">MÁS</Link>
                        </div>
                    </div>
               
            )}
                    <div className="col-lg-7 col-12 order-2 ">
                        <div className="about-right-content">
                            <div className="info">
                                <h3><CountUp end={5} enableScrollSpy />+</h3>
                                <p>Años
                                de carrera</p>
                            </div>
                            <div className="images">
                                <Image src={abimg1} alt=""/>
                            </div>
                            <div className="bg-img">
                                <Image src={abimg2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default About;