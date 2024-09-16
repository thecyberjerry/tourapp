"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Destinationcard from './minicomponents/Destinationcard'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Destinations() {
    const title = "Explore our top destinations."
    const para = "Dive into the allure of iconic destinations around the globe and uncover new adventures waiting to be explored. From bustling cityscapes to serene beaches, each destination offers a unique experience for every traveler.";
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    autoplay: false,
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
        ]
    };
    return (
        <div data-aos="fade-up" className='container mt-40'>
            <div className="textcontent text-center flex flex-col gap-7">
                <Heading2 heading={{ title: title, color: "text-black" }} />
                <div className="paragraph max-w-[43.75rem] mx-auto">
                    <Paragraph paragraph={{ title: para, color: "text-neutralmediumlight", size: "font-body" }} />
                </div>
            </div>

            <Slider {...settings}>
                <div className="py-8">
                    <Destinationcard title="Sometitle" />
                </div>
                <div className="py-8">
                    <Destinationcard title="Sometitle2" />
                </div>
                <div className="py-8">
                    <Destinationcard title="Sometitle3" />
                </div>
                <div className="py-8">
                    <Destinationcard title="Sometitle3" />
                </div>
            </Slider>
        </div>
    )
}
