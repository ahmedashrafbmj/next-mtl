import React from 'react'

export default function ProtfolioBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Portfolio/banner.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h5 className='text-white'>PORTFOLIO</h5>
                                <h3>More than just leaving a big footprint, it makes a statement.</h3>
                                <p>At Balance On Life, we design environments that enable people to live well. These days, those spaces can be found in 330 multifamily communities with more than 100,000 units spread across 28 states. Our portfolio has expanded from traditional multifamily homes to include single-family build-to-rent communities and student housing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}