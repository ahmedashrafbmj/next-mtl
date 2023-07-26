import React from 'react'

export default function EquitiesBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Equities/banner.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h5 className='text-white'>Balance-of-life EQUITIES</h5>
                                <h3>prepared to perform better.</h3>
                                {/* <p>We&apos;re multifamily industry leaders at Balance On Life. We exceed expectations and excel in our ongoing search for more intelligent ways to expand.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}