"use client"

import EventComponent from "@/components/events";
import { AddPost } from "@/components/add-post";
import ProfilePostsComponent from "@/components/profile-posts";

export default function ProfilePage() {

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">Your Posts</h1>
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
                <ProfilePostsComponent />
                <div className="hidden lg:inline">
                    <EventComponent />
                </div>
            </div>
        </>
    );
}
