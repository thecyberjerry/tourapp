import Image from 'next/image'
import React from 'react'
import CustomText from './Text'
import Paragraph from './Paragraph'
import Button from './Button'
import Rating from './Rating'

export default function Destinationcard({ title }: any) {
    return (
        <div className='w-[22rem] relative shadow-xl rounded-2xl mx-auto'>
            <div className='absolute right-5 top-5'><Rating rating={{ title: "4.0", bgcolor: "bg-primary", link: "./assets/images/destinations/star.svg" }} /></div>
            <div className="img w-full rounded-2xl">
                <Image className='aspect-22/17 w-full rounded-t-2xl object-cover object-center' src={"/assets/images/destinations/cardimg.png"} height={100} width={100} alt='Some Image' />
            </div>
            <div className="description px-5 pt-5 pb-9">
                <CustomText text={{ title: title, size: "text-subheading", weight: "font-bold", color: "text-neutralmediumdark" }} />
                <div className="locations flex gap-6 pt-3.5 pb-6">
                    <Image className='w-fit' src={"./assets/images/destinations/locationpointer.svg"} height={100} width={100} alt='Some Image' />
                    <CustomText text={{ title: "Bali, Indonesia", weight: "font-bold", size: "text-body", color: "text-neutrallight" }} />
                </div>
                <div className="pricebtn flex justify-between">
                    <div className="price">
                        <CustomText text={{ title: "$490", color: "text-accent2", weight: "font-extrabold", size: "text-subheading" }} />
                        <Paragraph paragraph={{ title: "/per person", color: "text-neutralmediumlight" }} />
                    </div>
                    <Button btn={{ title: "Book Now", bgcolor: "bg-primary", color: "text-richbrown" }} />
                </div>
            </div>
        </div>
    )
}
