"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { EventDisplayComponent } from "@/components/event-display";
import { SkeletonCard } from "@/components/skeleton-card";

export default function EventPage() {
    const [event, setEvent] = useState({});
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);

    async function fetchEvent() {
        try {
            const response = await axios.post('/api/events/getevent', { id: params.eventid });
            setEvent(response.data.event);

        } catch (error) {
            console.error('Error fetching event', error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        fetchEvent();
    }, []);

    if (isLoading) {
        return <SkeletonCard />;
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Event</h1>
                {/* <AddPost /> */}
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
                        event && <EventDisplayComponent event={event} />
                    }
                </div>
            </div>
        </>
    );
}
