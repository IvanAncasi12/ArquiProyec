import React from 'react';
import Link from 'next/link';
import Services from '../../api/Services';
import sImgMiddle from '/public/images/service-bg.jpg'
import Image from 'next/image';


const ServiceSection3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="Arkitek-service-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <span>OUR SERVICES</span>
                            <h2>What Can We Offer</h2>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    {Services.map((service, Sitem) => (
                        <div className="service-item-wrap" key={Sitem}>
                            <div className="service-item">
                                <div className="icon">
                                    <Image src={service.scImg} alt="" />
                                </div>
                                <div className="text">
                                    <h2><Link onClick={ClickHandler} href={'/service/[slug]'} as={`/service/${service.slug}`}>{service.sTitle}</Link></h2>
                                    <p>{service.des2}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="bg-image">
                        <Image src={sImgMiddle} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ServiceSection3;