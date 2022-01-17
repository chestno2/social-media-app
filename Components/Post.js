/* eslint-disable @next/next/no-img-element */
import { BookmarkIcon, ChatIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon, TrashIcon } from '@heroicons/react/solid'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import ReactTimeago from "react-timeago"
import { HeartIconFilled } from "@heroicons/react/outline"
function Post({ username, id, img, userImg, caption }) {

    const { data: session } = useSession()

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    //  const [likes, setLikes] = useState([]);
    //     const [hasLiked, setHasLiked] = useState(false);
    useEffect(() =>
        onSnapshot(
            query(
                collection(db, 'posts', id, 'comments'),
                //make a query to the collection  from 
                orderBy('timestamp', 'desc')
            ),
            (snapshot) =>
                setComments(snapshot.docs)
        ),
        [id]
    );

    // useEffect(() => onSnapshot(collection(db, "posts", id, "likes"),
    //     snapshot => setLikes(snapshot.docs)
    // )
    //     , [id])

    // const likePosts = async () => {
    //     console.log(id);
    //     await setDoc(doc(db, "posts", id, "likes", session.user.email), {
    //         username: session.user.name
    //     })
    // }

    const deletePost = async () => {
        if (confirm("are you sure you want to delete this post ? ")) {
            await deleteDoc(doc(db, 'posts', id))
            alert("deleted post!")
        }
    }

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.name,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    };


    return (
        <div>
            <div className=" bg-white my-7 border rounded-sm ">
                <div className="flex items-center p-5" >
                    <Image src={userImg}
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain 
                     rounded-full border p-1 mr-3" alt="" />
                    <p className=" flex-1 font-bold " >{username}</p>
                    <DotsHorizontalIcon className={` ${session?.user.name === username ? 'hidden' : ''} h-5`} />
                    {
                        session && <TrashIcon className={` ${session.user?.name == username ? '' : 'hidden'} h-5 text-red-600 cursor-pointer`} onClick={deletePost} />
                    }
                </div>

                <img className="object-cover w-full" src={img} alt="" />

                {session && (
                    <div className=" flex justify-between p-4 " >
                        <div className=" flex space-x-4 " >
                            <HeartIcon className="btn" />
                            <ChatIcon className="btn" />
                            <PaperAirplaneIcon className="btn" />
                        </div>
                        <BookmarkIcon className="  btn" />
                    </div>)}

                <div className=" p-5 truncate " >
                    <span className=" font-bold mr-1 " >{username} </span>

                    {caption}
                </div>


                {comments.length > 0 && (
                    <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                        {comments.map((comment) => (
                            <div key={comment.id} className='flex items-center space-x-2 mb-3'>
                                <img className='h-7 rounded-full'
                                    src={comment.data().userImage}
                                    alt=''
                                />
                                <p className='text-sm flex-1'>
                                    <span className='font-bold'>{comment.data().username}</span>
                                    {' '}
                                    {comment.data().comment}</p>
                                <ReactTimeago date={new Date(comment.data().timestamp?.toDate()).toUTCString()}
                                    className='pr-5 text-xs'
                                >
                                    {comment.data().timestamp?.toDate()}
                                </ReactTimeago>
                            </div>
                        ))}
                    </div>
                )}
                {session && (
                    <form className=" flex items-center p-4">
                        <EmojiHappyIcon className="  h-7" />
                        <input type="text"
                            placeholder='Add a comment...'
                            className='border-none flex-1 focus:ring-0 outline-none'
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />

                        <button type='submit'
                            disabled={!comment.trim()}
                            className='font-semibold text-blue-400'
                            onClick={sendComment}
                        >
                            Post
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Post
