import React from 'react'
import Link from 'next/link'
export default function Leasing101livingGetReadyImages() {
    return (
        <div className="categories content-area-4 bg-grea-3">
            <div className="container">
                <div className="row wow">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box get-ready-to-rent-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <Link href="/living-here">Living Here</Link>
                                                </h3>
                                                {/* <div className="category-subtitle">14 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box get-ready-to-lease-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <Link href={"/living-here/get-ready-to-rent"}>Get Ready to Rent</Link>
                                                </h3>
                                                {/* <div className="category-subtitle">98 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box cat-6-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">Living Here</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
