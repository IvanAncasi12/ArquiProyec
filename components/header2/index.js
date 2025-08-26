import React from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from '/public/images/logo.svg'
import HeaderTopbar from '../HeaderTopbar';
import Image from 'next/image';


const Header2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <header id="header">
            <HeaderTopbar />
            <div className="wpo-site-header wpo-header-style-4">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/"><Image src={Logo}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className="col col-xl-5 col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/">Home style 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home2">Home style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home3">Home style 3</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home4">Home style 4</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team">Team</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team-single/Wade-Warren">Team Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} href="/product-single/Bev-Accent-Chair">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                                <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                                                <li><Link onClick={ClickHandler} href="/faq">FAQ</Link></li>
                                                <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                                                <li><Link onClick={ClickHandler} href="/register">Register</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Portfolio</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/project">Portfolio 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/project-2">Portfolio 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/project/Furniture-&-Decor">Portfolio Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Service</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/service">Service 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-2">Service 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-3">Service 3</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service/Interior-Design">Service Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/blog-single/The-Golden-Ratio-2D-Sketch">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/The-Golden-Ratio-2D-Sketch">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/The-Golden-Ratio-2D-Sketch">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="contact-info">
                                        <div className="icon">
                                            <i className="fi flaticon-phone-call"></i>
                                        </div>
                                        <div className="info-text">
                                            <span>Call Us:</span>
                                            <p>+(684) 555-0102</p>
                                        </div>
                                    </div>
                                    <div className="contact-info">
                                        <div className="icon">
                                            <i className="fi flaticon-email"></i>
                                        </div>
                                        <div className="info-text">
                                            <span>E-mail Now:</span>
                                            <p>demoArkitek@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/contact">Make Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header2);