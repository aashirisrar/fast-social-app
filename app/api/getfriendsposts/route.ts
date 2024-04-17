import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        // const session = await auth();

        // if (!session) {
        //     return NextResponse.json(
        //         { error: "Not Authenticated!" },
        //         { status: 200 }
        //     );
        // }

        // fetch the friends of the user
        const friends = await prisma.user.findMany({
            // where: {
            //     followerId: session.user?.id!
            // }
        });

        // fetch the post of friends
        const fetchedPosts = await prisma.post.findMany({
            where: {
                userId: {
                    in: friends.map(friend => friend.id)
                }
            }
        })

        return NextResponse.json(
            { success: "Posts Found!", posts: fetchedPosts },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}