import React from "react";
import Link from 'next/link'


const Hero3 = () => {
    return (
        <section className="static-hero-s2">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-10 col-12">
                                <div className="wpo-static-hero-inner">
                                    <span>BEST DESIGNERS & ARCHITECTORS</span>
                                    <h2 className="title">Creating Your <br />
                                        Future Dream Home</h2>
                                    <Link href="/about" className="theme-btn">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-img-4"></div>
        </section>
    )
}

export default Hero3;