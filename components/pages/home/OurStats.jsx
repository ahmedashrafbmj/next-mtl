// import React from 'react'

// export default function OurStats() {
//     return (
//         <div className="counters-2">
//             <div className="container">
//                 <div className="main-title">
//                     <h1 className='text-white'>Our Stats</h1>
//                     <h1 className='text-white'>Big foot, big footprint.</h1>
                    // <p className='text-white'>We are NMHC&apos;s Top 10. We didn&apos;t just happen to be there. We&apos;ve worked hard at it, but it hasn&apos;t been easy.</p>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-3 col-md-6 col-sm-6">
//                         <div className="counter-box">
//                             <div className="icon"><i className="flaticon-tag" /></div>
//                             <h1 className="counter">Pools</h1>
//                             {/* <p>Multifamily units</p> */}
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-6">
//                         <div className="counter-box">
//                             <div className="icon">
//                                 <i className="flaticon-apartment" />
//                             </div>
//                             <h1 className="counter">Fitness center</h1>
//                             {/* <p>Apartment communities</p> */}
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-6">
//                         <div className="counter-box">
//                             <div className="icon">
//                                 <i className="flaticon-people" />
//                             </div>
//                             <h1 className="counter">Outdoor BBQs</h1>
//                             {/* <p>Student communities</p> */}
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-6">
//                         <div className="counter-box">
//                             <div className="icon">
//                                 <i className="flaticon-people-1" />
//                             </div>
//                             <h1 className="counter">9 foot tall ceilings</h1>
//                             {/* <p>Single-family communities</p> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from 'react'

export default function OurStats() {
    return (
        <div className="categories content-area-8 bg-grea-3">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                <h1>Our Stats</h1>
                <h1 >Big foot, big footprint.</h1>
                <p >We are NMHC&apos;s Top 10. We didn&apos;t just happen to be there. We&apos;ve worked hard at it, but it hasn&apos;t been easy.</p>


                </div>
                <div className="row wow">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box cat-111-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">Pools</a>
                                                </h3>
                                                {/* <div className="category-subtitle">14 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box cat-222-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">Fitness center</a>
                                                </h3>
                                                {/* <div className="category-subtitle">98 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box cat-666-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">Outdoor BBQs</a>
                                                </h3>
                                                {/* <div className="category-subtitle">98 Properties</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-pad">
                                <div className="category">
                                    <div className="category_bg_box cat-777-bg">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">9 foot tall ceilings</a>
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
