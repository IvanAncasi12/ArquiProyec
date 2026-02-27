"use client";
import React, { useEffect, useState } from 'react';
// import blogs from '../../api/blogs' // 👈 Comentado o eliminado si no se usa
import SectionTitle from '../SectionTitle/SectionTitle'
import Link from 'next/link'
import Image from 'next/image'
import api from '@/plugins/axios' // 👈 Importamos axios configurado

const BlogSection2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const [cursos, setCursos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchCursos = async () => {
          try {
        
            const response = await api.get('/institucion/21/gacetaEventos') // 👈 Ejemplo de endpoint para cursos/eventos
            
            // 👇 Ajusta según la estructura real de la respuesta
            // Si los cursos vienen en response.data.cursos o response.data.data, etc.
            console.log('Respuesta cursos:', response.data) // 👈 Descomenta para ver la estructura
            
            // Ejemplo si viene directo:
            setCursos(response.data)
            
            // Ejemplo si viene anidado:
            // setCursos(response.data.cursos || response.data.data || [])
            
          } catch (error) {
            console.error("❌ Error al obtener cursos:", error);
          } finally {
            setLoading(false)
          }
        };
    
        fetchCursos();
      }, []);
      
    // Estado de carga
    if (loading) {
        return (
            <section className="wpo-blog-section section-padding">
                <div className="container text-center py-5">
                    <p>Cargando cursos...</p>
                </div>
            </section>
        )
    }

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
                            {cursos.length > 0 ? (
                                cursos.map((curso, index) => (
                                    <div className="grid" key={index}>
                                        <div >
                                            <div className="image">
                                                {/* 👇 Ajusta la URL de las imágenes según el nuevo servicio */}
                                                {/* Si las imágenes vienen con URL completa del nuevo servicio: */}
                                                <Image 
                                                    src={curso.det_img_portada?.startsWith('http') 
                                                        ? curso.det_img_portada 
                                                        : `https://servicioadministrador.upea.bo/api/v2/institucion/21/gacetaEventos${curso.det_img_portada}`
                                                    } 
                                                    alt={curso.det_titulo || 'Curso'} 
                                                    width={500} 
                                                    height={300} 
                                                    layout="responsive" 
                                                    unoptimized={true}
                                                />
                                            </div>
                                            <div className="blog-content">
                                                <div className="thumb">
                                                    <ul>
                                                        <li>{curso.det_modalidad}</li>
                                                    </ul>
                                                </div>
                                                <h2>
                                                    <Link onClick={ClickHandler} href="#"> 
                                                        <p dangerouslySetInnerHTML={{__html: curso.det_titulo || ''}}/>
                                                    </Link>
                                                </h2>
                                                <p dangerouslySetInnerHTML={{__html: curso.det_descripcion || ''}}/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center">
                                    <p>No hay cursos disponibles</p>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection2;