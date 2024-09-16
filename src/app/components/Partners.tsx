import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Image from 'next/image'

export default function Partners() {
    const title = "Get to know our esteemed partners"
    const para = "We’re proud to partner with leading airlines and hotels, ensuring you have a premium experience every step of the way. Whether you're jet-setting across continents or exploring hidden gems closer to home, travel with confidence knowing you're in good hands."
    return (
        <div data-aos="fade-up" className='container mt-64'>
            <div className="textcontent text-center flex flex-col gap-7">
                <Heading2 heading={{ title: title, color: "text-black" }} />
                <div className="paragraph max-w-[43.75rem] mx-auto">
                    <Paragraph paragraph={{ title: para, color: "text-neutralmediumlight" }} />
                </div>
            </div>
            <div className="partners flex [&>*]:w-min justify-around pt-11 flex-wrap gap-4">
                <Image src={"./assets/images/partners/partners/Group.svg"} height={100} width={100} alt='Some Image' />
                <Image src={"./assets/images/partners/partners/Group2.svg"} height={100} width={100} alt='Some Image' />
                <Image src={"./assets/images/partners/partners/Group3.svg"} height={100} width={100} alt='Some Image' />
                <Image src={"./assets/images/partners/partners/Group4.svg"} height={100} width={100} alt='Some Image' />
                <Image src={"./assets/images/partners/partners/Group5.svg"} height={100} width={100} alt='Some Image' />
            </div>
        </div>
    )
}