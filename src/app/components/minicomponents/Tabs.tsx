"use client"
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import { useDebouncedCallback } from 'use-debounce';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Tabs() {
    const error = (msg: string) => {
        toast.error(msg, {
            toastId: 'error',
            hideProgressBar: true,
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            transition: Zoom,
        });
    }
    const [city, setcity] = useState([])
    const [toggle, settoggle] = useState(false)
    const handleSearch = useDebouncedCallback((e) => {
        const { target: { value } } = e;
        if (value.length > 0) {
            fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(value.trim())}&format=json`).then((response) => { return response.json() }).then((data) => {
                data.length === 0 ? settoggle(false) : settoggle(true);
                return setcity(data)
            }).catch(() => {
                error("Some Error Occurred")
            })
        }
        else {
            settoggle(false)
        }
    }, 350);
    const [inpvalue, setinpvalue] = useState('');
    const validateNum = (e: any) => {
        const { target: { value } } = e;
        if (!Number(value)) {
            setinpvalue("")
            error("Please Enter a number")
        }
        else if (value > 10) {
            error("Maximum 10 are allowed")
        }
        else {
            setinpvalue(value)
        }
    }
    const [toggleTab, settoggleTab] = useState(false)
    return (
        <div className=' rounded-b-3xl'>
            <ToastContainer />
            <div className="tabhead bg-white [&>*]:flex-1 text-nowrap flex px-6 py-5 gap-2 w-fit rounded-xl md:rounded-none md:rounded-t-3xl md:rounded-br-none flex-wrap justify-center">
                <div onClick={() => settoggleTab(!toggleTab)}>
                    <Button btn={{ title: "💼Tours", color: "text-brown", size: "text-body" }} />
                </div>
                <Button btn={{ title: "🏨Hotels", color: "text-accent1", size: "text-body", bgcolor: "bg-secondary" }} />
                <Button btn={{ title: "✈️Tours", color: "text-accent1", size: "text-body", bgcolor: "bg-secondary" }} />
                <Button btn={{ title: "🎪Shows", color: "text-accent1", size: "text-body", bgcolor: "bg-secondary" }} />
            </div>
            <div className={`tabody ${!toggleTab ? "h-0 opacity-0" : "h-auto p-5  "} transition-opacity md:h-full md:opacity-100 z-10 absolute md:static overflow-hidden md:overflow-visible bg-white md:py-14 md:px-8 rounded-xl md:rounded-none md:rounded-b-3xl md:rounded-tr-3xl shadow-2xl`}>
                <div className="inputs flex flex-wrap gap-3">
                    <div className="gap-2 text-center flex-1 dropdown flex flex-col">
                        <label htmlFor="input" className='text-richbrown flex justify-center gap-2 font-bold text-bodyLarge font-helvetice'>Select Destination
                            <Image src={"./assets/images/hero/dropdown.svg"} height={100} width={100} alt='Some Image' className='w-fit' />
                        </label>
                        <div className=' relative'>
                            <input type="text" className='outline-none mx-auto py-4 text-center font-helvetice rounded-xl bg-lightgray' placeholder='Where you want to go' onChange={handleSearch} onBlur={() => settoggle(false)} />
                            <div id="dropdown" className={`${!toggle ? "hidden" : "block"} z-10 absolute bg-white  rounded-lg shadow w-full mt-1 max-h-64 md:max-h-80 overflow-auto  `}>
                                <ul className="py-2 text-sm rounded-xl bg-secondary font-helvetice " aria-labelledby="dropdownDefaultButton">
                                    {city && city.map((item: any, index: number) => {
                                        return (
                                            <li key={index} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                {item.display_name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="gap-2 text-center flex-1 dropdown flex flex-col">
                        <label htmlFor="input" className='text-richbrown flex justify-center gap-2 font-bold text-bodyLarge font-helvetice'>Starting Date
                            <Image src={"./assets/images/hero/dropdown.svg"} height={100} width={100} alt='Some Image' className='w-fit' />
                        </label>
                        <input type="date" className='outline-none mx-auto py-4 text-center font-helvetice rounded-xl bg-lightgray' placeholder='Where you want to go' />
                    </div>
                    <div className="gap-2 text-center flex-1 dropdown flex flex-col">
                        <label htmlFor="input" className='text-richbrown flex justify-center gap-2 font-bold text-bodyLarge font-helvetice'>Ending Date
                            <Image src={"./assets/images/hero/dropdown.svg"} height={100} width={100} alt='Some Image' className='w-fit' />
                        </label>
                        <input type="date" className='outline-none mx-auto py-4 text-center font-helvetice rounded-xl bg-lightgray' placeholder='Where you want to go' />
                    </div>
                    <div className="gap-2 text-center flex-1 dropdown flex flex-col">
                        <label htmlFor="input" className='text-richbrown flex justify-center gap-2 font-bold text-bodyLarge font-helvetice'>No. of Persons
                            <Image src={"./assets/images/hero/dropdown.svg"} height={100} width={100} alt='Some Image' className='w-fit' />
                        </label>
                        <input type="text" value={inpvalue} onChange={(e) => validateNum(e)} className='outline-none  [appearance:textfield] mx-auto py-4 text-center font-helvetice rounded-xl bg-lightgray' placeholder='Where you want to go ' />
                    </div>
                    <div className="searchBtn flex-1 justify-center flex items-end">
                        <Button btn={{ title: "Search🔎", color: "text-richbrown", size: "text-body" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
