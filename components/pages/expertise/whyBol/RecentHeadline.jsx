import React from 'react'

export default function RecentHeadline() {
    return (
        <div className="categories content-area-8 bg-grea-3">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                    <h1>Look at some of our most recent headlines.</h1>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p> */}
                </div>
                <div className="row wow">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box cat-0-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">News</a>
                                                </h3>
                                                {/* <div className="category-subtitle">14 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box cat-b-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">Articles</a>
                                                </h3>
                                                {/* <div className="category-subtitle">98 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box cat-c-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">A case study</a>
                                                </h3>
                                                {/* <div className="category-subtitle">98 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="btn-sections col-md-12 text-center">
                                <a href="#" className="btn btn-lg btn-primary-lg-outline">LEARN MORE</a>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}