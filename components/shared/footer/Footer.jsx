import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* Footer start */}
            <footer className="footer">
                <div className="container footer-inner">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-item">
                                <Link href={"/"}>  <img src="/img/logos/logo (2).png" alt="logo" className="logo-none-2" width="35%" /> </Link>
                                <ul className="social-list clearfix mt-5">
                                    <li><a href="#" className="facebook-bg"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#" className="twitter-bg"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#" className="google-bg"><i className="fa fa-google-plus" /></a></li>
                                    <li><a href="#" className="rss-bg"><i className="fa fa-rss" /></a></li>
                                    <li><a href="#" className="linkedin-bg"><i className="fa fa-linkedin" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-item">
                                <h4>Our Company</h4>
                                <ul className="links">
                                    <li>
                                        <Link className="" href={"#"}>
                                            Locations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="" href={"#"} >
                                            About Balance on life
                                        </Link>                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-item">
                                <h4>Residents</h4>
                                <ul className="links">
                                    <li>
                                        <Link className="" href={"#"}>
                                            Locations
                                        </Link>
                                    </li>
                                    <li><a href="#" rel='noreferrer' target={"_blank"}>Resident Portal</a></li>

                                    <li><Link href={"#"}>Leasing 101</Link></li>

                                </ul>
                            </div>  
                        </div>
                        {/* <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-item">
                                <h4>Partners & Investors</h4>
                                <ul className="links">
                                    <li><a href="https://www.oklahomamultifamilygroup.com" rel='noreferrer' target={"_blank"}>Investor Log-in </a></li>

                                    <li>
                                        <a href="https://www.actionmultifamily.com" rel='noreferrer' target={"_blank"}>Vendor Info</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-item">
                                <h4>Privacy</h4>
                                <ul className="links">
                                    <li>
                                        <Link href={"/privacy-policy"}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <a>California Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a>Do Not Sell My Personal Info</a>
                                    </li>
                                    <li>
                                        <Link href={"/terms-of-use"}>Terms of Use</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </footer>
            {/* Sub footer start */}
            <div className="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy">© 2022 MONTREAL. Services, LLC. All rights Reserved. Properties managed by MONTREAL.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
