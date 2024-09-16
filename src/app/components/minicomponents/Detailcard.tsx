import Image from 'next/image'
import React from 'react'
import CustomText from './Text'
import Paragraph from './Paragraph'

export default function Detailcard() {
    const para = "Set Your Sights Higher - Our extensive network of airline partners offers you the freedom to fly how you want, where you want. With real-time price comparisons and a plethora of options, your ideal flight is at your fingertips."
    return (
        <div className='flex flex-col items-center text-center max-w-[20.75rem]'>
            <div className="img w-fit">
                <Image src={"./assets/images/northside/plane.svg"} height={100} width={100} alt='Some Text' />
            </div>
            <div className="textcontent">
                <div className='pb-3 pt-6'>
                    <CustomText text={{ title: "Easy Flights Reservation", weight: "font-bold", size: "text-subheading", color: "text-neutraldark" }} />
                </div>
                <Paragraph paragraph={{ title: para, weight: "font-normal", color: "text-neutrallight" }} />
            </div>
        </div>
    )
}
