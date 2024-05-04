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

        const user = await prisma.user.findUnique({
            where:
            {
                name: username

            }
        });

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user?.email!
            }
        })


        // add friend
        const addedFriend = await prisma.following.create({
            data: {
                followerId: currentUser?.id!,
                followingId: user?.id!
            },
        })

        const incrementFollowingOfCurrentUser = await prisma.user.update({
            where: {
                id: currentUser?.id!
            },
            data: {
                followingCount: {
                    increment: 1
                }
            }
        })

        const incrementFollowersOfOtherUser = await prisma.user.update({
            where: {
                id: user?.id!
            },
            data: {
                followerCount: {
                    increment: 1
                }
            }
        })


        return NextResponse.json(
            { success: "Friend added successfully!", friend: addedFriend, followingIncreaseUser: incrementFollowingOfCurrentUser, followerIncreaseUser: incrementFollowersOfOtherUser },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}