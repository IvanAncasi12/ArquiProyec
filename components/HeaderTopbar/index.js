import React from 'react'
import Link from 'next/link'


const HeaderTopbar = () => {
    return (
        <div className="topbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-7 col-md-8 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-phone-call"></i>Mon - Sun 9.00am - 5 pm</li>
                                <li><i className="fi flaticon-placeholder"></i>244 Royal Ln. Mesa, New Jersey 463</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-4 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link href="/"> <i className="ti-facebook"></i></Link></li>
                                <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link href="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link href="/"><i className="ti-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;