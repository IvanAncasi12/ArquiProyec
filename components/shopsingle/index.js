import React from 'react'
import { useParams } from 'react-router-dom'
import Prtoducts from '../../api/product'
import ShopTabs from './shoptabs'


import './style.css'

const ShopSingle = () => {
    
    const submitHandler = (e) => {
        e.preventDefault()
    }


    const { id } = useParams()
    const ProductDetails = Prtoducts.find(item => item.id === id)

    return (
        <section className="page-content">
            <div className="container">
                <div className="page-content-row">
                    <div className="shop-page">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shop-page-details section-padding">
                                    <div className="shop-items">
                                        <div className="shop-item single">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="shop-img">
                                                        <img src={ProductDetails.shopImg} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="shop-info">
                                                        <h3>{ProductDetails.title}</h3>
                                                        <ul className="rating">
                                                            <li><span><i className="fa fa-star"></i></span></li>
                                                            <li><span><i className="fa fa-star"></i></span></li>
                                                            <li><span><i className="fa fa-star"></i></span></li>
                                                            <li><span><i className="fa fa-star"></i></span></li>
                                                            <li><span><i className="fa fa-star"></i></span></li>
                                                        </ul>
                                                        <span className="review_count">( 3 Customer Reviews )</span>
                                                        <div className="clearfix"></div>
                                                        <span className="price-num">${ProductDetails.price}</span>
                                                        <div className="des">
                                                            <p>Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him.</p>
                                                            <p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seem</p>
                                                        </div>
                                                        <form onSubmit={submitHandler}>
                                                            <button type="submit" className="btn-style2">Add To Cart</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-area">
                                            <ShopTabs />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default ShopSingle;