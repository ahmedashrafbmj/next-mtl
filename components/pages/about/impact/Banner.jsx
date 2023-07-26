import React from 'react'

export default function ImpactBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/banner/banner-1.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h5 className='text-white'>OUR IMPACT</h5>
                                <h3>committed to significantly influencing.</h3>
                                <p>We at Balance on life are dedicated to changing the world in a significant and lasting way. We dedicate ourselves to enhancing the communities we serve, the lives we touch, and the environments we have an impact on because we believe that the work we do matters.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}