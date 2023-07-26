import React from 'react'

export default function Results() {
    return (
        <div className="counters-2 counters-3">
            <div className="container">
                <div className="main-title">
                    <h3 className='text-white'>OUR RESULTS</h3>
                    <h1 className='text-white'>Big foot, big footprint.</h1>
                    <p className='text-white'>We are NMHC&apos;s Top 10. We didn&apos;t just happen to be there. It&apos;
                    s been hard work, but we&apos;re here for it.</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            {/* <div className="icon">
                                <i className="flaticon-tag" />
                                </div> */}
                            <h1 className="counter">6.5</h1>
                            <p>MULTIFAMILY ACQUISITION COSTS TOTALED $1 BILLION SINCE 2000</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            {/* <div className="icon">
                                <i className="flaticon-apartment" />
                            </div> */}
                            <h1 className="counter">2.3</h1>
                            <p>BILLION DOLLARS INCLUDING INSTITUTIONAL EQUITY CO-INVESTED</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            {/* <div className="icon">
                                <i className="flaticon-people" />
                            </div> */}
                            <h1 className="counter">750</h1>
                            <p>GENERAL PARTNERSHIPS RAISED AND INVESTED MILLION DOLLARS.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            {/* <div className="icon">
                                <i className="flaticon-people-1"/>
                            </div> */}
                            <h1 className="counter">177</h1>
                            <p>STATES</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
