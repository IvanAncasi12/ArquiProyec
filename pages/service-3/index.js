import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection3 from '../../components/ServiceSection3/ServiceSection3';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';


const ServicePage3 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'Cursos'} pagesub={'Cursos'}/> 
            <ServiceSection3/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage3;
