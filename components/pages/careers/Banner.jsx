import React from 'react'

export default function CareerBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/banner/banner-1.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h5 className='text-light'>We take pride in the quality of our employees. Our growth-oriented, high performance culture challenges our team members to develop both personally and professionally. Bring your unique skills to the table, engage with the communities we serve, and help create long-term value for all our stakeholders. Be part of a growing company that does meaningful work. Make Balance on Life your new career HOME.</h5>
                                {/* <p>We&apos;re on a mission to create spaces where people live and thrive. We don&apos;t stop at good enough because we believe boundaries are meant to be pushed. It’s hard work and we’re here for it. Turning impossible into already done.</p>
                                <div className="btn-sections">
                        <a href="#" className="btn btn-lg btn-primary-lg-outline">Search jobs</a>
                    </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}