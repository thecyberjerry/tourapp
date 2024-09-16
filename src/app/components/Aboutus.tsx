import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Image from 'next/image'

export default function Aboutus() {
    const title = "A little bit about us"
    const para = "We’re more than just a platform; we’re your passport to the world. At Northside, we are dedicated to demystifying travel by providing a streamlined, user-centric experience. From the moment you start planning to your final day of the journey, we are always here to actively ensure every step of your journey is as enjoyable as the destination itself."
    return (
        <div data-aos="fade-up" className='container mt-40'>
            <div className="textcontent text-center flex flex-col gap-7">
                <Heading2 heading={{ title: title, color: "text-black" }} />
                <div className="paragraph max-w-[43.75rem] mx-auto">
                    <Paragraph paragraph={{ title: para, color: "text-neutralmediumlight" }} />
                </div>
            </div>
            <div className="lower mt-10">
                <Image src={"/assets/images/aboutus/aboutus.svg"} height={100} width={100} alt='Some Image' />
            </div>
        </div>
    )
}
