import React from 'react'

export default function EncologicalImpact() {
    return (
        <div className="counters-2 counters-3">
            <div className="container">
                <div className="main-title">
                    <h5 className='text-white'>ECOLOGICAL IMPACT</h5>
                    <h3 className='text-white'>The Balance on life Green Initiative is creating a better future.</h3>
                    <p className='text-white'>By implementing a variety of energy and water conservation techniques, BH reduces its environmental effect and builds healthy, cost- and ecologically sustainable houses. The programme has, on average, cut water usage and costs by 36% and 34%, respectively. The BH Green Initiative has saved: since 2017.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 text-center col-md-6 col-sm-6">
                        <div className="counter-box">
                            {/* <div className="icon">
                                <i className="flaticon-tag" />
                                </div> */}
                            <h1 className="counter">6.5</h1>
                            <p>GALLONS OF WATER, PER DAY</p>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center col-md-6 col-sm-6">
                        <div className="counter-box">
                            {/* <div className="icon">
                                <i className="flaticon-apartment" />
                            </div> */}
                            <h1 className="counter">2.3</h1>
                            <p>ONE MILLION KWH OF ENERGY</p>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center col-md-6 col-sm-6">
                        <div className="counter-box">
                            {/* <div className="icon">
                                <i className="flaticon-people" />
                            </div> */}
                            <h1 className="counter">750</h1>
                            <p>TOTAL METER CO2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
