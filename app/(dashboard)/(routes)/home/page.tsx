"use client";

import EventComponent from "@/components/events";
import PostComponent from "@/components/post-item";
import { AddPost } from "@/components/add-post";
import { useEffect, useState } from "react";
import axios from "axios";
import { CreateEvent } from "@/components/create-event";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [society, setSociety] = useState(false);

  async function fetchFriendsPost() {
    try {
      const response = await axios.post("/api/post/getfriendsposts");
      setPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  }

  async function fetchUserProfile() {
    try {
      const response = await axios.post("/api/profile/getprofile");
      setSociety(response.data.user.isSociety);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  }

  useEffect(() => {
    fetchUserProfile();
    fetchFriendsPost();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Feed</h1>
        <AddPost />
        {society && <CreateEvent />}
      </div>
      <div
        className="flex justify-between gap-4 rounded-lg shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        {/* <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div> */}

        <div className="flex flex-col ">
          {posts.map((post: any) => (
            <PostComponent key={post.postId} {...post} />
          ))}
        </div>

        <div className="hidden lg:inline">
          <EventComponent />
          <EventComponent />
        </div>
      </div>
    </>
  );
}
