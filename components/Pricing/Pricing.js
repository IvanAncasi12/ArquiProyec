import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle';



const Pricing = (props) => {
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`wpo-pricing-section section-padding ${props.PrClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subTitle={'Sistemas universitarios'} Title={'Enlaces'}/>
                    </div>
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>M@E</span>
                                    </div>
                                    {/* <div className="wpo-pricing-text">
                                        <h2><strong>$</strong> 125<span>/Per Month</span></h2>
                                    </div> */}
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Sistema de Matriculación Universidad Pública de El Alto</li>
                                            
                                        </ul>
                                        <Link onClick={ClickHandler} href="https://matriculacion.upea.bo/6e56c5c3766bda500b0c353c32bfa6d36fc48c6e">M@E</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>INSCRIPCIONES</span>
                                    </div>
                                    {/* <div className="wpo-pricing-text">
                                        <h2><strong>$</strong> 250<span>/Per Month</span></h2>
                                    </div> */}
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Sistema de inscripción de la carrera de Arquitectura</li>
                                        </ul>
                                        <Link onClick={ClickHandler} href="https://inscripcionesarquitectura.upea.bo/" target='_blank'>INSCRIPCIONES</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>CAMPUS VIRTUAL</span>
                                    </div>
                                    {/* <div className="wpo-pricing-text">
                                        <h2><strong>$</strong> 320<span>/Per Month</span></h2>
                                    </div> */}
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Campus Virtual de la carrera de Arquitectura</li>
                                        </ul>
                                        <Link onClick={ClickHandler} href="#">CAMPUS VIRTUAL</Link>
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

export default Pricing;