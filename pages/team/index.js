import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import TeamSection from '../../components/TeamSection/TeamSection';

const TeamPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'Autoridades'} pagesub={'Autoridades'} />
            <TeamSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
