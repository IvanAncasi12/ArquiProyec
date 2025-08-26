import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Practices from '../../api/Practices';


const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
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



const Practice2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className={`wpo-practice-section ${props.prClass}`}>
            <div className="container-fluid">
                <div className="wpo-practice-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="wpo-section-title">
                                <span>How Can We Help You</span>
                                <h2>Legal Practice Areas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-practice-items">
                        <Slider {...settings}>
                            {Practices.map((practice, Pitem) => (
                                <div className="wpo-practice-item" key={Pitem}>
                                    <div className="wpo-practice-img">
                                        <img src={practice.sImg} alt="" />
                                    </div>
                                    <div className="wpo-practice-content">
                                        <div className="wpo-practice-content-top">
                                            <div className="b-top">
                                                <div className="b-top-inner">
                                                    <h2><Link onClick={ClickHandler} to={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></h2>
                                                    <p>{practice.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="visible-text s2">
                        <h2>Services</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Practice2;