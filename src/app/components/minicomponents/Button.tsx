import React from 'react'
import { Btn } from '../../../../source/interface'

type CustomButton =
    {
        btn?: Btn
    }
export default function Button({ btn }: CustomButton) {
    return (
        <div className="btn">
            {btn && <button className={`flex font-helvetice rounded-xl px-8 py-2  font-bold ${btn && btn?.size} ${btn && btn?.color ? btn?.color : "text-white"} ${btn && btn?.bgcolor ? btn?.bgcolor : "bg-yellow-300"}`}>{btn && btn?.title}</button>}
        </div >
    )
}
