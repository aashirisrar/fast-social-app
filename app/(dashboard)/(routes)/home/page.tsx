"use client"
import { MainNavigationMenu } from "@/components/navbar";
import EventComponent from "@/components/events";
import PostComponent from "@/components/post-item";
import { AddPost } from "@/components/add-post";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchFriendsPost() {
      try {
        const response = await axios.post('/api/getfriendsposts');
        setPosts(response.data.posts);

      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }

    fetchFriendsPost();
  }, []);

  return (
    <>
      
      <div className="fixed top-5 right-72"><MainNavigationMenu /></div>
      
      <div
        className="flex justify-between gap-4 rounded-lg shadow-white"
        x-chunk="dashboard-02-chunk-1"
      >
      
        

        <div className="flex flex-col">
          {
            posts?.map((post: any) => (
              <PostComponent key={post.postId} {...post} />
            ))
          }
        </div>
        
      </div>
    </>
  );
}
