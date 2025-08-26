import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home3'
            },
            {
                id: 14,
                title: 'Home style 4',
                link: '/home4'
            }
        ]
    },

    {
        id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'About Us',
                link: '/about'
            },
            {
                id: 3222,
                title: 'Team',
                link: '/team'
            },
            {
                id: 322,
                title: 'Team Single',
                link: '/team-single/Wade-Warren'
            },
            {
                id: 33,
                title: 'Pricing',
                link: '/pricing'
            },
            {
                id: 34,
                title: 'Shop',
                link: '/shop',
            },
            {
                id: 35,
                title: 'Shop Single',
                link: '/product-single/Bev-Accent-Chair'
            },
            {
                id: 36,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 37,
                title: 'Checkout',
                link: '/checkout'
            },
            {
                id: 38,
                title: '404 Error',
                link: '/404'
            },
            {
                id: 3454,
                title: 'FAQ',
                link: '/faq'
            },
            {
                id: 3555,
                title: 'Login',
                link: '/login'
            },
            {
                id: 36474,
                title: 'Register',
                link: '/register'
            },
        ]
    },

    {
        id: 6,
        title: 'Portfolio',
        link: '/project',
        submenu: [
            {
                id: 61,
                title: 'Portfolio 1',
                link: '/project'
            },
            {
                id: 62,
                title: 'Portfolio 2',
                link: '/project-2'
            },
            {
                id: 64,
                title: 'Portfolio single',
                link: '/project/Furniture-&-Decor'
            },
        ]
    },
    {
        id: 7,
        title: 'Service',
        link: '/service',
        submenu: [
            {
                id: 71,
                title: 'Service 1',
                link: '/service'
            },
            {
                id: 72,
                title: 'Service 2',
                link: '/service-2'
            },
            {
                id: 73,
                title: 'Service 3',
                link: '/service-3'
            },
            {
                id: 74,
                title: 'Service Single',
                link: '/service/Interior-Design'
            },
        ]
    },
    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left-sidebar'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/The-Golden-Ratio-2D-Sketch'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/The-Golden-Ratio-2D-Sketch'
            },
            {
                id: 56,
                title: 'Blog single full width',
                link: '/blog-single-fullwidth/The-Golden-Ratio-2D-Sketch'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;