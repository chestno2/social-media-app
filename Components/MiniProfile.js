import Image from 'next/image'
import React from 'react'

function MiniProfile() {
    return (
        <div className=" flex items-center justify-between  mt-14 ml-10" >
            <Image className=" rounded-full border p-[2px]"
                src="https://links.papareact.com/3ke"
                width={64}
                height={64}
                alt="" />

            <div className=" flex-1 mx-4 " >
                <h2 className=" font-bold ">Atul</h2>
                <h3 className=" text-sm text-gray-400 ">Welocome to instagram</h3>
            </div>

            <button className=" text-blue-400 text-sm font-semibold" >Sign Out</button>
        </div>
    )
}

export default MiniProfile
