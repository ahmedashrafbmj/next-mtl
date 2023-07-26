import React from 'react'

export default function Articles() {
    return (
        <div className="services-2 content-area-5 bg-grea-3">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                    <h1>ARTICLES</h1>
                    <h3>Everyone enjoys a good read.</h3>
                </div>
                <div className="row wow justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="service-info-5">
                            <i className="flaticon-clock" />
                            <h4>CASE STUDY</h4>
                            <p>Smarter Advertising with Aylist</p>
                            <div className="btn-sections mt-3">
                                <a href="#" className="btn btn-primary-lg-outline">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="service-info-5">
                            <i className="flaticon-apartment" />
                            <h4>CASE STUDY</h4>
                            <p>Balance On Life Initiative Saves a Lot of Money</p>
                            <div className="btn-sections mt-3">
                                <a href="#" className="btn btn-primary-lg-outline">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
