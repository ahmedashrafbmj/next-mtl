import React from 'react'

export default function GetReadyToRentBanner() {
    return (
        <>
            {/* Banner start */}
            <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/livingHere/Get-ready-to-rent/banner.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h5 className='text-white'>GET READY TO RENT</h5>
                                <h3>Here is your guide to a more enjoyable apartment search.</h3>
                                <p>As has been said before, location, location, location is the most crucial consideration when selecting a home. The best size and layout for you, your budget, the distance to work or shopping, on-site and in-home amenities, and much more are all things to consider when searching for your next home. With our apartment hunting guide, renting is simple.</p>
                            </div>
                            <div className="btn-sections">
                                <a href="https://tenantsinmind.managebuilding.com/Resident/rental-application/new" target={"_blank"} rel="noreferrer" className="btn btn-lg btn-white-lg-outline">APPLY NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
