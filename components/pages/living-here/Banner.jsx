import React from 'react'

export default function LivingHereBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/banner/banner-1.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h5 className='text-white'>THE BALANCE PROMISE</h5>
                                <h3>Make living mean living balanced.</h3>
                                <p>Home is much more than just a place to sleep; it&apos;s where you feel most at ease, most creative, and most like yourself. A Balance community allows residents to live longer. Happier. Balanced. Confident.</p>
                            </div>
                            {/* <div className="btn-sections">
                                <a href="#" className="btn btn-lg btn-white-lg-outline">SEARCH NOW</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
