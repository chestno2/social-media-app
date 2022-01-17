import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Post from './Post'




function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")),
            snapshot =>
                setPosts(snapshot.docs)
        )

        return unsubscribe

    }, [])

    return (
        <div>
            <div>
                {
                    posts.map(post => (
                        <Post key={post.id}
                            id={post.id}
                            userId={post.data().userId}
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
