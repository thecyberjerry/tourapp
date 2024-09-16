import React from 'react'
import { Heading } from '../../../../source/interface'

export default function Heading1({ heading }: Heading) {
    return (
        <div>
            <h1 className={`${heading && heading?.color ? heading?.color : "text-white"} break-all`}>{heading && heading?.title}</h1>
        </div>
    )
}
