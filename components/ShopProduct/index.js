import React from "react";
import Link from "next/link";


const ShopProduct = ({ products, addToCartProduct }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="wpo-shop-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="shop-grids clearfix">
                            {products.length > 0 &&
                                products.slice(0, 12).map((product, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <img src={product.proImg} alt="" />
                                        </div>
                                        <div className="details">
                                            <h3><Link onClick={ClickHandler} href={'/product-single/[slug]'} as={`/product-single/${product.slug}`}>{product.title}</Link></h3>
                                            <del>${product.delPrice}</del>
                                            <span>${product.price}</span>
                                            <div className="add-to-cart">
                                                <button
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Add to Cart"
                                                    onClick={() => addToCartProduct(product)}
                                                >
                                                    Add to cart <i className="ti-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="pagination-wrapper pagination-wrapper-center">
                            <ul className="pg-pagination">
                                <li>
                                    <Link href="/" aria-label="Previous">
                                        <i className="ti-angle-left"></i>
                                    </Link>
                                </li>
                                <li className="active"><Link href="/">1</Link></li>
                                <li><Link href="/">2</Link></li>
                                <li><Link href="/">3</Link></li>
                                <li>
                                    <Link href="/" aria-label="Next">
                                        <i className="ti-angle-right"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopProduct;
