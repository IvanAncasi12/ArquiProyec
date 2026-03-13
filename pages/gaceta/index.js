import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import Gaceta from '@/components/gacetas/gaceta';

const TeamPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'Gaceta'} pagesub={'Gaceta'} />
            <Gaceta/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;