import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const session = await auth();

        if (!session) {
            return NextResponse.json(
                { error: "Not Authenticated!" },
                { status: 200 }
            );
        }
        const { username } = await req.json();

        // update the user's profile
        const foundUser = await prisma.user.findUnique({
            where: {
                name: username
            },
        })


        // update the user's profile
        const foundPosts = await prisma.post.findMany({
            where: {
                userId: foundUser?.id
            },
        })

        // add user details to the post who made the post
        for (let post of foundPosts) {
            const user = await prisma.user.findUnique({
                where: {
                    id: post.userId
                }
            });
            post.user = user;
        }

        return NextResponse.json(
            { success: "Posts Found!", user: foundUser, posts: foundPosts },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}