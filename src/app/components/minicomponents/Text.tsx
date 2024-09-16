import React from 'react'
import { Text } from '../../../../source/interface'

type Heading = {
    text: Text
}
export default function CustomText({ text }: Heading) {
    return (
        <div className=''>
            {text &&
                <p className={`${text?.color} ${text?.weight} 
                ${text?.lineheight}
                ${text?.size}
                `}>{text?.title}</p>}
        </div>
    )
}
