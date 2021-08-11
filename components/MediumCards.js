import React from 'react'
import Image from 'next/image'
function MediumCards({ img, title }) {
    return (
        <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
            <div className="relative h-80 w-80 rounded-md">
                <Image src={img} layout="fill" className="rounded-md" />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCards
