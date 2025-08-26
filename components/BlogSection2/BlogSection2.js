"use client";
import React, { useEffect, useState } from 'react';
import blogs from '../../api/blogs'
import SectionTitle from '../SectionTitle/SectionTitle'
import Link from 'next/link'
import Image from 'next/image'

const BlogSection2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const [cursos, setCursos] = useState([])
    useEffect(() => {
        const fetchCursos = async () => {
          try {
            const response = await fetch("https://serviciopagina.upea.bo/api/cursosAll/3");
            const data = await response.json();
            setCursos(data);
          } catch (error) {
            console.error("Error :", error);
          }
        };
    
        fetchCursos();
      }, []);
    return (
        <section className="wpo-blog-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subTitle={'Carrera de Arquitectura'} Title={'Cursos'} />
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gallery-container clearfix">
                            {cursos.map((cursos, index) => (
                                    <div className="grid" key={index}>
                                        <div >
                                            <div className="image">
                                                <Image src={`https://serviciopagina.upea.bo/Cursos/${cursos.det_img_portada}`} alt="img" width={500} height={300} layout="responsive" unoptimized  />
                                            </div>
                                            <div className="blog-content">
                                                <div className="thumb">
                                                    <ul>
                                                        
                                                        <li>{cursos.det_modalidad}</li>
                                                    </ul>
                                                </div>
                                                <h2><Link onClick={ClickHandler} href="#"> <p dangerouslySetInnerHTML={{__html:cursos.det_titulo}}/></Link></h2>
                                                <p dangerouslySetInnerHTML={{__html:cursos.det_descripcion}}/>
                                                {/* <Link onClick={ClickHandler} className="theme-btn-s2" href="#" >Read More</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection2;