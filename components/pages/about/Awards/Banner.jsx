import React from 'react'

export default function AwardBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/banner/banner-1.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h5 className='text-white'>Awards</h5>
                                <h3>Because we like winning.</h3>
                                <p>At Balance On Life, we love the work we do. It is complex and challenging – and that’s why we love it. Still, we think it’s pretty great to be recognized as a leading company in the multifamily industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}