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

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user?.email!
            }
        })


        // fetch the friends of the user
        const friendsFetched = await prisma.following.findMany({
            where: {
                followerId: currentUser?.id!
            }
        });

        const f = await prisma.user.findMany({
            where: {
                id: {
                    in: friendsFetched.map((friend) => friend.followingId)
                }
            }
        });

        return NextResponse.json(
            { success: "Friends Found!", friends: f },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}