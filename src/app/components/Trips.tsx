import Image from 'next/image'
import React from 'react'
import Heading3 from './minicomponents/Heading3'
import Paragraph from './minicomponents/Paragraph'
import CustomText from './minicomponents/Text'

const para = "Planning your next adventure has never been simpler. Follow these easy steps to book your dream trip with ease, and embark on a journey filled with peace and serenity:"
const list = "Explore our wide range of destinations, accommodations, and activities, then choose the perfect options for your trip."
export default function Trips() {
    return (
        <div className='bg-secondary mt-40 [&>*]:mx-auto '>
            <div data-aos="fade-up" className="container sm:flex sm:flex-row-reverse  py-20 gap-20">
                <div className='imgwrapper w-full  my-auto'>
                    <Image className='aspect-square w-full object-cover object-center' src={"/assets/images/trip/trip.png"} height={100} width={100} alt='Some Image' />
                </div>
                <div className="textcontent gap-5 flex flex-col w-full ">
                    <div className="textcontent__upper flex flex-col gap-7">
                        <div className="heading text-center sm:text-left max-w-[28.563rem]">
                            <Heading3 heading={{ title: "Your Trip, Your Way Just a few clicks away ", color: "text-neutraldark" }} />
                        </div>
                        <div className="para max-w-[37.5rem]">
                            <Paragraph paragraph={{ title: para, color: "text-neutrallight" }} />
                        </div>
                    </div>
                    <div className="list flex flex-col gap-5">
                        <div className="list-wrapper flex gap-4 ">
                            <div>
                                <div className="number bg-primary py-3 px-4 rounded-xl">
                                    <CustomText text={{ title: "1", weight: "font-bold", size: "text-subheading", color: "text-neutraldark" }} />
                                </div>
                            </div>
                            <div className="list-text">
                                <CustomText text={{ title: "Browse and Select", weight: "font-bold", size: "text-body", color: "text-neutralmediumdark" }} />
                                {/*  */}
                                <div className="listpara max-w-[36.5rem]">
                                    <CustomText text={{ title: list, weight: "font-normal", size: "text-smallbody", color: "text-neutralmediumdark" }} />
                                </div>
                            </div>
                        </div>
                        <div className="list-wrapper flex gap-4 ">
                            <div>
                                <div className="number bg-primary py-3 px-4 rounded-xl">
                                    <CustomText text={{ title: "2", weight: "font-bold", size: "text-subheading", color: "text-neutraldark" }} />
                                </div>
                            </div>
                            <div className="list-text">
                                <CustomText text={{ title: "Browse and Select", weight: "font-bold", size: "text-body", color: "text-neutralmediumdark" }} />
                                {/*  */}
                                <div className="listpara max-w-[36.5rem]">
                                    <CustomText text={{ title: list, weight: "font-normal", size: "text-smallbody", color: "text-neutralmediumdark" }} />
                                </div>
                            </div>
                        </div>
                        <div className="list-wrapper flex gap-4 ">
                            <div>
                                <div className="number bg-primary py-3 px-4 rounded-xl">
                                    <CustomText text={{ title: "3", weight: "font-bold", size: "text-subheading", color: "text-neutraldark" }} />
                                </div>
                            </div>
                            <div className="list-text">
                                <CustomText text={{ title: "Browse and Select", weight: "font-bold", size: "text-body", color: "text-neutralmediumdark" }} />
                                {/*  */}
                                <div className="listpara max-w-[36.5rem]">
                                    <CustomText text={{ title: list, weight: "font-normal", size: "text-smallbody", color: "text-neutralmediumdark" }} />
                                </div>
                            </div>
                        </div>
                        <div className="list-wrapper flex gap-4 ">
                            <div>
                                <div className="number bg-primary py-3 px-4 rounded-xl">
                                    <CustomText text={{ title: "3", weight: "font-bold", size: "text-subheading", color: "text-neutraldark" }} />
                                </div>
                            </div>
                            <div className="list-text">
                                <CustomText text={{ title: "Browse and Select", weight: "font-bold", size: "text-body", color: "text-neutralmediumdark" }} />
                                {/*  */}
                                <div className="listpara max-w-[36.5rem]">
                                    <CustomText text={{ title: list, weight: "font-normal", size: "text-smallbody", color: "text-neutralmediumdark" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
