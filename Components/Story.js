import Image from 'next/image'
import React from 'react'

function Story({ username, img }) {

    return (
        <div>

            <Image
                width={64}
                height={64}
                className=" rounded-full  p-0.5 border-2 
            border-red-500 object-contain 
            cursor-pointer hover:scale-110 transition transform duration-200 
            ease-out " src={img}
                alt="" />
            <p className=" text-sm w-14 text-center truncate " >{username}</p>

        </div>
    )
}

export default Story
