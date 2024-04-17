"use client"

import EventComponent from "@/components/events";
import PostComponent from "@/components/post-item";
import { AddPost } from "@/components/add-post";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import UserProfileComponent from "@/components/user-profile";

export default function UserProfilePage() {
    const [posts, setPosts] = useState([]);
    const [currUser, setCurruser] = useState({});
    const params = useParams();

    async function fetchUserPosts() {
        try {
            const response = await axios.post('/api/post/getuserposts', { username: params.username });
            setPosts(response.data.posts);

            // set dateofbirth to a readable format
            const date = new Date(response.data.user.dateOfBirth);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            response.data.user.dateOfBirth = formattedDate;

            setCurruser(response.data.user);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    useEffect(() => {
        fetchUserPosts();
    }, []);

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Posts</h1>
                <AddPost />
            </div>
            <div
                className="flex justify-between gap-4 rounded-lg border border-dashed shadow-sm"
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
                <div className="flex flex-col">
                    {
                        posts.map((post: any) => (
                            <PostComponent key={post.postId} {...post} />
                        ))
                    }
                </div>
                <div>
                    <UserProfileComponent user={currUser} />
                </div>
            </div>
        </>
    );
}
