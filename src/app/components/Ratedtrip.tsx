import Image from 'next/image'
import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'

export default function Ratedtrip({ ratedtripdata }: any) {
    return (
        <div data-aos="fade-up" className='container flex flex-col lg:flex-row-reverse mt-40'>
            <div className="img w-full my-auto">
                {ratedtripdata && ratedtripdata?.img && <Image unoptimized className='w-full  object-contain object-center aspect-3/2' src={ratedtripdata?.img?.src} height={100} width={100} alt={ratedtripdata?.img?.alt} />}
            </div>
            <div className="max-w-[36.375rem] textcontent flex flex-col gap-7 m-auto">
                {ratedtripdata && ratedtripdata?.heading && <Heading2 heading={{ title: ratedtripdata?.heading?.title, color: ratedtripdata?.heading?.color }} />}
                <div className="para font-medium flex flex-col gap-3">
                    {ratedtripdata && ratedtripdata?.para?.map((item: any, index: number) => {
                        return (<Paragraph key={index} paragraph={{ title: item?.title, color: item?.color }} />)
                    })}
                </div>
            </div>
        </div>
    )
}
