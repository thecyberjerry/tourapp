import Image from 'next/image'
import React from 'react'
import CustomText from './Text'
import Paragraph from './Paragraph'
import Button from './Button'
import Rating from './Rating'

export default function Destinationcard({ destinationcarddata }: any) {
    return (
        <div className='w-[15rem] sm:w-[22rem] relative shadow-xl rounded-2xl mx-auto'>
            {destinationcarddata && destinationcarddata?.rating && <div className='absolute right-5 top-5'>
                <Rating rating={{ title: destinationcarddata?.rating?.title, bgcolor: destinationcarddata?.rating?.bgcolor, link: destinationcarddata?.rating?.link }} />
            </div>}
            {destinationcarddata && destinationcarddata?.img &&
                <div className="img w-full rounded-2xl">
                    <Image className='aspect-22/17 w-full rounded-t-2xl object-cover object-center' src={destinationcarddata?.img?.src} height={100} width={100} alt={destinationcarddata?.img?.alt} />
                </div>}
            <div className="description px-5 pt-5 pb-9">
                {destinationcarddata && destinationcarddata?.title &&
                    <CustomText text={{ title: destinationcarddata?.title?.title, size: destinationcarddata?.title?.size, weight: destinationcarddata?.title?.weight, color: destinationcarddata?.title?.color }} />}
                {destinationcarddata && destinationcarddata?.pointer && destinationcarddata?.pointerLocation &&
                    <div className="locations flex gap-6 pt-3.5 pb-6">
                        <Image className='w-fit' src={destinationcarddata?.pointer?.src} height={100} width={100} alt={destinationcarddata?.pointer?.alt} />
                        <CustomText text={{ title: destinationcarddata?.pointerLocation?.title, weight: destinationcarddata?.pointerLocation?.weight, size: destinationcarddata?.pointerLocation?.size, color: destinationcarddata?.pointerLocation?.color }} />
                    </div>
                }
                <div className="pricebtn flex justify-between">
                    <div className="price">
                        {destinationcarddata && destinationcarddata?.price &&
                            <CustomText text={{ title: destinationcarddata?.price?.title, color: destinationcarddata?.price?.color, weight: destinationcarddata?.price?.weight, size: destinationcarddata?.price?.size }} />}
                        <Paragraph paragraph={{ title: "/per person", color: "text-neutralmediumlight" }} />
                    </div>
                    {destinationcarddata?.btn && <Button btn={{ title: destinationcarddata?.btn?.title, bgcolor: destinationcarddata?.btn?.bgcolor, color: destinationcarddata?.btn?.color }} />}
                </div>
            </div>
        </div>
    )
}
