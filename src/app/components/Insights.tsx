"use client"
import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Insightcard from './minicomponents/Insightcard'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Insights() {
    const heading = "Insights for the Inquisitive Traveler"
    const para = "Our blog is a trove of travel wisdom, filled with tips, news, and stories to inspire your next expedition. Whether you’re a seasoned traveler or embarking on your first adventure, our insights will pave the way to a richer travel experience."
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
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
        <div  className='mt-40 bg-secondary py-16'>
            <div data-aos="fade-up" className="container flex flex-col gap-11">
                <div className="textcontent flex flex-col gap-7">
                    <div className="heading max-w-[30rem] text-center mx-auto">
                        <Heading2 heading={{ title: heading, color: "text-neutraldarkblack" }} />
                    </div>
                    <div className="para max-w-[52rem] text-center mx-auto">
                        <Paragraph paragraph={{ title: para, color: "text-neutrallight" }} />
                    </div>
                </div>
                <div className="cards">
                    <Slider {...settings}>
                        <Insightcard />
                        <Insightcard />
                        <Insightcard />
                    </Slider>
                </div>
            </div>
        </div>
    )
}
