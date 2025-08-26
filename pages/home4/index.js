import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Hero4 from '../../components/hero4/hero4';
import About4 from '../../components/about4/about4';
import FunFact from '../../components/FunFact';
import ServiceSection3 from '../../components/ServiceSection3/ServiceSection3';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import Pricing from '../../components/Pricing/Pricing';
import Testimonial3 from '../../components/Testimonial3/Testimonial3';
import CtaSection2 from '../../components/CtaSection2/CtaSection2';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import Footer from '../../components/footer/Footer';

const HomePage4 = () => {
    return (
        <Fragment>
            <Navbar2/>
            <Hero4 />
            <FunFact fClass={'wpo-fun-fact-section-s2'}/>
            <About4 abClass={'s2'}/>
            <ServiceSection3 />
            <ProjectSectionS2 />
            <Pricing />
            <Testimonial3 />
            <CtaSection2 />
            <BlogSection2 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage4;