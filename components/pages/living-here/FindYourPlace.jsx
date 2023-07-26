import React from 'react'

export default function FindYourPlace() {
    return (
        <div className="categories content-area-4 bg-grea-3">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                    <h4>FIND YOUR PLACE</h4>
                    <h1>The place to start is at home.</h1>
                    <div className="btn-sections">
                        <a href="#" className="btn btn-lg btn-primary-lg-outline">SEARCH APARTMENTS</a>
                    </div>
                </div>
                <div className="row wow align-items-center justify-content-between">
                    <div className="col-md-5">
                        <img className="img-fluid" src="/img/livingHere/Service-at-Your-Fingertips-1.jpg" alt="EASIER ROUTINES" />
                    </div>
                    <div className="col-md-6">
                        <h5>ALREADY A RESIDENT?</h5>
                        <h2>Service is easily accessible.</h2>
                        <p>To manage your account, access the Resident Portal by logging in.</p>
                        <div className="btn-sections">
                            <a href="#" className="btn btn-lg btn-primary-lg-outline">LOG-IN NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
