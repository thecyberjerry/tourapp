"use client"
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import { useDebouncedCallback } from 'use-debounce';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Tabs() {
    const [city, setcity] = useState([])
    const [toggle, settoggle] = useState(false)
    const handleSearch = useDebouncedCallback((e) => {
        const { target: { value } } = e;
        if (value.length > 0) {
            fetch(`https://nominatim.openstreetmap.org/search?q=${value}&format=json`).then((response) => { return response.json() }).then((data) => {
                data.length === 0 ? settoggle(false) : settoggle(true);
                return setcity(data)
            }).catch((e) => {
                toast.error("Some Error Occured", {
                    hideProgressBar: true,
                    position: "top-right",
                    autoClose: 2000,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    theme: "light",
                    transition: Zoom,
                });
            })
        }
        else {
            settoggle(false)
        }
    }, 350);
    return (
        <div className='shadow-2xl rounded-b-3xl '>
            <ToastContainer />
            <div className="tabhead bg-white flex px-6 py-5 gap-2 w-fit rounded-t-3xl">
                <Button btn={{ title: "💼Tours", color: "text-brown", size: "text-body" }} />
                <Button btn={{ title: "🏨Hotels", color: "text-accent1", size: "text-body", bgcolor: "bg-secondary" }} />
                <Button btn={{ title: " ✈️Tours", color: "text-accent1", size: "text-body", bgcolor: "bg-secondary" }} />
                <Button btn={{ title: "🎪Shows", color: "text-accent1", size: "text-body", bgcolor: "bg-secondary" }} />
            </div>
            <div className="tabody bg-white py-14 px-8 rounded-tr-3xl rounded-b-3xl ">
                <div className="inputs flex flex-wrap gap-3">
                    <div className="gap-2 text-center flex-1 dropdown flex flex-col">
                        <label htmlFor="input" className='text-richbrown flex justify-center gap-2 font-bold text-bodyLarge font-helvetice'>Select Destination
                            <Image src={"./assets/images/hero/dropdown.svg"} height={100} width={100} alt='Some Image' className='w-fit' />
                        </label>
                        <div className=' relative'>
                            <input type="text" className='mx-auto py-4 text-center font-helvetice rounded-xl bg-lightgray' placeholder='Where you want to go' onChange={handleSearch} />
                            <div id="dropdown" className={`${!toggle ? "hidden" : "block"}  z-10 absolute bg-white  rounded-lg shadow w-full mt-1 max-h-96 overflow-auto  `}>
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
                        <input type="date" className='mx-auto py-4 text-center font-helvetice rounded-xl bg-lightgray' placeholder='Where you want to go' />
                    </div>
                    <div className="gap-2 text-center flex-1 dropdown flex flex-col">
                        <label htmlFor="input" className='text-richbrown flex justify-center gap-2 font-bold text-bodyLarge font-helvetice'>Ending Date
                            <Image src={"./assets/images/hero/dropdown.svg"} height={100} width={100} alt='Some Image' className='w-fit' />
                        </label>
                        <input type="date" className='mx-auto py-4 text-center font-helvetice rounded-xl bg-lightgray' placeholder='Where you want to go' />
                    </div>
                    <div className="gap-2 text-center flex-1 dropdown flex flex-col">
                        <label htmlFor="input" className='text-richbrown flex justify-center gap-2 font-bold text-bodyLarge font-helvetice'>No. of Persons
                            <Image src={"./assets/images/hero/dropdown.svg"} height={100} width={100} alt='Some Image' className='w-fit' />
                        </label>
                        <input type="number" className='[appearance:textfield] mx-auto py-4 text-center font-helvetice rounded-xl bg-lightgray' placeholder='Where you want to go' />
                    </div>
                    <div className="searchBtn flex-1 justify-center flex items-end">
                        <Button btn={{ title: "Search🔎", color: "text-richbrown", size: "text-body" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
