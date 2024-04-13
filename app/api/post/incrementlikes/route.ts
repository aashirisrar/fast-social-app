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

        const { postId } = await req.json();

        // fetch the post of friends
        const updatedPosts = await prisma.post.update({
            where: {
                postId
            },
            data: {
                likeCount: {
                    increment: 1
                }
            }
        })

        return NextResponse.json(
            { success: "Posts Found!", posts: updatedPosts },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}