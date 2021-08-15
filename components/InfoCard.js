import React from 'react'
import Image from 'next/image'
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Skeleton from 'react-loading-skeleton'
function infoCard({ img, location, title, description, star, price, total, long, lat }) {
    return (
        <div className="flex py-7 px-2 border-b  cursor-pointer
         hover:opacity-80 hover:shadow-lg shadow-md
        rounded-md hover:rounded-xl
        transition
        duration-500 ease-out
        first:border-t
        mb-5
       
        
        ">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                {img ? (

                    <Image
                        src={img}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl" />
                ) :
                    (
                        <Skeleton count={1} width={400} height={400} />
                    )


                }
            </div>
            <div className=" flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-8 cursor-pointer" />
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b pt-2 w-10" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                    <div className="">
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default infoCard
