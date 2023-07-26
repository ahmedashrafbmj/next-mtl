import React from 'react'

export default function OurServices() {
    return (
        <div className="services-1 content-area-12 bg-grea-3">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                    <h5>OUR SERVICES</h5>
                    <h1>We are among the best and have been in this business since 1990.</h1>
                    <p>Our investment and management platform, which is vertically integrated, is designed to outperform. Our team produces higher outcomes and more victories by concentrating on superior but attainable investment targets.</p>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card service-box">
                            <img className="card-img-top" src="img/service/service-1.jpg" alt="service" />
                            <div className="card-body detail">
                                <div className="title">
                                    <h4><a href="#">Property Management</a></h4>
                                </div>
                                <p>Performance and service are driven by innovation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card service-box">
                            <img className="card-img-top" src="img/service/service-2.jpg" alt="service" />
                            <div className="card-body detail">
                                <div className="title">
                                    <h4><a href="#">Equities</a></h4>
                                </div>
                                <p>Deals and transactions are governed by experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card service-box">
                            <img className="card-img-top" src="img/service/service-3.jpg" alt="service" />
                            <div className="card-body detail">
                                <div className="title">
                                    <h4><a href="#">Construction Services</a></h4>
                                </div>
                                <p>Long-term viability and value are built through capability.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card service-box">
                            <img className="card-img-top" src="img/service/service-4.jpg" alt="service" />
                            <div className="card-body detail">
                                <div className="title">
                                    <h4><a href="#">Architecture & Design</a></h4>
                                </div>
                                <p>Vision and ease are created through mastery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}