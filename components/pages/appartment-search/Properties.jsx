import React from 'react'

export default function Properties() {
    return (
        <div className="properties-section-body content-area">
            <div className="container">
                <div className="main-title">
                    <h1>Find your next home.</h1>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-xs-12">
                        {/* Option bar start */}

                        {/* <div className="option-bar">
                            <div className="float-left">
                                <h4>
                                    <span className="heading-icon">
                                        <i className="fa fa-th-large" />
                                    </span>
                                    <span className="title-name">Properties Grid</span>
                                </h4>
                            </div>
                            <div className="float-right cod-pad">
                                <div className="sorting-options">
                                    <select className="sorting">
                                        <option>New To Old</option>
                                        <option>Old To New</option>
                                        <option>Properties (High To Low)</option>
                                        <option>Properties (Low To High)</option>
                                    </select>
                                    <a href="#" className="change-view-btn"><i className="fa fa-th-list" /></a>
                                    <a href="#" className="change-view-btn active-view-btn"><i className="fa fa-th-large" /></a>
                                </div>
                            </div>
                        </div> */}
                        
                        {/* grid properties start */}
                        <div className="row property-section">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a href="#" className="property-img">
                                            <div className="listing-badges">
                                                <span className="featured">Featured</span>
                                                <span className="listing-time">For Rent</span>
                                            </div>
                                            <div className="price-box">1275<small>/mo</small></div>
                                            <img className="d-block w-100" src="/img/properties/properties-1.jpg" alt="properties" />
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="#">Balance on Memorial</a>
                                        </h1>
                                        <div className="location">
                                            <a href="#">
                                                <i className="fa fa-map-marker" />941 W Memorial Rd, Oklahoma City, OK 73114
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-square" /> 789 Sq Ft
                                            </li>
                                            <li>
                                                <i className="flaticon-furniture" /> 1 Br
                                            </li>
                                            <li>
                                                <i className="flaticon-holidays" /> 1 Ba
                                            </li>
                                            <li>
                                                <i className="flaticon-vehicle" /> 1 Garage option
                                            </li>
                                            <li>
                                                <i className="flaticon-window" /> Pool
                                            </li>
                                            <li>
                                                <i className="flaticon-monitor" /> FitnessCenter
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <a><i className="fa fa-user" /> Jhon Doe</a>
                                        </div>
                                        <div className="pull-right">
                                            <a><i className="flaticon-time" /> 5 Days ago</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a href="#" className="property-img">
                                            <div className="listing-badges">
                                                <span className="featured">Featured</span>
                                                <span className="listing-time">For Rent</span>
                                            </div>
                                            <div className="price-box">1525<small>/mo</small></div>
                                            <img className="d-block w-100" src="/img/properties/properties-2.jpg" alt="properties" />
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="#">Balance on Memorial</a>
                                        </h1>
                                        <div className="location">
                                            <a href="#">
                                                <i className="fa fa-map-marker" />941 W Memorial Rd, Oklahoma City, OK 73114
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-square" /> 1050 Sq Ft
                                            </li>
                                            <li>
                                                <i className="flaticon-furniture" /> 2 Br
                                            </li>
                                            <li>
                                                <i className="flaticon-holidays" /> 2 Ba
                                            </li>
                                            <li>
                                                <i className="flaticon-vehicle" /> 1 Garage option
                                            </li>
                                            <li>
                                                <i className="flaticon-window" /> Pool
                                            </li>
                                            <li>
                                                <i className="flaticon-monitor" /> FitnessCenter
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <a><i className="fa fa-user" /> Jhon Doe</a>
                                        </div>
                                        <div className="pull-right">
                                            <a><i className="flaticon-time" /> 5 Days ago</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a href="#" className="property-img">
                                            <div className="listing-badges">
                                                <span className="featured">Featured</span>
                                                <span className="listing-time">For Rent</span>
                                            </div>
                                            <div className="price-box">1300<small>/mo</small></div>
                                            <img className="d-block w-100" src="/img/properties/properties-3.jpg" alt="properties" />
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="#">Balance on  Stone Wood Hill</a>
                                        </h1>
                                        <div className="location">
                                            <a href="#">
                                                <i className="fa fa-map-marker" />101 E Albany St Suite 101, Broken Arrow, OK 74012
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-square" /> 789 Sq Ft
                                            </li>
                                            <li>
                                                <i className="flaticon-furniture" /> 1 Br
                                            </li>
                                            <li>
                                                <i className="flaticon-holidays" /> 1 Ba
                                            </li>
                                            <li>
                                                <i className="flaticon-vehicle" /> 1 Garage option
                                            </li>
                                            <li>
                                                <i className="flaticon-window" /> Pool
                                            </li>
                                            <li>
                                                <i className="flaticon-monitor" /> FitnessCenter
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <a><i className="fa fa-user" /> Jhon Doe</a>
                                        </div>
                                        <div className="pull-right">
                                            <a><i className="flaticon-time" /> 5 Days ago</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a href="#" className="property-img">
                                            <div className="listing-badges">
                                                <span className="featured">Featured</span>
                                                <span className="listing-time">For Rent</span>
                                            </div>
                                            <div className="price-box">1400<small>/mo</small></div>
                                            <img className="d-block w-100" src="/img/properties/properties-4.jpg" alt="properties" />
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="#">Balance on Stone Wood Hill</a>
                                        </h1>
                                        <div className="location">
                                            <a href="#">
                                                <i className="fa fa-map-marker" />101 E Albany St Suite 101, Broken Arrow, OK 74012
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-square" />1050 Sq Ft
                                            </li>
                                            <li>
                                                <i className="flaticon-furniture" /> 2 Br
                                            </li>
                                            <li>
                                                <i className="flaticon-holidays" /> 2 Ba
                                            </li>
                                            <li>
                                                <i className="flaticon-vehicle" /> 1 Garage option 
                                            </li>
                                            <li>
                                                <i className="flaticon-window" /> Pool
                                            </li>
                                            <li>
                                                <i className="flaticon-monitor" /> FitnessCenter
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <a><i className="fa fa-user" /> Jhon Doe</a>
                                        </div>
                                        <div className="pull-right">
                                            <a><i className="flaticon-time" /> 5 Days ago</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a href="#" className="property-img">
                                            <div className="listing-badges">
                                                <span className="featured">Featured</span>
                                                <span className="listing-time">For Rent</span>
                                            </div>
                                            <div className="price-box">1200<small>/mo</small></div>
                                            <img className="d-block w-100" src="/img/properties/properties-5.jpg" alt="properties" />
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="#">Balance on Waterloo</a>
                                        </h1>
                                        <div className="location">
                                            <a href="#">
                                                <i className="fa fa-map-marker" />4253 E Waterloo Rd, Edmond, OK 73034
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-square" /> 789 Sq Ft
                                            </li>
                                            <li>
                                                <i className="flaticon-furniture" /> 1 Br
                                            </li>
                                            <li>
                                                <i className="flaticon-holidays" /> 1 Ba
                                            </li>
                                            <li>
                                                <i className="flaticon-vehicle" /> 1 Garage option
                                            </li>
                                            <li>
                                                <i className="flaticon-window" /> Pool
                                            </li>
                                            <li>
                                                <i className="flaticon-monitor" /> FitnessCenter
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <a><i className="fa fa-user" /> Jhon Doe</a>
                                        </div>
                                        <div className="pull-right">
                                            <a><i className="flaticon-time" /> 5 Days ago</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="property-box">
                                    <div className="property-thumbnail">
                                        <a href="#" className="property-img">
                                            <div className="listing-badges">
                                                <span className="featured">Featured</span>
                                                <span className="listing-time">For Rent</span>
                                            </div>
                                            <div className="price-box">1450<small>/mo</small></div>
                                            <img className="d-block w-100" src="/img/properties/properties-6.jpg" alt="properties" />
                                        </a>
                                    </div>
                                    <div className="detail">
                                        <h1 className="title">
                                            <a href="#">Balance on Waterloo</a>
                                        </h1>
                                        <div className="location">
                                            <a href="#">
                                                <i className="fa fa-map-marker" />4253 E Waterloo Rd, Edmond, OK 73034
                                            </a>
                                        </div>
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-square" /> 1050 Sq Ft
                                            </li>
                                            <li>
                                                <i className="flaticon-furniture" /> 2 Br
                                            </li>
                                            <li>
                                                <i className="flaticon-holidays" /> 2 Ba
                                            </li>
                                            <li>
                                                <i className="flaticon-vehicle" /> 1 Garage option
                                            </li>
                                            <li>
                                                <i className="flaticon-window" /> Pool
                                            </li>
                                            <li>
                                                <i className="flaticon-monitor" /> FitnessCenter
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="footer clearfix">
                                        <div className="pull-left days">
                                            <a><i className="fa fa-user" /> Jhon Doe</a>
                                        </div>
                                        <div className="pull-right">
                                            <a><i className="flaticon-time" /> 5 Days ago</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        
                        </div>
                        {/* Page navigation start */}
                        {/* <div className="pagination-box hidden-mb-45 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#"><i className="fa fa-angle-left" /></a>
                                    </li>
                                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#"><i className="fa fa-angle-right" /></a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
