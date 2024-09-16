import Image from 'next/image'
import React from 'react'
import CustomText from './Text'
import { Btn } from '../../../../source/interface'
type Rating =
    {
        rating?: Btn
    }
export default function Rating({ rating }: Rating) {
    return (
        <>
            {rating &&
                <div className={`flex w-fit gap-2 px-4 py-2 rounded-xl drop-shadow-2xl ${rating?.bgcolor && rating?.bgcolor}`}>
                    {rating?.link && <Image className='w-fit' src={rating?.link} height={100} width={100} alt='Some Image' />}
                    <CustomText text={{ title: rating?.title, weight: "font-bold" }} />
                </div>}
        </>
    )
}
