import React from 'react'
import Link from 'next/link'
import './style.css'
import Prtoducts from '../../api/product'

const Shop = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

     

    return(
        <section className="shop-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="shop-grids clearfix">
                            {Prtoducts.map( (item, en) => (
                                <div className="grid" key={en}>
                                    <div className="img-holder">
                                        <img src={item.shopImg} alt="" />
                                    </div>
                                    <div className="details">
                                        <h3><Link onClick={ClickHandler} to={`/shop-single/${item.id}`}>{item.title}</Link></h3>
                                        <del>{item.off}</del><span>{item.price}</span>
                                        <div className="add-to-cart">
                                            <Link onClick={ClickHandler} to={`/shop-single/${item.id}`}>{item.btn} <i className="ti-shopping-cart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pagination-wrapper pagination-wrapper-center">
                            <ul className="pg-pagination">
                                <li>
                                    <Link href="/shop" aria-label="Previous">
                                        <i className="fi ti-angle-left"></i>
                                    </Link>
                                </li>
                                <li className="active"><Link href="/shop">1</Link></li>
                                <li><Link href="/shop">2</Link></li>
                                <li><Link href="/shop">3</Link></li>
                                <li>
                                    <Link href="/shop" aria-label="Next">
                                        <i className="fi ti-angle-right"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Shop;