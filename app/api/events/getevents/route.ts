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

        type EventWithUserImage = {
            id: string;
            name: string | null;
            location: string | null;
            date: Date | null;
            startTime: Date | null;
            endTime: Date | null;
            image: string | null;
            details: string | null;
            createdAt: Date;
            userId: string;
            userImage?: string;
        };
        
        // fetch the events
        const fetchedEvents = await prisma.event.findMany({}) as EventWithUserImage[];
        
        // fetch the user images of each event
        for (let i = 0; i < fetchedEvents.length; i++) {
            const user = await prisma.user.findUnique({
                where: {
                    id: fetchedEvents[i].userId,
                },
            });
            fetchedEvents[i].userImage = user?.profilePicture!;
        }
        
        return NextResponse.json(
            { success: "Events Found!", events: fetchedEvents },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}