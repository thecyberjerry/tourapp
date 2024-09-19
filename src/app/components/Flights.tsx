import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Image from 'next/image'
export default function Flights({ flightsdata }: any) {
    return (
        <div data-aos="fade-up" className='container mt-40 flex flex-col gap-12'>
            <div className="heading text-center flex flex-col gap-7">
                {flightsdata && flightsdata?.heading && <Heading2 heading={{ title: flightsdata?.heading?.title, color: flightsdata?.heading?.color }} />}
                {flightsdata && flightsdata?.para &&
                    <div className="para max-w-[41.25rem] mx-auto">
                        <Paragraph paragraph={{ title: flightsdata?.para?.title, color: flightsdata?.para?.color }} />
                    </div>}
            </div>
            <div className="logos flex flex-wrap justify-center [&>*]:w-fit lg:[&>*]:w-1/6 gap-24 ">
                {flightsdata && flightsdata?.img?.map((item: any, index: number) => {
                    return (<Image key={index} src={item?.src} height={100} width={100} alt={item?.alt} />)
                })}
            </div>
        </div>
    )
}
