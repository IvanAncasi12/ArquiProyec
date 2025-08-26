import React, { Component } from 'react'
import {Link}  from 'react-router-dom'


class Comment extends Component{

    sumitHandler ( e ) {
        e.preventDefault()
    }

    render() {
        return(
            <div className="add-review-sec">
                <h3>Add a Review</h3>
                <h4><span>Your email address will not be published.</span>Required fields are marked*</h4>
                <h5>Your Rating :</h5>
                <ul className="rating">
                    <li><Link href="/shop-single" title=""><i className="fa fa-star-o"></i></Link></li>
                    <li><Link href="/shop-single" title=""><i className="fa fa-star-o"></i></Link></li>
                    <li><Link href="/shop-single" title=""><i className="fa fa-star-o"></i></Link></li>
                    <li><Link href="/shop-single" title=""><i className="fa fa-star-o"></i></Link></li>
                    <li><Link href="/shop-single" title=""><i className="fa fa-star-o"></i></Link></li>
                </ul>
                <div className="clearfix"></div>
                <form onSubmit={this.sumitHandler} className="review-form">
                    <div className="form-field">
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="form-field">
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="form-field">
                        <textarea name="review" placeholder="Your Review*"></textarea>
                    </div>
                    <div className="form-submit">
                        <button type="submit" className="theme-btn">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Comment;