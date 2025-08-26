import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '/public/images/frase2.avif'
import ts2 from '/public/images/frase1.avif'
import ts3 from '/public/images/frase3.avif'
import quote from '/public/images/testimonial/quote-1.png'
import Image from 'next/image';


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Debemos intentar acercar la naturaleza, las casas y el ser humano a una unidad superior",
        Title: 'Mies van der Rohe',
        Sub: " Casa de Edith Farnsworth",
    },
    {
        id: '01',
        tImg: ts2,
        Des: "La casa debe ser el estuche de la vida, la máquina de la felicidad",
        Title: 'Le Corbusier',
        Sub: "Museo de Ahmedabad",
    },
    {
        id: '01',
        tImg: ts3,
        Des: "La finalidad de una casa es la de proporcionar una vida buena y cómoda, y sería un error valorar demasiado un resultado exclusivamente decorativo",
        Title: 'Lina Bo Bardi',
        Sub: "Museo de Arte Moderno de São Paulo",
    }
]

const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="Arkitek-testimonial-section-s3 section-padding">
            <div className="container">
                <div className="row align-items-center testimonial-slider">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="testimonial-left-item slider-nav">
                            <Slider
                                asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                slidesToShow={1}
                                arrows={false}
                                swipeToSlide={true}
                                focusOnSelect={true}
                            >
                                {
                                    testimonial.map((tesmnl, tsm) => (
                                        <div className="image" key={tsm}>
                                            <Image src={tesmnl.tImg} alt="" style={{ width: '100%', height: '100%' }}/>
                                        </div>
                                    ))
                                }

                            </Slider>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="testimonial-right-wrap slider-for">
                            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={false} fade={true}>
                                {
                                    testimonial.map((tesmnl, tsm) => (
                                        <div className="testimonial-item" key={tsm}>
                                            <div className="icon">
                                                <Image src={quote} alt="" />
                                            </div>
                                            <p>{tesmnl.Des}</p>
                                            <h3>{tesmnl.Title}</h3>
                                            <span>{tesmnl.Sub}</span>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;