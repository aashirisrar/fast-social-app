import bcrypt from "bcrypt";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userName, password, firstName, lastName, bio, dob, gender } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);


        // const existinguser = await prisma.user.findUnique({
        //     where: {
        //         email,
        //     },
        // });

        // if (existinguser) {
        //     return NextResponse.json(
        //         { error: "User already exists" },
        //         { status: 200 }
        //     );
        // }

        // update the user's profile


        return NextResponse.json(
            { success: "Profile Updated!" },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ data: e }, { status: 500 });
    }
}