import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '/public/images/logo.svg'

const BlogSingle = (props) => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle='Latest News' pagesub="blog" />
            <BlogList blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogSingle;
