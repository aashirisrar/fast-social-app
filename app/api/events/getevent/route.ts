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
        const { id } = await req.json();

        // find the event
        const foundEvent = await prisma.event.findUnique({
            where: {
                id
            },
        })

        // find the user who created the event
        const user = await prisma.user.findUnique({
            where: {
                id: foundEvent?.userId!
            }
        })

        // add the user to the event object
        if (foundEvent) foundEvent.user = user;

        return NextResponse.json(
            { success: "Event Found!", event: foundEvent },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}