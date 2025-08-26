import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'


const Hero4 = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-style-4">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-8.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Modern House Design</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Dapibus aliquet lacus sem egestas netus vestibulum
                                        sit turpis scelerisque pharetra pelque diam pharetra curabitur..</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link href="/about" className="theme-btn-s2">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-9.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Modern House Design</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Dapibus aliquet lacus sem egestas netus vestibulum
                                        sit turpis scelerisque pharetra pelque diam pharetra curabitur..</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link href="/about" className="theme-btn-s2">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-10.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Modern House Design</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Dapibus aliquet lacus sem egestas netus vestibulum
                                        sit turpis scelerisque pharetra pelque diam pharetra curabitur..</p>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <Link href="/about" className="theme-btn-s2">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Hero4;