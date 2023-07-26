import React from 'react'

export default function OurResults() {
    return (
        <div className="counters-2 counters-3">
            <div className="container">
                <div className="main-title">
                    <h1 className='text-white'>PER THOUSANDS</h1>
                    <h1 className='text-white'>Vast footprint impressive outcomes</h1>
                    {/* <p className='text-white'>We are NMHC&apos;s Top 10. We didn&apos;t just happen to be there. We&apos;ve worked hard at it, but it hasn&apos;t been easy.</p> */}
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            <div className="icon"><i className="flaticon-tag" /></div>
                            <h1 className="counter">330</h1>
                            <p>MULTIFAMILIES ESTATES</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            <div className="icon">
                                <i className="flaticon-apartment" />
                            </div>
                            <h1 className="counter">1276</h1>
                            <p>SEVERAL FAMILY UNITS</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            <div className="icon">
                                <i className="flaticon-people" />
                            </div>
                            <h1 className="counter">396</h1>
                            <p>COLLEGE COMMUNITIES</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            <div className="icon">
                                <i className="flaticon-people-1"/>
                            </div>
                            <h1 className="counter">177</h1>
                            <p>STATES</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
