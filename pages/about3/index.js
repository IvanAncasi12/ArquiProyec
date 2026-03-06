import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import About4 from '../../components/about4/about4';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import FunFact from '../../components/FunFact';
import History from '@/components/history/history';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import CtaSection2 from '../../components/CtaSection2/CtaSection2';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import About3 from '@/components/about3/about3';
import ObjetivoArqui from '@/components/objecArqui/objetivoArqui';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'Nosotros'} pagesub={'Nosotros'} />
            <About3 abClass={'section-padding'}/>
            <History />
            <ObjetivoArqui/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
