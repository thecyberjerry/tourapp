import React from 'react'
import { Heading } from '../../../../source/interface'

export default function Heading2({ heading }: Heading) {
    return (
        <div className='text-center'>
            {heading &&
                <h2 className={`${heading && heading?.color ? heading?.color : "text-white"}`}>{heading && heading?.title}</h2>}
        </div>
    )
}
