import Image from 'next/image'
import React from 'react'
import Paragraph from './minicomponents/Paragraph'

export default function Footer() {
    const para = "Experience personalized medical care from the comfort of your home."
    return (
        <footer className='mt-40 bg-secondary'>
            <div className="container">
                <div className='uppersection flex gap-32 py-12 flex-col lg:flex-row'>
                    <div className="logo w-fit flex flex-col gap-11">
                        <Image className='aspect-22/17 w-full object-contain object-center' src={"./assets/images/logo/logo2.svg"} height={100} width={100} alt='Some Image' />
                        <div className="para max-w-64">
                            <Paragraph paragraph={{ title: para, color: "text-neutralmediumdark" }} />
                        </div>
                    </div>
                    <div className="lists md:flex [&>*]:flex-1 w-full flex-wrap grid grid-cols-2 gap-8 md:gap-0">
                        <div className="list flex flex-col gap-5 my-auto">
                            <label htmlFor="">Support</label>
                            <ul className='flex flex-col gap-4 [&>*]:font-medium [&>*]:text-base [&>*]:font-manrope text-neutrallight'>
                                <li>Getting Started</li>
                                <li>FAQs</li>
                                <li>Help Articles</li>
                                <li>Report an Issue</li>
                                <li>Contact Help Desk</li>
                            </ul>
                        </div>
                        <div className="list flex flex-col gap-5 my-auto">
                            <label htmlFor="">Support</label>
                            <ul className='flex flex-col gap-4 [&>*]:font-medium [&>*]:text-base [&>*]:font-manrope text-neutrallight'>
                                <li>Getting Started</li>
                                <li>FAQs</li>
                                <li>Help Articles</li>
                                <li>Report an Issue</li>
                                <li>Contact Help Desk</li>
                            </ul>
                        </div>
                        <div className="list flex flex-col gap-5 my-auto">
                            <label htmlFor="">Support</label>
                            <ul className='flex flex-col gap-4 [&>*]:font-medium [&>*]:text-base [&>*]:font-manrope text-neutrallight'>
                                <li>Getting Started</li>
                                <li>FAQs</li>
                                <li>Help Articles</li>
                                <li>Report an Issue</li>
                                <li>Contact Help Desk</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="trademark border-t-2 border-t-accent2 py-6 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
                    <div className="socia flex w-fit gap-3">
                        <Image src={"/assets/images/footer/Vector.svg"} height={100} width={100} alt='Some Image' />
                        <Image src={"/assets/images/footer/Vector-1.svg"} height={100} width={100} alt='Some Image' />
                        <Image src={"/assets/images/footer/Vector-2.svg"} height={100} width={100} alt='Some Image' />
                        <Image src={"/assets/images/footer/Vector-3.svg"} height={100} width={100} alt='Some Image' />
                    </div>
                    <Paragraph paragraph={{ title: "HealNet 2024 © All Rights Reserved", weight: "font-body", color: "text-neutrallight" }} />
                </div>
            </div>
        </footer>
    )
}
