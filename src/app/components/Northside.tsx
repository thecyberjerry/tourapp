import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Detailcard from './minicomponents/Detailcard';

const title = "Why Choose Northside";
const para = "Elevate your travel experience with Northside and enjoy a range of exclusive benefits. We believe exploring the world should be straightforward and rewarding. Learn why our platform is the best in opening up a world of possibilities, all while offering you unmatched benefits:"
export default function Northside() {
    return (
        <div data-aos="fade-up" className='container mt-40 gap-14 flex flex-col'>
            <div className="textcontent text-center flex flex-col gap-7">
                <Heading2 heading={{ title: title, color: "text-black" }} />
                <div className="paragraph max-w-[43.75rem] mx-auto">
                    <Paragraph paragraph={{ title: para, color: "text-neutralmediumlight" }} />
                </div>
            </div>
            <div className="cards flex sm:justify-between justify-center flex-wrap gap-5">
                <Detailcard />
                <Detailcard />
                <Detailcard />
            </div>
        </div>
    )
}