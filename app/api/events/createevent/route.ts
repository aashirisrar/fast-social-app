import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const { name, location, date, details, image } = await req.json();

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


        // create the post
        const createEvent = await prisma.event.create({
            data: {
                name,
                location,
                details,
                image,
                userId: currentUser?.id!,
            },
        })

        return NextResponse.json(
            { success: "Event Created!", event: createEvent },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}