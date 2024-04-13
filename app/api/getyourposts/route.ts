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

        // fetch your posts
        const fetchedPosts = await prisma.post.findMany({
            where: {
                userId: session.user?.id!
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