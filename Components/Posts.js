import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Post from './Post'

// const posts = [
//     {
//         id: '123',
//         username: "Atul",
//         userImg: "https://links.papareact.com/ocw",
//         img: "https://links.papareact.com/jjm",
//         caption: "YO! what is up"
//     },
//     {
//         id: '153',
//         username: "Atul",
//         userImg: "https://links.papareact.com/jjm",
//         img: "https://links.papareact.com/ocw",
//         caption: "YO! what is up"
//     }
// ]


function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")),
            snapshot =>
                setPosts(snapshot.docs)
        )

        return unsubscribe

    }, [db])
    console.log(posts);
    return (
        <div>
            <div>
                {
                    posts.map(post => (
                        <Post key={post.id}
                            id={post.id}
                            username={post.data().username}
                            userImg={post.data().profileImg}
                            img={post.data().image}
                            caption={post.data().caption}
                        />
                    ))
                }
                {/* <Post /> */}
            </div>
        </div>
    )
}

export default Posts
