import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const { content, image } = await req.json();

        const session = await auth();

        if (!session) {
            return NextResponse.json(
                { error: "Not Authenticated!" },
                { status: 200 }
            );
        }

        // create the post
        const createdPost = await prisma.post.create({
            data: {
                body: content,
                image,
                userId: session.user?.id!,
            },
        })

        return NextResponse.json(
            { success: "Post Created!", post: createdPost },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}