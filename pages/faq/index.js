import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import FaqSection from './FaqSection'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'

const FaqPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'FAQ'} pagesub={'FAQ'} />
            <section className="wpo-faq-section s2 section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="wpo-section-title">
                            <h2>Frequently Asked Question</h2>
                        </div>
                        <div className="col-lg-8 offset-lg-2">
                            <FaqSection />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default FaqPage;

