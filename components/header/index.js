import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from '/public/images/logo-arquitectura.png'
import Image from 'next/image';

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    return (
        <header id="header" className={props.topbarClass}>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" href="/">
                                        <Image style={{width: '100px'}} src={Logo} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Inicio</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Carrera</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/about">Nosotros</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team">Autoridades</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Galeria</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/project">Proyectos</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Académico</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/service">Ofertas Académicas</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-3">Cursos</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/pricing">Enlaces</Link></li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contáctos</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <a 
                                                href="https://apiadministrador.upea.bo/sign-in" 
                                                className="btn btn-login me-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    textDecoration: 'none',
                                                    color: '#fff',
                                                    backgroundColor: '#701a92ff',
                                                    padding: '8px 16px',
                                                    borderRadius: '4px',
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    transition: 'background 0.3s',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    marginRight: '12px'
                                                }}>
                                                <i 
                                                    className="fi ti-user me-1" 
                                                    style={{ 
                                                        color: '#fff', 
                                                        marginRight: '6px', 
                                                        fontSize: '16px' 
                                                    }}
                                                ></i>
                                                INICIAR SESIÓN
                                            </a>
                                            <button 
                                                onClick={() => setMenuState(!menuActive)} 
                                                className="search-toggle-btn"
                                                style={{ 
                                                    background: 'none', 
                                                    border: 'none', 
                                                    cursor: 'pointer', 
                                                    fontSize: '18px',
                                                    color: '#333'
                                                }}
                                            >
                                                <i className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i>
                                            </button>

                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control" placeholder="Search here..." />
                                                        <button type="submit"><i className="fi flaticon-loupe"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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

export default connect(mapStateToProps, { removeFromCart })(Header);