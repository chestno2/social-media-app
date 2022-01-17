import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function MiniProfile() {

    const { data: session } = useSession()
    return (
        <div className=" flex items-center justify-between  mt-14 ml-10" >

            {
                session ?
                    (
                        <div className='flex justify-around'>
                            <Image className=" rounded-full border p-[2px]"
                                src={session.user.image}
                                width={60}
                                height={20}
                                alt="" />

                            <div className=" flex-1 mx-4 " >
                                <h2 className=" font-bold ">{session.user.name}</h2>
                                <h3 className=" text-sm text-gray-400 ">Welocome to instagram</h3>
                                <button onClick={signOut} className=" text-blue-400 text-sm font-semibold" >Sign out</button>
                            </div>

                        </div>
                    ) : (

                        <button onClick={signIn} className=" text-blue-400 float-right text-sm font-semibold" >Sign In</button>
                    )
            }




        </div>
    )
}

export default MiniProfile
