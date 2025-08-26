"use client";
import React, { useEffect, useState } from 'react';
import blogs from '../../api/blogs'
import SectionTitle from '../SectionTitle/SectionTitle'
import Link from 'next/link'
import Image from 'next/image'

const BlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://serviciopagina.upea.bo/api/eventoAll/21");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);
    return (
        <section className="wpo-blog-section-s2 section-padding" id="gallery">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subTitle={'Carrera de Arquitectura'} Title={'Eventos'} />
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gallery-container clearfix">
                                {users.map((user, index) => (
                                    <div className="grid" key={index} style={{with: '100%', height: '100%'}}>
                                        <div>
                                            <div className="image">
                                                {/* <Image src={blog.screens} alt="" /> */}
                                                <img style={{with: '400px', height: '700px'}}
                                                    src={`https://serviciopagina.upea.bo/Eventos/${user.evento_imagen}`} alt="img" width={500} height={300} unoptimized
                                                />
                                            </div>
                                            <div className="blog-content">
                                                <div className="thumb">
                                                    <ul>
                                                        <li>{user.evento_lugar} <p dangerouslySetInnerHTML={{ __html: user.evento_fecha }} /></li>
                                                    </ul>
                                                </div>
                                                <h2><p dangerouslySetInnerHTML={{ __html: user.evento_titulo }} /></h2>
                                                <p dangerouslySetInnerHTML={{ __html: user.evento_descripcion }} />
                                                {/* <Link onClick={ClickHandler} className="theme-btn-s2" href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>Read More</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className="grid">
                                    <div className="blog-item s2">
                                        <Link onClick={ClickHandler} href="/blog" className="blog-item-btn">All Blog Post <i className="ti-arrow-right"></i></Link>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;