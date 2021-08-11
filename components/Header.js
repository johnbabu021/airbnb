import React from 'react'
import Image from "next/image"
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    MenuIcon

} from "@heroicons/react/solid"

function Header() {
    return (
        < div className='sticky top-0 z-50 grid grid-cols-3 px-5 py-3 bg-white shadow-md md:px-10' >
            <div className="relative flex items-center h-8 my-auto cursor-pointer" >


                <Image src='https://links.papareact.com/qd3'
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left" />
            </div>
            <div className="flex  items-center px-2 text-sm rounded-full md:border-2 md:shadow-sm ">
                <input type="text"
                    placeholder="search.."
                    className="w-full text-gray-400 border-none outline-none transparent " />
                <SearchIcon className="hidden
                 h-8
                 p-2 
                 text-white
                  bg-red-400 
                rounded-full
                 cursor - pointer 
                md:inline " />

            </div>

            <div className="flex 
            space-x-4
             items-center 
             justify-end
             text-gray-500
             ">
                <p className="hidden md:inline cursor-pointer" > Become a host </p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex space-x-4 items-center border-2 p-2 rounded-full">

                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </div>
    )
}

export default Header