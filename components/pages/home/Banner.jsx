import Link from 'next/link'
import React from 'react'

export default function HomeBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div id="bannerCarousole" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item banner-max-height item-bg active">
                            <img className="d-block w-100 h-100" src="/img/banner/banner-3.jpg" alt="banner" />
                            <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                                <div className="carousel-content container">
                                    <div className="text-center banner-info">
                                        <h3>COMFORT  	&nbsp; &nbsp; SAFETY &nbsp;&nbsp;  EXPERTISE</h3>
                                        <p>Welcome to our practice</p>
                                    </div>
                                    {/* <div className="btn-sections">
                                        <Link href={"/about/ouvision"} className="btn btn-lg btn-white-lg-outline">GET TO KNOW US</Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
