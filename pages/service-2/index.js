import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';


const ServicePage2 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'Services'} pagesub={'Service'}/> 
            <ServiceSection2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage2;
