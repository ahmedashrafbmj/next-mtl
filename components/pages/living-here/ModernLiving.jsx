import React from 'react'

export default function ModernLiving() {
    return (
        <div className="categories content-area-4 bg-grea-3">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                    <h4>MODERN LIVING</h4>
                    <h1>DESIGN YOUR LIFESTYLE WITH US.</h1>
                </div>
                <div className="row wow align-items-center justify-content-between">
                    <div className="col-md-6">
                        <h5>EASIER ROUTINES</h5>
                        <ul style={{ listStyle: 'outside' }}>
                            <li>Requests for maintenance can be made at any time, providing you with the service you require.</li>
                            <li>So that you never have to worry about trash day, valet trash removal... or the accumulating boxes.</li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src="/img/livingHere/1.jpg" alt="EASIER ROUTINES" />
                    </div>
                </div>
                <div className="row wow align-items-center justify-content-between">
                    <div className="col-md-5">
                        <img className="img-fluid" src="/img/livingHere/2.jpg" alt="HEALTHIER YOU" />
                    </div>
                    <div className="col-md-6">
                        <h5>HEALTHIER YOU</h5>
                        <ul style={{ listStyle: 'outside' }}>
                            <li>Modern fitness facilities to maintain your health and fitness without ever leaving the property.</li>
                            <li>Smoking-free zones* to preserve the quality of the air inside and around our properties.</li>
                            <li>To access virtual training for the body and mind, we subscribe to online fitness programs*, view the schedule of Live Virtual Events on their website.</li>
                        </ul>
                        <small>*available in select communities</small>
                    </div>
                </div>
                <div className="row wow align-items-center justify-content-between">
                    <div className="col-md-5">
                        <h5>SMARTER LIVING</h5>
                        <ul style={{ listStyle: 'inside' }}>
                            <li>We have programable thermostats in every one of our homes</li>
                            <li>All our appliances are energy efficient</li>
                            <li>We add all high efficient toilets, faucets and shower heads</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="/img/livingHere/3.jpg" alt="HAPPIER HOME" />
                    </div>
                </div>

                {/* <div className="row wow align-items-center justify-content-between">
                    <div className="col-md-6">
                        <h5>SMARTER LIVING</h5>
                        <ul style={{ listStyle: 'outside' }}>
                        <li>We have programable thermostats in every one of our homes</li>
                            <li>All our appliances are energy efficient</li>
                            <li>We add all high efficient toilets, faucets and shower heads.</li>
                        </ul>
                        <small>*available in select communities</small>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src="/img/livingHere/3.jpg" alt="SMARTER LIVING" />
                    </div>
                </div> */}
                <div className="row wow align-items-center justify-content-between">
                    <div className="col-md-6">
                        <img className="img-fluid" src="/img/livingHere/4.jpg" alt="HAPPIER HOME" />
                    </div>
                    <div className="col-md-5">
                        <h5>HAPPIER HOME</h5>
                        <ul style={{ listStyle: 'inside' }}>
                            <li>Please feel free to relocate your four-legged friends to one of our pet-friendly communities.</li>
                            <li>Outdoor gathering places where you can congregate, get to know your neighbors, and foster a sense of neighborhood.</li>
                            <li>At Balance on Life your wellbeing is our top priority, we want you to have a happy, healthy, well balanced life and we have a team ready to help you with anything you might need to achieve it.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
