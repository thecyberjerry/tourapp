import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Image from 'next/image';
import CustomText from './minicomponents/Text';
import Rating from './minicomponents/Rating';

export default function Happytraveller() {
    const title = "Hear from Our Happy Travelers";
    const para = "Our travelers’ tales are the true measure of our service. Read through heartfelt stories and rave reviews from our community members who’ve turned their travel dreams into reality with NorthSide.";
    const customText = "Booking my trip through NorthSide was a breeze! From finding the perfect hotel to securing the best flight deals, everything was seamless and stress-free.";
    const name = "- Sarah Dylan, USA"
    return (
        <div data-aos="fade-up" className="container mt-40 flex flex-col gap-14">
            <div className="textcontent text-center flex flex-col gap-7">
                <Heading2 heading={{ title: title, color: "text-neutraldarkblack" }} />
                <div className="para max-w-[43.75rem] mx-auto">
                    <Paragraph paragraph={{ title: para, color: "text-neutralmediumdark" }} />
                </div>
            </div>
            <div className="map flex flex-col md:flex-row-reverse gap-24">
                <div className="img w-full relative">
                    <Image className="w-full" src={"./assets/images/travellers/map.svg"} height={100} width={100} alt='Some Image' />
                    <Image className="hidden md:block w-fit absolute top-[28%] left-[13%]" src={"./assets/images/travellers/pointers/1.svg"} height={100} width={100} alt='Some Image' />
                    <Image className="hidden md:block w-fit absolute top-[33%] right-[8%] " src={"./assets/images/travellers/pointers/2.svg"} height={100} width={100} alt='Some Image' />
                    <Image className="hidden md:block w-fit absolute top-[43%] right-[25%]" src={"./assets/images/travellers/pointers/3.svg"} height={100} width={100} alt='Some Image' />
                    <Image className="hidden md:block w-fit absolute top-[13%] left-[60%]" src={"./assets/images/travellers/pointers/4.svg"} height={100} width={100} alt='Some Image' />
                    <Image className="hidden md:block w-fit absolute top-[28%] left-[48%] " src={"./assets/images/travellers/pointers/5.svg"} height={100} width={100} alt='Some Image' />
                    <Image className="hidden md:block w-fit absolute bottom-[10%] left-[24%]" src={"./assets/images/travellers/pointers/6.svg"} height={100} width={100} alt='Some Image' />
                </div>
                <div className="textarea mx-auto max-w-96 my-auto flex flex-col gap-4">
                    <CustomText text={{ title: customText, color: "text-neutrallight", size: "text-bodyLarge", weight: "font-normal" }} />
                    <div className='flex justify-between'>
                        <div className='space-y-2'>
                            <CustomText text={{ title: name, weight: "font-bold", size: "text-body", color: "text-neutralmediumdark" }} />
                            <Rating rating={{ title: "4.1", bgcolor: "bg-primary", link: "/assets/images/destinations/star.svg" }} />
                        </div>
                        <div className="arrows w-fit flex gap-5">
                            <Image className=' mx-auto w-1/3 object-contain object-center aspect-3/2' src={"./assets/images/travellers/arrow.svg"} height={100} width={100} alt='Some Image' />
                            <Image className='rotate-180  mx-auto w-1/3 object-contain object-center aspect-3/2' src={"./assets/images/travellers/arrow.svg"} height={100} width={100} alt='Some Image' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
