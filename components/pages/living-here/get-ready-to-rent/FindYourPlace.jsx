import React from 'react'

export default function FindYourPlace() {
    return (
        <div className="categories content-area-4 bg-light">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                    <h4>FIND YOUR PLACE</h4>
                    <h1>The place to start is at home.</h1>
                </div>
                <div className="row wow align-items-center justify-content-between">
                    <div className="col-md-5">
                        <img className="img-fluid" src="/img/livingHere/Get-ready-to-rent/Service-at-Your-Fingertips.jpg" alt="EASIER ROUTINES" />
                    </div>
                    <div className="col-md-6">
                        <h5>EASIER ROUTINES</h5>
                        <h5>ALREADY A RESIDENT?</h5>
                        <h2>Service is easily accessible.</h2>
                        <p>To manage your account, access the Resident Portal by logging in.</p>
                        <div className="btn-sections">
                            <a href="https://signin.managebuilding.com/Resident/portal/global-login" target={"_blank"} rel="noreferrer" className="btn btn-lg btn-primary-lg-outline">LOG-IN NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
