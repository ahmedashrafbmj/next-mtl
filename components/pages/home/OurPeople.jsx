import Link from 'next/link'
import React from 'react'

export default function OurPeople() {
    return (
        <div className="services-2 content-area-5 bg-grea">
            <div className="container">
                <div className="row wow  align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="services-demo">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            {/* <img className="img-fluid" src="/img/Home/our-people.jpg" alt="properties" /> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="service-detail">
                            <h3>
                            BROSSARD

                            </h3>
                            {/* <h2>
                               We treat our people, partners, and places with respect. We act responsibly, ethically, and with the best
                            </h2> */}
                            <p>4905 boul. Lapinière, bureau 4400
Brossard, Qc

</p>
                            <p>J4Z 0G2
(450) 676-3613</p>
                            <div className="btn-sections">
                                <Link href="#" className="btn btn-lg btn-primary-lg-outline">WORK HERE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
