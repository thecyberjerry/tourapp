import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Image from 'next/image'
const heading = "Trusted Flight Connections for Seamless Journeys"
const para = "Experience unparalleled convenience and flexibility in your travel plans with our trusted partner airlines. Whether you're jet-setting across continents or exploring hidden gems closer to home, travel with confidence knowing you're in good hands."
export default function Flights() {
    return (
        <div data-aos="fade-up" className='container mt-40 flex flex-col gap-12'>
            <div className="heading text-center flex flex-col gap-7">
                <Heading2 heading={{ title: heading, color: "text-black" }} />
                <div className="para max-w-[41.25rem] mx-auto">
                    <Paragraph paragraph={{ title: para, color: "text-neutralmediumdark " }} />
                </div>
            </div>
            <div className="logos flex [&>*]:w-fit justify-center gap-24 flex-wrap ">
                <Image src={"/assets/images/flights/LAnding Page/logo.svg"} height={100} width={100} alt='Some Image' />
                <Image src={"/assets/images/flights/LAnding Page/logo 2.svg"} height={100} width={100} alt='Some Image' />
                <Image src={"/assets/images/flights/LAnding Page/logo 3.svg"} height={100} width={100} alt='Some Image' />
                <Image src={"/assets/images/flights/LAnding Page/logo 4.svg"} height={100} width={100} alt='Some Image' />
                <Image src={"/assets/images/flights/LAnding Page/logo 5.svg"} height={100} width={100} alt='Some Image' />
                <Image src={"/assets/images/flights/LAnding Page/logo 6.svg"} height={100} width={100} alt='Some Image' />
                <Image src={"/assets/images/flights/LAnding Page/logo 7.svg"} height={100} width={100} alt='Some Image' />
            </div>
        </div>
    )
}
