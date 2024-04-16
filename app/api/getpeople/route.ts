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

        // fetch the friends of the user
        const friends = await prisma.following.findMany({
            where: {
                followerId: session.user?.id!
            }
        });

        const user = await prisma.user.findMany({
            where: {
                id: {
                    notIn: friends.map(friend => friend.followingId)
                }
            }
        })

        user.find((u) => u.id === session.user?.id) && user.splice(user.findIndex((u) => u.id === session.user?.id), 1);

        return NextResponse.json(
            { success: "Users Found!", people: user },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}