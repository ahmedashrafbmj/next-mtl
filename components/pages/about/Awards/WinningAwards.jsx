import React from 'react'

export default function WinningAwards() {
    return (
        <div className="content-area py-5 bg-grea-3">
            <div className="container">
                <div className="main-title">
                    <h4>AWARDS</h4>
                    <h1>We have won awards for our business.</h1>
                </div>
                <div className="row">
                    <div className="col-md-4"><img className='img-fluid' src="/img/award.png" alt="award" /></div>
                    <div className="col-md-4"><img className='img-fluid' src="/img/award2.jpg" alt="award" /></div>
                    <div className="col-md-4"><img className='img-fluid' src="/img/award.png" alt="award" /></div>
                </div>
            </div>
        </div>
    )
}
