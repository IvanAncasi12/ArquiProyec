import React, { useState } from 'react';
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hImg1 from '/public/images/slider/slide-4.jpg';
import hImg2 from '/public/images/slider/slide-5.jpg';
import hImg3 from '/public/images/slider/slide-6.jpg';

import shape from '/public/images/slider/shape-img.jpg';
import Image from 'next/image';


const Slide = [
    {
        id: '01',
        sImg: hImg1,
        Des: "Tristique enim nisl velit facilisis cras a amet turpis sed. Ut Duis amet enim viverra dictumst.",
        Title: 'World Best',
        Title2: 'Interior Design',
    },
    {
        id: '01',
        sImg: hImg2,
        Des: "Tristique enim nisl velit facilisis cras a amet turpis sed. Ut Duis amet enim viverra dictumst.",
        Title: 'World Best',
        Title2: 'Interior Design',
    },
    {
        id: '01',
        sImg: hImg3,
        Des: "Tristique enim nisl velit facilisis cras a amet turpis sed. Ut Duis amet enim viverra dictumst.",
        Title: 'World Best',
        Title2: 'Interior Design',
    }
]


const Hero2 = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-hero-slider-1">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-6 col-md-5 col-sm-12 slide-caption">
                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={1}
                                    arrows={false}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >

                                    {
                                        Slide.map((slide, sld) => (
                                            <div className="slide-item" key={sld}>
                                                <div className="slide-title">
                                                    <h2>{slide.Title} <br /> {slide.Title2}</h2>
                                                </div>
                                                <div className="slide-subtitle">
                                                    <p>{slide.Des}</p>
                                                </div>
                                                <div className="btns">
                                                    <Link href="/about" className="theme-btn-s2">Discover More</Link>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </Slider>
                            </div>
                            <div className="slider-pic">
                                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={false} fade={true}>
                                    {
                                        Slide.map((slide, sld) => (
                                            <div className="slider-item" key={sld}>
                                                <Image src={slide.sImg} alt="" />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                            <div className="hero-left-img">
                                <Image src={shape} alt="" />
                            </div>
                        </div>
                    </div>
                    <ul className="hero-social-icon">
                        <li><Link href="/">Facebook</Link></li>
                        <li><Link href="/">Instagram</Link></li>
                        <li><Link href="/">Twitter</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Hero2;