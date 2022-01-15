import React, { useEffect, useState } from 'react'
import Story from './Story'
import faker from "@faker-js/faker"

function Stories() {

    const [suggestion, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        })
        )
        // console.log(suggestions); 
        setSuggestions(suggestions)
    }, [])

    console.log(suggestion);
    return (
        <div className=" flex p-6 space-x-2 mt-8 border-gray-200 rounded-sm overflow-x-scroll ease-out
        scrollbar-thumb-black scrollbar-thin ">

            {
                suggestion.map((profile) => (
                    <Story key={profile.id}
                        username={profile.username}
                        img={profile.avatar} />
                ))
            }
        </div>
    )
}

export default Stories
