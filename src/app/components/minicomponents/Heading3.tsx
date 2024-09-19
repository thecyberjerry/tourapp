import React from 'react'
import { Heading } from '../../../../source/interface'

export default function Heading3({ heading }: Heading) {
    return (
        <div>
            {heading &&
                <h3 className={`${heading && heading?.color ? heading?.color : "text-white"} break-normal`}>{heading && heading?.title}</h3>}
        </div>
    )
}
