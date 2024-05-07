"use client"

import EventComponent from "@/components/events";
import { AddPost } from "@/components/add-post";
import { useEffect, useState } from "react";
import axios from "axios";
import FriendComponent from "@/components/friend-component";
import { SkeletonCard } from "@/components/skeleton-card";

export default function FriendsPage() {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchFriends() {
        try {
            const response = await axios.post('/api/friends/getfriends');
            setFriends(response.data.friends);

        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        fetchFriends();
    }, []);


    if (isLoading) {
        return <SkeletonCard />;
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Your Friends</h1>
                <AddPost />
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
                <div className="flex flex-col">
                    <div className="grid gap-6 grid-cols-5">
                        {
                            friends.map((friend: any) => (
                                <FriendComponent key={friend.id} {...friend} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <EventComponent />
                    <EventComponent />
                </div>
            </div>
        </>
    );
}
