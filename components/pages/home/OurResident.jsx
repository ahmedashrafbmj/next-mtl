import Link from 'next/link'
import React from 'react'

export default function OurResident() {
    return (
        <div className="services-2 content-area-5 bg-grea-3">
            <div className="container">
                {/* Main title */}
                <div className="main-title d-flex">
                <Link href="#">
                <h6 > REQUEST AN APPOINTMENT</h6>
                </Link>
                <Link href="#">
                <h6 >MEDICAL QUESTIONNAIRE</h6>
                </Link>
                <Link href="#">
                <h6 >ONLINE REFERRAL </h6>
                </Link>
                <Link href="#">
                <h6 >FREQUENTLY ASKED QUESTIONS </h6>
                </Link>                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p> */}
                </div>
                <div className="row wow  align-items-center mt-5">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="services-demo">
                            <img className="img-fluid" src="/img/Home/our-residents.jpg" alt="properties" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="service-detail">
                            {/* <h3>
                                OUR RESIDENTS
                            </h3> */}
                            {/* <h2>
                                A place to live &amp; prosper
                            </h2> */}
                            <p className='lead fw-bolder'>
                                <strong>
                                    Our surgeons, doctors Alexandre Dostie and Olivier Béchard, are certified by the <b>Royal College of Dentists of Canada,</b>  a national standard that all patients should seek in a specialist. They are experts in various fields of their specialty such as:
                                    </strong>
                                    </p>
                                <p className='mb-3'>The administration of <Link href="#"> intravenous sedation,</Link> used in the vast majority of their patients, to treat comfortably and smoothly;</p>
                                <p >The extraction of third molars, also known as <Link href="#"> wisdom teeth;</Link></p>
                                <p className='mt-3'>The planning and placement of <Link href="#"> dental implants,</Link> including the All-On-Four technique, graftless solutions, zygomatic implants and teeth-in-a-day;</p>
                                <p className='mt-3'>Different forms of jaw reconstruction such as <Link href="#">orthognathic surgery</Link> .</p>
                        
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
