import React from 'react'
import Image from "next/image"
import sampic from "./oip.jpeg"
import { AddPost } from "@/components/add-post";
import { Video,Camera,Smile } from 'lucide-react'
const inputbox = () => {
    
  return (
    <div className="bg-gray-900 p-2 rounded-2xl shadow-md text-gray-200 font-medium mt-12 absolute top-9 left-80">
<div className="flex space-x-4 p-4 items-center">
    <Image 
    className='rounded-full'
    src={sampic}
    width={45}
    height={45}
    layout="fixed"
    />
    <form className="flex flex-1">
        <input type="text" className="rounded-full h-12 bg-gray-100 text-gray-700 flex-grow px-5 focus outline-none" 
        placeholder='Whats on your mind ? '
        />
         <button className='gap-2' type="submit"><AddPost /></button> 
    </form>
    {/* border-t */}
    <div className="flex justify-evenly p-3"> 
        <div className="inputIcon">
            <Video className="w-14 h-8 text-red-400 "/>
            {/* <p className='text-xs sm:text-sm xl:text-base'>Live Video</p> */}
            
        </div>

        <div className="inputIcon">
        <Camera className="w-14 h-8 text-green-400 "/>
            {/* <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p> */}
            
        </div>
        <div className="inputIcon">
        <Smile className="w-14 h-8 text-yellow-400 "/>
            {/* <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p> */}
            
        </div>
    </div>
    </div>   
 </div>
  )
}

export default inputbox