import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import ServiciosArqui from '@/components/serviciosArqui/serviciosArqui';

const TeamPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'Servicios'} pagesub={'Servicios'} />
            <ServiciosArqui/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;