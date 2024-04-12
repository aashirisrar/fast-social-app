import bcrypt from "bcrypt";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const { userName, password, firstName, lastName, bio, dob, gender } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        const session = await auth();

        if (!session) {
            return NextResponse.json(
                { error: "Not Authenticated!" },
                { status: 200 }
            );
        }

        // update the user's profile
        const updatedUser = await prisma.user.update({
            where: {
                id: session?.user?.id
            },
            data: {
                name: userName,
                firstName,
                lastName,
                bio,
                gender,
                dateOfBirth: new Date(dob),
            }
        })

        return NextResponse.json(
            { success: "Profile Updated!" },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}