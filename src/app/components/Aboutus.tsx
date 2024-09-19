import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Image from 'next/image'

export default function Aboutus({ aboutusdata }: any) {
    return (
        <div data-aos="fade-up" className='container mt-40'>
            <div className="textcontent text-center flex flex-col gap-7">
                {aboutusdata && aboutusdata?.heading && <Heading2 heading={{ title: aboutusdata?.heading?.title, color: aboutusdata?.heading?.color }} />}
                {aboutusdata && aboutusdata?.para &&
                    <div className="paragraph max-w-[43.75rem] mx-auto">
                        <Paragraph paragraph={{ title: aboutusdata?.para?.title, color: aboutusdata?.para?.color }} />
                    </div>}
            </div>
            {aboutusdata && aboutusdata?.img && <div className="lower mt-10">
                <Image src={aboutusdata?.img?.src} height={100} width={100} alt={aboutusdata?.img?.alt} />
            </div>}
        </div>
    )
}
