import React from 'react'

const Features = (props) => {


    const featres = [
        {
            fIcon: 'flaticon-005-trophy',
            title: 'Winning Award',
            sub: '10 Years',
        },
        {
            fIcon: 'flaticon-008-advocate',
            title: 'Skilled Attorneys',
            sub: '120+',
        },
        {
            fIcon: 'flaticon-006-law',
            title: 'Case Win',
            sub: '99%',
        },
        {
            fIcon: 'flaticon-007-gavel',
            title: 'Legal Defence',
            sub: '1235+',
        },

    ]


    return (
        <section className="wpo-features-section">
            <div className="container">
                <div className="wpo-features-wrap">
                    <div className="row">
                        {featres.map((featres, fitem) => (
                            <div className="col-lg-3 col-sm-6 custom-grid col-12" key={fitem}>
                                <div className="features-item">
                                    <div className="features-icon"><i className={`fi ${featres.fIcon}`}></i></div>
                                    <div className="features-text">
                                        <span>{featres.sub}</span>
                                        <h4>{featres.title}</h4>
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

export default Features;