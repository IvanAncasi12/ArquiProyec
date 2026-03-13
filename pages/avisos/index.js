import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import TeamSection from '../../components/TeamSection/TeamSection';
import Comunicas from '@/components/comunica/comunicas';
import Avisos from '@/components/avisos/avisos';

const TeamPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'Avisos'} pagesub={'Avisos'} />
             <Avisos/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
