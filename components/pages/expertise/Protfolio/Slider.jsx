

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Portfolio/TAVA WATERS.jpg" height="80%" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h1 className='text-white'>TAVA WATERS</h1>
                                {/* <h3>A more intelligent way to grow, invest, manage, and live.</h3> */}
                                <p>We&apos;re multifamily industry leaders at Balance On Life. We exceed expectations and excel in our ongoing search for more intelligent ways to expand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Portfolio/banner.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h1 className='text-white'>Park at Main</h1>
                                {/* <h3>A more intelligent way to grow, invest, manage, and live.</h3> */}
                                <p>We&apos;re multifamily industry leaders at Balance On Life. We exceed expectations and excel in our ongoing search for more intelligent ways to expand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Portfolio/Image20221115085501-scaled.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h1 className='text-white'>OUR EXPERTISE</h1>
                                {/* <h3>A more intelligent way to grow, invest, manage, and live.</h3> */}
                                <p>We&apos;re multifamily industry leaders at Balance On Life. We exceed expectations and excel in our ongoing search for more intelligent ways to expand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Portfolio/Northpoint Crossing.JPG" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h1 className='text-white'>OUR EXPERTISE</h1>
                                {/* <h3>A more intelligent way to grow, invest, manage, and live.</h3> */}
                                <p>We&apos;re multifamily industry leaders at Balance On Life. We exceed expectations and excel in our ongoing search for more intelligent ways to expand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
       
      </Swiper>
    </>
  );
}
