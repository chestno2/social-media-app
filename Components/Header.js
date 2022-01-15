import React from 'react'
// import Image from "next/image"
import {
    HomeIcon,
} from "@heroicons/react/solid"
import {
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline"
import Image from 'next/image'
import { useSession } from 'next-auth/react'
function Header() {

    const { data: session } = useSession()



    return (
        <div className=" shadow-sm border-b bg-white z-50 top-0 sticky" >
            <div className=" flex justify-around p-3  items-center">
                <div>
                    <div className=" relative h-12 w-24 hidden lg:block " >
                        <Image src="https://links.papareact.com/ocw"
                            layout="fill"
                            objectFit="contain"
                            alt='' />
                    </div>
                    <div className=" relative w-10 h-10 lg:hidden  flex-shrink-0 cursor-pointer" >
                        <Image src="https://links.papareact.com/jjm"
                            layout="fill"
                            objectFit="contain"
                            alt='' />
                    </div>
                </div>

                <div className="  mt-1 rounded-md ">
                    <div className=" flex items-center  border-gray-100  pl-3  pointer-events-non  " >

                        <input className="bg-gray-50
             block w-full pl-10 sm:text-sm
             border-gray-300  rounded-md focus:ring-black focus:border-black " type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="flex items-center  space-x-4  " >
                    <HomeIcon className=" navBtn " />
                    <MenuIcon className="  h-6 md:hidden cursor-pointer " />
                    <PaperAirplaneIcon className="navBtn" />
                    <PlusCircleIcon className=" navBtn " />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className=" navBtn " />

                    <img src={session?.user?.image}
                        className=" h-10 rounded-full cursor-pointer " alt="" />
                </div>
            </div>


        </div>

    )
}

export default Header