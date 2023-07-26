import Link from 'next/link'
import React from 'react'

export default function NextMove() {
    return (
        <div className="categories content-area-8 bg-grea-3">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                    <h1>Are you prepared to take action now?</h1>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p> */}
                </div>
                <div className="row wow">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box cat-1-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <Link href="/living-here/get-ready-to-rent">Get Ready To Rent</Link>
                                                </h3>
                                                {/* <div className="category-subtitle">14 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box cat-2-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <Link href="/living-here/leasing101">Leasing 101</Link>
                                                </h3>
                                                {/* <div className="category-subtitle">98 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box cat-6-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <Link href="/living-here">Living Here</Link>
                                                </h3>
                                                {/* <div className="category-subtitle">98 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
