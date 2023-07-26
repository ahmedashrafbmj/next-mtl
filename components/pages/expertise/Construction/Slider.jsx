

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function ConstructionSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Construction/slider.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h1 className='text-white'>OUR EXPERTISE</h1>
                                {/* <h3>A more intelligent way to grow, invest, manage, and live.</h3>
                                <p>We&apos;re multifamily industry leaders at Balance On Life. We exceed expectations and excel in our ongoing search for more intelligent ways to expand.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Construction/slider2.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h1 className='text-white'>OUR EXPERTISE</h1>
                                {/* <h3>A more intelligent way to grow, invest, manage, and live.</h3>
                                <p>We&apos;re multifamily industry leaders at Balance On Life. We exceed expectations and excel in our ongoing search for more intelligent ways to expand.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Construction/slider3.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h1 className='text-white'>OUR EXPERTISE</h1>
                                {/* <h3>A more intelligent way to grow, invest, manage, and live.</h3>
                                <p>We&apos;re multifamily industry leaders at Balance On Life. We exceed expectations and excel in our ongoing search for more intelligent ways to expand.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="banner" id="banner">
                <div className="banner-max-height item-bg active">
                    <img className="d-block w-100 h-100" src="/img/Expertise/Construction/slider4.jpg" alt="banner" />
                    <div className="carousel-caption banner-slider-inner d-flex h-100 text-center">
                        <div className="carousel-content container">
                            <div className="text-center banner-info">
                                <h1 className='text-white'>OUR EXPERTISE</h1>
                                {/* <h3>A more intelligent way to grow, invest, manage, and live.</h3>
                                <p>We&apos;re multifamily industry leaders at Balance On Life. We exceed expectations and excel in our ongoing search for more intelligent ways to expand.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div></SwiperSlide>
       
      </Swiper>
    </>
  );
}
