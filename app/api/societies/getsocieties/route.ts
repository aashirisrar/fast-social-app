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

        // fetch the societies
        const societies = await prisma.user.findMany({
            where: {
                isSociety: true
            }
        })

        // exlude the current user from the list
        societies.find((u) => u.id === currentUser?.id) && societies.splice(societies.findIndex((u) => u.id === currentUser?.id), 1);

        return NextResponse.json(
            { success: "Societies Found!", societies: societies },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}