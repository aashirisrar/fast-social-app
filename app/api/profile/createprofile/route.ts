import bcryptjs from "bcrypt";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { randomUUID } from "crypto";
import { sendEmail } from "@/utils/sendEmail";

export async function POST(req: Request) {
    try {
        const { email, userName, password, firstName, lastName, bio, dob, gender } = await req.json();

        const hashedPassword = await bcryptjs.hash(password, 10);

        // create the user's profile
        const createdUser = await prisma.user.create({
            data: {
                email,
                name: userName,
                firstName,
                lastName,
                bio,
                gender,
                dateOfBirth: new Date(dob),
                password: hashedPassword
            }
        })

        const token = await prisma.activateToken.create({
            data: {
                userId: createdUser?.id!,
                token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
            },
        })

        // send token to email of user
        sendEmail({ to: email, subject: "Email Verification", text: `Hello ${createdUser.name}, please activate your account by clicking this link: http://localhost:3000/activate/${token.token}` });

        return NextResponse.json(
            { success: "Please Check Your Email For Verification!" },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}