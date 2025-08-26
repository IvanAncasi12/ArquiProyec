import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Project from '../../api/Projects';
import Contact from './contact';
import RelatedProject from './related';
import Footer from '../../components/footer/Footer';
import Image from 'next/image';
 
const ProjectSinglePage = (props) => {
    const router = useRouter()

    const projectDetails = Project.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={projectDetails?.pTitle} pagesub={'Project'} />
            <div className="wpo-project-single-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="wpo-project-single-title">
                                                <h3>{projectDetails?.pTitle} Project</h3>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere
                                                amet
                                                tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum
                                                cursus
                                                velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit
                                                dictum
                                                quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id
                                                aliquet duis
                                                sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit
                                                curabitur
                                                amet risus bibendum. Posuere et eget orci, tempor enim.</p>
                                            <p>Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat
                                                odio
                                                facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra
                                                est, at
                                                rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit
                                                sit Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum.
                                                Posuere et eget orci. sed velit dictum quam. Id risus pharetra est</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="wpo-project-single-content-des-right">
                                                <ul>
                                                    <li>Location :<span>7 Lake Street,London</span></li>
                                                    <li>Client :<span>wpOceans</span></li>
                                                    <li>Consult :<span>Harry Johnson</span></li>
                                                    <li>Project Type :<span>{projectDetails?.pTitle}</span></li>
                                                    <li>Duration :<span>6 Month</span></li>
                                                    <li>Completion :<span>15 Apr 2023</span></li>
                                                    <li>Share :<span>Architecture, Interior</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-project-single-main-img">
                                        <Image src={projectDetails?.pSImg} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-project-single-item list-widget">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="wpo-project-single-title">
                                                <h3>Our Strategies</h3>
                                            </div>
                                            <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum
                                                quam. Id
                                                risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                                sollicitudin diam.</p>
                                            <ul>
                                                <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                                <li>Elit curabitur amet risus bibendum.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="wpo-project-single-item-quote">
                                                <p>"Amazing looking theme and instantly turns your application into a great
                                                    looking one. Really shows that pro_ fessionals built this theme up. Very
                                                    happy with the way the theme looks ."</p>
                                                <span>Robert - <span>Yellow Theme</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-project-single-item">
                                    <div className="wpo-project-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                        tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                        eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                        elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                        id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                        adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                        vulputate diam interdum morbi ac a.</p>
                                </div>
                                <div className="wpo-project-single-gallery">
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={projectDetails?.ssImg1} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={projectDetails?.ssImg2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-project-single-item list-widget">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="wpo-project-single-title">
                                                <h3>Resieved goals</h3>
                                            </div>
                                            <ul>
                                                <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 list-widget-s">
                                            <div className="wpo-project-single-title">
                                                <h3>Results</h3>
                                            </div>
                                            <ul>
                                                <li>Mauris dignissim blandit cursus imperdiet accumsan lorem.</li>
                                                <li>Nam id in non sed cras purus nunc et.</li>
                                                <li>Mauris orci, cursus nisl odio est adipiscing gravida magna eget.</li>
                                                <li>Quis mauris vel felis convallis nulla dignissim.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <RelatedProject/>
                                <div className="wpo-project-single-item">
                                    <div className="wpo-project-contact-area">
                                        <div className="wpo-contact-title">
                                            <h2>Have project in mind? Let's discuss</h2>
                                            <p>Get in touch with us to see how we can help you with your project</p>
                                        </div>
                                        <div className="wpo-contact-form-area">
                                            <Contact/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;