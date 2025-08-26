import React from 'react'
import CountUp from 'react-countup';
import icon from '/public/images/call.svg'
import abimg1 from '/public/images/about-right-1.jpg'
import abimg2 from '/public/images/about-right-2.jpg'
import Link from 'next/link'
import Image from 'next/image';


const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="Arkitek-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left-item">
                            <div className="wpo-section-title">
                                <span>About Us</span>
                                <h2>Transforming space into your dreams come true</h2>
                                <p>Eget lorem purus egestas proin. Penatibus quis lacinia nulla at proin.
                                    Dignissim a placerat massa quam hendrerit in laoreet urna.
                                    Sed in volutpat sit porttitor vestibulum quis semper tristique..</p>
                            </div>
                            <div className="left-btn">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">Discover More</Link>
                                <Link onClick={ClickHandler} className="call" href="/contact">
                                    <div className="icon">
                                        <Image src={icon} alt=""/>
                                    </div>
                                    <div className="text">
                                        <h5>Call Us:</h5>
                                        <span>+(684) 555-0102</span>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-right-item">
                            <div className="right-image-1">
                                <Image src={abimg1} alt=""/>
                            </div>
                            <div className="right-image-2">
                                <Image src={abimg2} alt=""/>
                            </div>
                            <div className="right-text">
                                <div className="info">
                                    <h3><CountUp end={15} enableScrollSpy />+</h3>
                                    <p>Years of Experience
                                        In This Field</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default About2;