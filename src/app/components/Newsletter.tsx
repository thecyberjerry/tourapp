import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Button from './minicomponents/Button'

export default function Newsletter({ newsletterdata }: any) { 
    return (
        <div data-aos="fade-up" className='container mt-40 '>
            <div className="text-center">
                {newsletterdata && newsletterdata?.heading &&
                    <Heading2 heading={{ title: newsletterdata?.heading?.heading1?.title, color: newsletterdata?.heading?.heading1?.color }} />}
                <Heading2 heading={{ title: newsletterdata?.heading?.heading2?.title, color: newsletterdata?.heading?.heading2?.color }} />
            </div>
            {newsletterdata && newsletterdata?.para &&
                <div className="paragraph text-center max-w-[35rem] mx-auto py-7">
                    <Paragraph paragraph={{ title: newsletterdata?.para?.title, color: newsletterdata?.para?.color }} />
                </div>}
            <div className="input shadow-2xl bg-lightgray  max-w-[52rem] gap-4 mx-auto rounded-xl flex  ">
                <div className='w-full rounded-xl font-helvetice my-auto '>
                    <input type="text" placeholder=' Enter your email address' className='bg-transparent outline-none rounded-xl p-4 w-full ' />
                </div>
                {newsletterdata && newsletterdata?.btn &&
                    <div className='text-nowrap my-auto'>
                        <Button btn={{ title: newsletterdata?.btn?.title, color: newsletterdata?.btn?.color }} />
                    </div>}
            </div>
        </div>
    )
}
