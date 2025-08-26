import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Error from '../../components/404/404'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '/public/images/logo.svg'

const StoryPage = (props) => {

    return (
        <div>
            <Navbar Logo={Logo} hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </div>
    )
};
export default StoryPage;


