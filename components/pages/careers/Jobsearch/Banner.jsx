import React from 'react'

export default function JobSearchBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/banner/banner-1.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h3>Balance on life CAREER SEARCH</h3>
                                <h1>Find a career that creates a lifestyle.</h1>
                                <p>A career at Balance on life means your work will have a real impact on people&apos;s lives. So if you&apos;re seeking a meaningful career in the exciting realm of real estate, we’re excited to hear from you. Search by job below to get started.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}