import Image from 'next/image'
import React from 'react'
import CustomText from './Text'
import Paragraph from './Paragraph'

export default function Detailcard({ detailcard }: any) {
    return (
        <div className='flex flex-col items-center text-center max-w-[20.75rem]'>
            {detailcard && detailcard?.img && <div className="img w-fit">
                <Image src={detailcard?.img?.src} height={100} width={100} alt={detailcard?.img?.alt} />
            </div>}
            <div className="textcontent">
                {detailcard && detailcard?.iconHeading && <div className='pb-3 pt-6'>
                    <CustomText text={{ title: detailcard?.iconHeading?.title, weight: detailcard?.iconHeading?.weight, size: detailcard?.iconHeading?.size, color: detailcard?.iconHeading?.color }} />
                </div>}
                {detailcard && detailcard?.para &&
                    <Paragraph paragraph={{ title: detailcard?.para?.title, weight: detailcard?.para?.weight, color: detailcard?.para?.color }} />}
            </div>
        </div>
    )
}
