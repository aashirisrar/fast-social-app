import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userName, password, email } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const existinguser = await prisma.user.findUnique({
      where: {
        email,
      }
    });

    if (existinguser) {
      return NextResponse.json({ error: "User already exists" }, { status: 200 });
    }

    const createdUser = await prisma.user.create({
      data: {
        userName,
        password: hashedPassword,
        email,
      },
    });

    // send verfication token email

    return NextResponse.json({ newUser: createdUser }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}
