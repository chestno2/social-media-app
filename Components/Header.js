import React from 'react'
// import Image from "next/image"
import {
    HomeIcon, SearchIcon,
} from "@heroicons/react/solid"
import {
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline"
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { ModalState } from '../atoms/modelAtoms'
function Header() {

    const { data: session } = useSession()

    const router = useRouter()
    const [open, setOpen] = useRecoilState(ModalState)

    // read only value 


    return (

        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

                {/* left icon*/}
                <div onClick={() => router.push('/')} className="relative hidden lg:inline-grid w-24 pt-2 cursor-pointer">
                    ANAGRAM
                </div>
                <div onClick={() => router.push('/')} className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image
                        src='https://links.papareact.com/jjm'
                        layout='fill'
                        objectFit='contain'
                        alt=''
                    />
                </div>

                {/* middle search bar*/}
                <div className="max-w-xs">
                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>

                {/* right icons*/}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={() => router.push('/')} className="navBtn" />
                    <MenuIcon className='h-6 md:hidden cursor-pointer' />

                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className='navBtn hover:rotate-45' />
                                <div className="absolute -top-2 -right-1 text-xs font-semibold w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                                    6
                                </div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
                            <UserGroupIcon className='navBtn' />

                            <Image onClick={signOut}
                                width={40}
                                height={40}
                                src={session.user.image}
                                alt='profile pic'
                                className=' rounded-full cursor-pointer'
                            />
                        </>
                    ) : (
                        <button onClick={signIn}>Sign In</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header