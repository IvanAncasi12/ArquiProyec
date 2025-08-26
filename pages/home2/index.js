import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Hero2 from '../../components/hero2/hero2';
import About2 from '../../components/about2/about2';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import Footer from '../../components/footer/Footer';

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} topbarNone={'topbar-none'} />
            <Hero2 />
            <About2 />
            <ServiceSection2 />
            <ProjectSectionS2 />
            <TeamSectionS2 />
            <Testimonial2 />
            <CtaSection />
            <BlogSection2 />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;