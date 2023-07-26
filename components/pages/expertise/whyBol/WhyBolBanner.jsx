import React from 'react'

export default function WhyBhBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/whybh/banner.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                {/* <h5 className='text-white'>OUR EXPERTISE</h5> */}
                                <h3>Let&apos;s transform the impossibility into a reality.</h3>
                                <p>Our work is important. Every choice we make actually affects how others live. Our goal is to design areas where they can flourish as well.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}