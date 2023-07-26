import React from 'react'

export default function OurStats() {
    return (
        <div className="counters-2">
            <div className="container">
                <div className="main-title">
                    <h1 className='text-white'>Our Stats</h1>
                    <h1 className='text-white'>Big foot, big footprint.</h1>
                    <p className='text-white'>We are NMHC&apos;s Top 10. We didn&apos;t just happen to be there. We&apos;ve worked hard at it, but it hasn&apos;t been easy.</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            <div className="icon"><i className="flaticon-tag" /></div>
                            <h1 className="counter">967</h1>
                            <p>Multifamily units</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            <div className="icon">
                                <i className="flaticon-apartment" />
                            </div>
                            <h1 className="counter">1276</h1>
                            <p>Apartment communities</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            <div className="icon">
                                <i className="flaticon-people" />
                            </div>
                            <h1 className="counter">396</h1>
                            <p>Student communities</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="counter-box">
                            <div className="icon">
                                <i className="flaticon-people-1" />
                            </div>
                            <h1 className="counter">177</h1>
                            <p>Single-family communities</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
