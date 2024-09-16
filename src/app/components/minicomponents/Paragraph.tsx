import React from 'react'
import { Text } from '../../../../source/interface'
type Paragraph =
    {
        paragraph: Text
    }
export default function Paragraph({ paragraph }: Paragraph) {
    return (
        <div>
            <p className={paragraph && paragraph?.color ? paragraph?.color : "text-white"}>{paragraph && paragraph.title}</p>
        </div>
    )
}
