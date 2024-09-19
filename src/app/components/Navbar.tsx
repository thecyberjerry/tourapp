import Image from 'next/image'
import React from 'react'
import Button from './minicomponents/Button'

export default function Navbar({ navdata, logo }: any) {
    return (
        <div className='flex container my-[3.25rem]'>
            {logo && <div className="logo w-full">
                <Image className='w-fit' src={logo?.src} width={100} height={100} alt={logo?.alt} />
            </div>}
            <div className="logo w-full hidden md:flex justify-center items-center">
                <ul className='[&>*]:cursor-pointer inline-flex font-clashdisplay text-customyellow text-nowrap gap-10 font-medium '> 
                    {navdata && navdata?.list?.map((item: any, index: number) => {
                        return (
                            <li key={index} className='relative after:bg-primary after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-1/2 hover:after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>{item.title}</li>
                        )
                    })}

                </ul>
            </div>
            {navdata && navdata?.btn &&
                <div className="logo w-full flex justify-end items-center">
                    <Button btn={{ title: navdata?.btn?.title, color: navdata?.btn?.color }} />
                </div>}
        </div>
    )
}
