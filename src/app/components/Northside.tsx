import React from 'react'
import Heading2 from './minicomponents/Heading2'
import Paragraph from './minicomponents/Paragraph'
import Detailcard from './minicomponents/Detailcard';
 
export default function Northside({ northsidedata }: any) {
    return (
        <div data-aos="fade-up" className='container mt-40 gap-14 flex flex-col'>
            <div className="textcontent text-center flex flex-col gap-7">
                {northsidedata && northsidedata?.heading &&
                    <Heading2 heading={{ title: northsidedata?.heading?.title, color: northsidedata?.heading.color }} />}
                {northsidedata && northsidedata?.para && <div className="paragraph max-w-[43.75rem] mx-auto">
                    <Paragraph paragraph={{ title: northsidedata?.para?.title, color: northsidedata?.para?.color }} />
                </div>}
            </div>
            <div className="cards flex sm:justify-between justify-center flex-wrap gap-5">
                {northsidedata && northsidedata?.detailcard?.map((item: any, index: number) => {
                    return (<Detailcard key={index} detailcard={item} />)
                })}
            </div>
        </div>
    )
}