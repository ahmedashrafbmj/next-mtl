import React from 'react'
import Link from 'antd/lib/typography/Link'

export default function ContactUs() {
    return (
        <div className="services-2 content-area-5 bg-light">
            <div className="container">
                <div className="row wow  align-items-center justify-content-between">
                    <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                        <div className="services-demo">
                            <img className="img-fluid" src="/img/Home/home-is-where-your-cat-is.jpg" alt="properties" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                        <div className="service-detail">
                            <h4>
                                CONTACT US
                            </h4>
                            {/* <h3>
                            Are you ready to accomplish the seemingly impossible and live a balanced life?
                            </h3> */}
                            <div className="btn-sections">
                                <Link href={"/living-here/get-ready-to-rent"} className="btn btn-lg btn-primary-lg-outline">REACH OUT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
