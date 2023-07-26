import Link from 'next/link'
import React from 'react'

export default function ReadyToRent() {
    return (
        <div className="categories content-area-4 bg-grea">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                        {/* <h5>READY TO RENT?</h5>
                        <h1>WE ARE HERE TO HELP YOU WITH QUESTIONS ON YOU NEW HOME.</h1>
                        <p>Whether you enjoy going on adventures or remaining home, you'll be pleased to call a Balance On Life community your home. But before you begin packing your belongings, you should consider which neighborhood best suits your way of life. Get expert advice on everything from interpreting floor plans and layouts to delving into the specific amenides and the application proccess from our specialists. Give us a call!</p> */}
                </div>
                <div className="row wow">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box ready-to-rent-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <Link href="/location">Get Ready To Rent</Link>
                                                </h3>
                                                {/* <div className="category-subtitle">14 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box ready-to-lease-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="https://signin.managebuilding.com/Resident/portal/global-login" target={"_blank"} rel="noreferrer">Leasing 101</a>
                                                </h3>
                                                {/* <div className="category-subtitle">98 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              
                            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                <div className="category_bg_box cat-6-bg">
                                <div className="category-overlay">
                                <div className="category-content">
                                <h3 className="category-title">
                                <a href="#">Living Here</a>
                                </h3>
                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="btn-sections">
                        <a href="#" className="btn btn-lg btn-primary-lg-outline col-12 w-50 m-auto text-ce nter">Search jobs</a>
                    </div> */}
                     <div className="btn-sections m-auto col-lg-12">
                        <a href=" https://tenantsinmind.managebuilding.com/Resident/rental-application/new" className="btn btn-lg btn-primary-lg-outline" style={{marginLeft:"41%"}}>Apply Now</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
