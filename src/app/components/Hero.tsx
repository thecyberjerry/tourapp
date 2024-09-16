import React from 'react'
import Heading1 from './minicomponents/Heading1'
import Button from './minicomponents/Button'
import CustomText from './minicomponents/Text'
import Tabs from './minicomponents/Tabs'
export default function Hero() {
    const text = "Discover the country’s Northern Wonderland!"
    const para = "Uncover a World of Serenity and Adventure in India's Northern Oasis with NorthSide Travel & Tourism - Where Majestic Mountains Meet Tranquil Valleys. Start your expedition with just a click!"
    return (
        <div className={`container rounded-[2rem] px-16 bg-[url('/assets/images/hero/hero.webp')]`}>
            <div className='lg:min-h-[48.625rem] lg:max-h-[48.625rem] flex flex-col relative'>
                <div className="upper flex pt-8 gap-4">
                    <div className='text-nowrap w-fit'>
                        <CustomText text={{ title: "Special Offers Available", weight: "font-medium", size: "text-smallBody", color: "text-white" }} />
                    </div>
                    <div className='border-t-2 w-full p-0 h-0 my-auto'></div>
                    <div className='text-nowrap'>
                        <CustomText text={{ title: "February 2024-June 2030", weight: "font-medium", size: "text-smallBody", color: "text-white" }} />
                    </div>
                </div>
                <div className="textcontent max-w-[46rem] flex flex-col mt-28">
                    <div className="heading">
                        <Heading1 heading={{ title: text }} />
                    </div>
                    <div className="paragraph max-w-[37.75rem] pt-11 pb-14">
                        <CustomText text={{ title: para, size: "text-bodyLarge", weight: "font-bold", color: "text-white" }} />
                    </div>
                    <div className="btn font-helvetice flex gap-4 flex-wrap">
                        <Button btn={{ title: "Get Started", color: "text-richbrown", size: "text-bodyLarge" }} />
                        <Button btn={{ title: "Learn more", color: "text-accent1", bgcolor: "bg-secondary", size: "text-bodyLarge" }} />
                    </div>
                </div>
                <div className="tabs absolute w-full h-24 bottom-14">
                    <Tabs />
                </div>
            </div>
        </div>
    )
}
