import Link from "next/link";
import React from "react";

export default function OurExpertise() {
  return (
    <div className="services-2 bg-grea pt-3">
      <div className="container-fluid">
        <div className="row wow align-items-center">
          {/* <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="services-demo">
              <div className="service-detail">
                <Link href="#">
                <h3 className="mb-5"> REQUEST AN APPOINTMENT</h3>
                </Link>
                <Link href="#">
                <h3 className="mt-5">MEDICAL QUESTIONNAIRE</h3>
                </Link>
                <Link href="#">
                <h3 className="mt-5">ONLINE REFERRAL </h3>
                </Link>
                <Link href="#">
                <h3 className="mt-5">FREQUENTLY ASKED QUESTIONS </h3>
                </Link>
               
              </div>
            </div>
          </div> */}
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="service-info-3 row justify-content-between align-item-center">
              <div className="col-lg-3">
                <div className="service-info-3 d-flex justify-content-center align-item-center">
                <div className="service-detail" >
                  <h6 className="text-center">REQUEST AN &amp; APPOINTMENT</h6>
                    </div>
               
                </div>
              </div>
              <div className="col-lg-3">
                <div className="service-info-3 d-flex justify-content-center align-item-center">
                  {/* <div className="icon">
                                <i className="flaticon-coins" />
                            </div> */}
                  <div className="service-detail" >
                    <h6 className="text-center">CONSTRUCTION</h6>
                  
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="service-info-3">
                  {/* <div className="icon">
                                <i className="flaticon-vehicle" />
                            </div> */}
                  <div className="service-detail d-flex justify-content-center align-item-center">
                    <h6 className="text-center">LEASE UP</h6>
                   
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="service-info-3 mb-0 d-flex justify-content-center align-item-center">
                  {/* <div className="icon">
                                <i className="flaticon-internet" />
                            </div> */}
                  <div className="service-detail" >
                    <h6 className="text-center">PROPERTY MANAGEMENT</h6>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
