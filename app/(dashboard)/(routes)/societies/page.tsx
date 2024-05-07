"use client"

import EventComponent from "@/components/events";
import { AddPost } from "@/components/add-post";
import { useEffect, useState } from "react";
import axios from "axios";
import AddFriendComponent from "@/components/add-friends";
import { SkeletonCard } from "@/components/skeleton-card";

export default function SocietiesPage() {
    const [societies, setSocieties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchSocieties() {
        try {
            const response = await axios.post('/api/societies/getsocieties');
            setSocieties(response.data.societies);

        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        fetchSocieties();
    }, []);

    if (isLoading) {
        return <SkeletonCard />;
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Societies</h1>
                <AddPost />
            </div>
            <div
                className="flex sm:justify-between gap-0 rounded-lg shadow-sm sm:gap-4 justify-center"
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
                    <div className="grid gap-0 grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3 md:gap-3 lg:gap-5">
                        {
                            societies.length !== 0 ? (
                                societies.map((friend: any) => (
                                    <AddFriendComponent key={friend.id} {...friend} />
                                ))) : <div>No society found!</div>
                        }
                    </div>
                </div>
                <div className="hidden sm:block">
                    <EventComponent />
                </div>
            </div>
        </>
    );
}
