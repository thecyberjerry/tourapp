import Image from 'next/image'
import React from 'react'
import CustomText from './Text'

export default function Insightcard() {
    const custom = "10 Must-Visit Destinations for Your Next Adventure to the Northern Europe "
    return (
        <div className='max-w-[22rem] bg-white rounded-2xl mx-auto'>
            <div className="img w-full py-4">
                <Image className='w-full object-contain object-center aspect-3/2' src={"/assets/images/insights/img_insight.svg"} height={100} width={100} alt='Some Image' />
            </div>
            <div className="text  p-4 gap-11 flex flex-col">
                <CustomText text={{ title: custom, size: "text-subheading", weight: "font-bold", color: "text-neutralmediumdark" }} />
                <div className="bottomtext flex justify-between">
                    <div className="name">
                        <CustomText text={{ title: "Naya Kile" }} />
                        <div className="time">
                            <CustomText text={{ title: "12 Hours ago", color: "text-neutralmediumlight", size: "text-tiny", weight: "font-medium" }} />
                        </div>
                    </div>
                    <div className="likes my-auto flex gap-2">
                        <div className="like w-full flex gap-2">
                            <Image className='w-full object-contain object-center aspect-3/2' src={"/assets/images/insights/likes.svg"} width={100} height={100} alt='Some Image' />
                            <CustomText text={{ title: "189", color: "text-neutrallight" }} />
                        </div>
                        <div className="like w-full flex gap-2">
                            <Image className='w-full object-contain object-center aspect-3/2' src={"/assets/images/insights/comment.svg"} width={100} height={100} alt='Some Image' />
                            <CustomText text={{ title: "189", color: "text-neutrallight" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
