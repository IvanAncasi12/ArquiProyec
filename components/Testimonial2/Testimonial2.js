import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '/public/images/testimonial/img-1.jpg'
import ts2 from '/public/images/testimonial/img-2.jpg'
import ts3 from '/public/images/testimonial/img-3.jpg'
import quote from '/public/images/testimonial/quote-2.png'
import Image from "next/image";

const Testimonial2 = () => {

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const testimonial = [
        {
            id: '01',
            tImg: ts1,
            Des: "Ac sollicitudin euismod ut luctus felis duis lacus sed pellentesque. Purus eget consectetur massa amet. Hac diam suspendisse in faucibus posuere dignissim amet at. Eget vitae magna condimentum lorem tristique scelerisque ornare.",
            Title: 'Leslie Alexander',
            Sub: "Marketing Coordinator",
        },
        {
            id: '01',
            tImg: ts2,
            Des: "Ac sollicitudin euismod ut luctus felis duis lacus sed pellentesque. Purus eget consectetur massa amet. Hac diam suspendisse in faucibus posuere dignissim amet at. Eget vitae magna condimentum lorem tristique scelerisque ornare.",
            Title: 'Don Alexander',
            Sub: "SCG First Company",
        },
        {
            id: '01',
            tImg: ts3,
            Des: "Ac sollicitudin euismod ut luctus felis duis lacus sed pellentesque. Purus eget consectetur massa amet. Hac diam suspendisse in faucibus posuere dignissim amet at. Eget vitae magna condimentum lorem tristique scelerisque ornare.",
            Title: 'Randy D. Melill',
            Sub: "Merketer",
        }
    ]

    return (

        <section className="Arkitek-testimonial-section-s2 section-padding">
            <div className="container">
                <div className="wpo-testimonial-wrap-s2">
                    <Slider {...settings}>
                        {testimonial.map((tesmnl, tsm) => (
                            <div className="item" key={tsm}>
                                <div className="testimonial-left-item">
                                    <div className="image">
                                        <Image src={tesmnl.tImg} alt="" />
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="icon">
                                        <Image src={quote} alt="" />
                                    </div>
                                    <p>{tesmnl.Des}</p>
                                    <h5>{tesmnl.Title}</h5>
                                    <span>{tesmnl.Sub}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>

    );
}

export default Testimonial2;