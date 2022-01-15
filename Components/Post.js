import { BookmarkIcon, ChatIcon, DotsCircleHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/solid'
import React from 'react'

function Post({ username, id, img, userImg, caption }) {
    console.log(userImg);
    return (
        <div>
            <div className=" bg-white my-7 border rounded-sm ">
                <div className="flex items-center p-5" >
                    <img src={userImg} className="h-12 w-12 object-contain 
                     rounded-full border p-1 mr-3" alt="" />
                    <p className=" flex-1 font-bold " >{username}</p>
                    <DotsCircleHorizontalIcon className=" h-5" />
                </div>

                <img className="object-cover w-full" src={img} alt="" />
                <div className=" flex justify-between p-4 " >
                    <div className=" flex space-x-4 " >
                        <HeartIcon className="btn" />
                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />
                    </div>
                    <BookmarkIcon className="  btn" />
                </div>

                <div className=" p-5 truncate " >
                    <span className=" font-bold mr-1 " >{username} </span>
                    {caption}
                </div>

                <form className=" flex items-center p-4">
                    <EmojiHappyIcon className="  h-7" />
                    <input type="text" className=" border-none flex-1 focus:ring-0 outline-none" />
                    <button className=" font-semibold text-blue-400 " >Post</button>
                </form>
            </div>
        </div>
    )
}

export default Post
