"use client";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Services from '../../api/Services';
import Image from 'next/image';


const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};



const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const [ofertas, setOfertas] = useState([]);
    useEffect(() => {
        const fetchOfertas = async () => {
            try {
                const response = await fetch("https://serviciopagina.upea.bo/api/OfertasAcademicasAll/36");
                const data = await response.json();
                setOfertas(data);
            } catch (error) {
                console.error("Error :", error);
            }
        };

        fetchOfertas();
    }, []);
    return (

        <section className="Arkitek-service-section-s3 section-padding">
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
            <div className="container-fluid">
                <div className="service-wrap">
                    <div className="service-title-left">
                        <div className="wpo-section-title">
                            <h2>Ofertas Académicas</h2>
                            <p>Lectus suspendisse mi massa et mollis diam urna interdum consequat.
                                Libero quis non odio sed convallis cursus fames vitae volutpat.
                                At congue viverra integer est. Quam convallis dignissim cras sit morbi diam.</p>
                           {/*  <Link onClick={ClickHandler} href="/service">See All Services....</Link> */}
                        </div>

                    </div>
                    <div className="service-content service-content-slider">
                        <Slider {...settings}>
                            {ofertas.map((ofertas, index) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                    <div className="icon">
                                        <img
                                            src={`https://serviciopagina.upea.bo/Carrera/OfertasAcademicas/${ofertas.ofertas_imagen}`} alt="img" width={500} height={300} layout="responsive" unoptimized />
                                    </div>
                                    <div className="text">
                                        <h2><Link onClick={ClickHandler} href='#' ><p dangerouslySetInnerHTML={{ __html: ofertas.ofertas_titulo }} /></Link></h2>
                                        <p dangerouslySetInnerHTML={{ __html: ofertas.ofertas_referencia }} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ServiceSection;