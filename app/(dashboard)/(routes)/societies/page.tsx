"use client"

import EventComponent from "@/components/events";
import { AddPost } from "@/components/add-post";
import { useEffect, useState } from "react";
import axios from "axios";
import AddFriendComponent from "@/components/add-friends";

export default function SocietiesPage() {
    const [societies, setSocieties] = useState([]);

    useEffect(() => {
        async function fetchSocieties() {
            try {
                const response = await axios.post('/api/societies/getsocieties');
                setSocieties(response.data.societies);

            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        }

        fetchSocieties();
    }, []);


    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Societies</h1>
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
                    <div className="grid gap-6 grid-cols-5">
                        {
                            societies.length !== 0? (
                            societies.map((friend: any) => (
                                <AddFriendComponent key={friend.id} {...friend} />
                            )) ): <div>No Societies Found!</div>
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
