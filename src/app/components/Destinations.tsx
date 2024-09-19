"use client"
import React from "react";
import Slider from "react-slick";
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Destinationcard from './minicomponents/Destinationcard'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Destinations({ destinationdata }: any) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
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
                {destinationdata && destinationdata?.heading && <Heading2 heading={{ title: destinationdata?.heading?.title, color: destinationdata?.heading?.color }} />}
                {
                    destinationdata && destinationdata?.para &&
                    <div className="paragraph max-w-[43.75rem] mx-auto">
                        <Paragraph paragraph={{ title: destinationdata?.para?.title, color: destinationdata?.para?.color, size: destinationdata?.para?.size }} />
                    </div>
                }
            </div>

            <Slider {...settings}>
                {destinationdata && destinationdata?.slider?.map((item: any, index: number) => {
                    return (
                        <div key={index} className="py-8">
                            <Destinationcard destinationcarddata={item} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
