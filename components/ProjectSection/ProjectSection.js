import React from 'react'
import Projects from '../../api/Projects'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Link from 'next/link'
import Image from 'next/image'


const ProjectSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (
        <section className="Arkitek-project-section-s3 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="project-text">
                            <span>Carrera de Arquitectura</span>
                            <h2>Proyectos</h2>
                            <p></p>
                            <Link href="/project" className="theme-btn">Ver</Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="sortable-gallery">
                            <div className="gallery-filters"></div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="portfolio-grids gallery-container clearfix">
                                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
                                            <Masonry columnsCount={4} gutter="30px">
                                                {Projects.slice(0, 4).map((project, i) => (
                                                    <div className="grid" key={i}>
                                                        <div className="img-holder">
                                                            <Image src={project.pImg} alt="" />
                                                            <div className="hover-content">
                                                                <h2><Link onClick={ClickHandler} href={'/project/[slug]'} as={`/project/${project.slug}`}><i className="ti-plus"></i></Link></h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Masonry>
                                        </ResponsiveMasonry>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;