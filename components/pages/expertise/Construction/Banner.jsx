import React from 'react'

export default function ConstructionBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Construction/banner.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h1 className='text-white'>enhancing local communities.</h1>
                                <p>With a proven track record of constructing residential communities that attract loyal residents, we’ll help you maximize the long-term value of your property asset with in-demand amenities and proactive renovations. Partner with us on your next building or renovation project.</p>
                                <div className="btn-sections col-md-12 text-center">
                                <a href="#" className="btn btn-lg btn-primary-lg-outline">Live Chat</a>
                            </div>    
                                {/* <p>We&apos;re multifamily industry leaders at Balance On Life. We exceed expectations and excel in our ongoing search for more intelligent ways to expand.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}