import React, { useState } from 'react'
import Image from "next/image"
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    MenuIcon

} from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/dist/client/router'
function Header({ placeHolder }) {
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)

    }
    const resetInput = () => {
        setSearchInput('')
    }

    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState(1)

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    const router = useRouter()
    const search = () => {
        router.push(
            {
                pathname: '/search',
                query: {
                    location: searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noOfGuests: noOfGuests,
                }
            }
        )
        setSearchInput('')
    }
    return (
        < div className='sticky top-0 z-50 grid grid-cols-3 px-5 py-3 bg-white shadow-md md:px-10' >
            <div className="relative flex items-center h-8 my-auto cursor-pointer"
                onClick={() => router.push("/")}
            >


                <Image src='https://links.papareact.com/qd3'
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div className="flex  items-center px-2 text-sm rounded-full md:border-2 md:shadow-sm ">
                <input type="text"
                    value={searchInput}
                    onChange={(e) =>
                        setSearchInput(e.target.value)
                    }
                    placeholder={placeHolder || 'search...'}
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
            {searchInput ? (<div className="flex flex-col
            col-span-3 mx-auto 
            
            ">
                <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={["#FD5B61"]}
                    onChange={handleSelect}
                />
                <div className="flex items-center border-b mb-4">
                    <h2 className="text-2xl pl-2 flex-grow font-semibold">Number of Guests</h2>
                    <UsersIcon className="h-5" />
                    <input
                        value={noOfGuests}
                        type="number"
                        onChange={(e) => setNoOfGuests(e.target.value)}
                        min={1}
                        className="w-12 pl-2 outline-none text-red-400" />
                </div>
                <div className="flex items-center">

                    <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                    <button onClick={search} className="flex-grow text-red-500">Search</button>

                </div>
            </div>) :
                null}

        </div>
    )
}

export default Header