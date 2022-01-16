import React, { useEffect, useState } from 'react'
import faker from "@faker-js/faker"
import Image from 'next/image';
import { useSession } from 'next-auth/react';
function Suggestion() {
    const [suggestions, setSuggestions] = useState([]);


    useEffect(() => {

        const suggestions = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        ))
        setSuggestions(suggestions)
    }, [])

    const { data: session } = useSession()


    return (
        <div>
            <div className=" mt-4 ml-10">
                <div className=" flex justify-between text-sm mb-5 ">
                    <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                    <button className="  text-gray-600 font-semibold">See ALL</button>
                </div>
                {suggestions.map(profile => (
                    <div className="flex items-center  justify-between mt-3"
                        key={profile.id}>

                        <Image width={40} height={40} className="rounded-full border p-[2px]" src={profile.avatar} alt="" />
                        <div className=" flex-1 ml-4 ">
                            <h2 className=" font-semibold text-sm ">{profile.username}</h2>
                            <h3 className=" text-xs text-gray-400"> Works at {profile.company.name}</h3>
                        </div>
                        <button className=" text-blue-500 ">Follow</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Suggestion
