import Image from 'next/image'
import React from 'react'
import Button from './minicomponents/Button'

export default function Navbar() {
    return (
        <div className='flex container my-[3.25rem]'>
            <div className="logo w-full">
                <Image className='w-fit' src={"./assets/images/logo/logo.svg"} width={100} height={100} alt='Some Image' />
            </div>
            <div className="logo w-full hidden md:flex justify-center items-center">
                <ul className='inline-flex font-clashdisplay text-customyellow text-nowrap gap-10 font-medium '>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="logo w-full flex justify-end items-center">
                <Button btn={{ title: "Book A Tour→", color: "text-richbrown" }} />
            </div>
        </div>
    )
}
