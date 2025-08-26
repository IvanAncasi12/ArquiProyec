import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle';
import Teams from '../../api/Teams'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const TeamSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    var settings = {
        dots: false,
        arrows: true,
        loop: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
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

    return (

        <section className="Arkitek-team-section section-padding">
            <div className="container-fulid">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle subTitle={'OUR PROFESSIONALS'} Title={'Meet Our Skilled Team'} />
                    </div>
                </div>
                <div className="team-slider" >
                    <Slider {...settings}>
                        {Teams.map((team, titem) => (
                            <div className="item" key={titem}>
                                <div className="image">
                                    <Image src={team.tImg} alt="" />
                                </div>
                                <div className="text">
                                    <h2><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.name}</Link></h2>
                                    <span>{team.title}</span>
                                    <ul className="icon">
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default TeamSectionS2;
