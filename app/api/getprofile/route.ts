import bcrypt from "bcrypt";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        // const session = await auth();

        // if (!session) {
        //     return NextResponse.json(
        //         { error: "Not Authenticated!" },
        //         { status: 200 }
        //     );
        // }

        // update the user's profile
        const foundUser = await prisma.user.findUnique({
            where: {
                email: "aashirisrar968@gmail.com"
            },

        })

        return NextResponse.json(
            { success: "Profile Found!", user: foundUser },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}