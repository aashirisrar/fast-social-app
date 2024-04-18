import bcryptjs from "bcrypt";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const { userName, password, firstName, lastName, bio, dob, gender, image } = await req.json();

        const hashedPassword = await bcryptjs.hash(password, 10);

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
                email: session?.user?.email!
            },
            data: {
                name: userName,
                firstName,
                lastName,
                bio,
                gender,
                dateOfBirth: new Date(dob),
                profilePicture: image,
                password: hashedPassword
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