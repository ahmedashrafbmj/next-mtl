import React from 'react'

export default function LeaderBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/About/leadership/leadership banner 1.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h5 className='text-white'>About Balance on Life</h5>
                                <h3>We&apos;re here to accomplish great things, so we&apos;re going all in.</h3>
                                <p>We&apos;re on a mission to create spaces where people live and thrive. We don’t stop at good enough because we believe boundaries are meant to be pushed. It’s hard work and we’re here for it. Turning impossible into already done.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}