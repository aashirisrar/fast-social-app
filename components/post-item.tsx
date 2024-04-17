import { LucideMenu, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LikeComponent from "@/components/like";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function PostComponent({ userId, body, image, likeCount, commentCount, postId, createdAt }: any) {

  function calculateTimeDifference(timeCreatedAt: Date | string | number): string {
    const postTime: Date = new Date(timeCreatedAt); // Convert to Date object

    const currentTime: Date = new Date();
    const timeDifference: number = currentTime.getTime() - postTime.getTime();

    // Convert milliseconds to seconds
    const seconds: number = Math.floor(timeDifference / 1000);

    // Define time intervals in seconds
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;

    if (seconds < minute) {
      return "Just now";
    } else if (seconds < hour) {
      const minutes = Math.floor(seconds / minute);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (seconds < day) {
      const hours = Math.floor(seconds / hour);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      // For differences greater than a day, displaying the actual date and time
      return postTime.toLocaleString();
    }
  }

  const [userName, setUserName] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [name, setName] = useState('');

  // get username of the user who posted the post
  useEffect(() => {
    async function fetchUserNames() {
      try {
        const response = await axios.post('/api/post/getusername', { userId: userId });
        setUserName(response.data.user.name);
        setImageSrc(response.data.user.profilePicture);
        // for setting the fallback of avatar
        setName(response.data.user.firstName[0] + response.data.user.lastName[0]);
      } catch (error) {
        console.error('Error incrementing likes:', error);
      }
    }

    fetchUserNames();
  }, []);


  return (
// space-y-2 px-6 mb-4 w-[650px]
    <Card className="border rounded-lg mb-4">
{/* flex flex-row items-center justify-between space-y-0 pb-2 */}
      {/* <CardHeader className=""> */}
        {/* flex items-center gap-4 */}
        <div className="m-4">
          {/* hidden h-9 w-9 sm:flex */}
          {/* <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src={imageSrc} alt={postId} />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar> */}
          {/* grid gap-1 */}
          





          <div className='flex items-center gap-4 text-sm'>
        <Avatar className="">
        <AvatarImage src={imageSrc} alt={postId} />
        <AvatarFallback>{name}</AvatarFallback>
          </Avatar> 
          <div>
            <Link href={"/user/" + userName}>
              {/* text-sm font-medium leading-none hover:underline */}
              <strong className="">{userName}</strong>
            </Link>
            <p className="">
              {calculateTimeDifference(createdAt)}
            </p>
           
          </div>
        
      </div>




          
            
            {/* text-sm text-muted-foreground */}
            
          
        
        {/* h-4 w-4 text-muted-foreground */}
        <LucideMenu className="" />
      {/* </CardHeader> */}

      {/* <CardContent className="space-y-4"> */}
      {/* flex flex-col items-start gap-4 */}
        <div className="">
          {/* text-sm text-muted-foreground */}
          <div className="my-3">{body}
          </div>
          <div className="flex gap-2 justify-center rounded-md">
          <Image width={400} className="rounded-md  hover:cursor-pointer w-1/3" style={{ objectFit: "contain" }} height={400} alt={postId} src={image} />
          <Image width={400} className="rounded-md  hover:cursor-pointer w-1/3" style={{ objectFit: "contain" }} height={400} alt={postId} src={image} />
          <Image width={400} className="rounded-md  hover:cursor-pointer w-1/3" style={{ objectFit: "contain" }} height={400} alt={postId} src={image} />
          </div>
        </div>


        <div className="flex gap-2">
          {/* add like count here */}
          <LikeComponent postId={postId} likeCount={likeCount} />
          {/* add comment count here */}
          <Button variant="outline"><MessageCircle size={16} className="mr-1" />{commentCount}</Button>
        </div>
      {/* </CardContent> */}
      </div>
    </Card>
  );
}
