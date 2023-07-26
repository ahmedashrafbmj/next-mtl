import React from 'react'

export default function ManagmentBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Management/banner.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h5 className='text-white'>PROPERTY MANAGEMENT</h5>
                                <h3>A step ahead at all times.</h3>
                                <p>Listed as one of the best property management firms in the country, and that wasn&apos;t a coincidence. We pledge to make residing in a Balance On Life community more fulfilling. greater comfort more vivaciously more conscientiously.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}