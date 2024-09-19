import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Image from 'next/image'

export default function Partners({ partnersdata }: any) {
    return (
        <div data-aos="fade-up" className='container mt-64'>
            <div className="textcontent text-center flex flex-col gap-7">
                {partnersdata && partnersdata?.heading && <Heading2 heading={{ title: partnersdata?.heading?.title, color: partnersdata?.heading?.color }} />}
                {partnersdata && partnersdata?.para &&
                    <div className="paragraph max-w-[43.75rem] mx-auto">
                        <Paragraph paragraph={{ title: partnersdata?.para?.title, color: partnersdata?.para?.color }} />
                    </div>}
            </div>
            <div className="partners flex [&>*]:w-min justify-around pt-11 flex-wrap gap-10 lg:gap-4">
                {partnersdata && partnersdata?.img && partnersdata?.img?.map((item: any, index: number) => {
                    return (<Image key={index} src={item?.src} height={100} width={100} alt={item?.alt} />)
                })}
            </div>
        </div>
    )
}