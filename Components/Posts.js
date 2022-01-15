import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        username: "Atul",
        userImg: "https://links.papareact.com/ocw",
        img: "https://links.papareact.com/jjm",
        caption: "YO! what is up"
    },
    {
        id: '153',
        username: "Atul",
        userImg: "https://links.papareact.com/jjm",
        img: "https://links.papareact.com/ocw",
        caption: "YO! what is up"
    }
]


function Posts() {
    return (
        <div>
            <div>
                {
                    posts.map(post => (
                        <Post key={post.id}
                            username={post.username}
                            userImg={post.userImg}
                            img={post.img}
                            caption={post.caption}
                        />
                    ))
                }
                {/* <Post /> */}
            </div>
        </div>
    )
}

export default Posts
