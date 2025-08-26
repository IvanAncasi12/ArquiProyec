import React from 'react';
import Link from 'next/link';
import Practices from '../../api/Practices';


const Practice3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className={`wpo-practice-section-s3 ${props.pClass}`}>
            <div className="container">
                <div className="wpo-section-title-s2">
                    <span>How Can We Help You</span>
                    <h2>Legal Practice Areas</h2>
                </div>
                <div className="wpo-practice-wrap">
                    <div className="row">
                        {Practices.map((practice, Pitem) => (
                            <div className="col-lg-4 col-md-6 col-12" key={Pitem}>
                                <div className="wpo-practice-item">
                                    <div className="wpo-practice-icon">
                                        <i className={`fi ${practice.icon}`}></i>
                                    </div>
                                    <div className="wpo-practice-content">
                                        <h2><Link onClick={ClickHandler} to={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></h2>
                                        <p>{practice.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Practice3;