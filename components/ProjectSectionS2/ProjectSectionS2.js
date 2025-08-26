import React from 'react'
import Projects from '../../api/Projects'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';

const ProjectSectionS2 = (props) => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
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

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`Arkitek-project-section-s2 ${props.prClass}`}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subTitle={'ARQUITECTURA'} Title={'PROYECTOS'} />
                    </div>
                </div>
                <div className="project-wrap">
                    <div className="project-slider owl-carousel">
                        <Slider {...settings}>
                            {Projects.slice(4, 8).map((project, prj) => (
                                <div className="project-item" key={prj}>
                                    <div className="image">
                                        <Image src={project.pImg} alt="" />
                                    </div>
                                    {/* <div className="text">
                                        <h2><Link onClick={ClickHandler} href={'/project/[slug]'} as={`/project/${project.slug}`}>{project.pTitle}</Link></h2>
                                    </div> */}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSectionS2;