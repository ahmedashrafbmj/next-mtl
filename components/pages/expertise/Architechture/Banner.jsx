import React from 'react'

export default function ArchitechtureBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Architecture n design/banner.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h1 className='text-white'>With the modern resident in mind, design.</h1>
                                {/* <h3>A more intelligent way to grow, invest, manage, and live.</h3> */}
                                <p>We&apos;re a committed group of in-house designers and architects who create homes that today&apos;s inhabitants adore.</p>
                                <div className="btn-sections col-md-12 text-center">
                                <a href="#" className="btn btn-lg btn-primary-lg-outline">Live Chat</a>
                            </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}