import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userName, password, email } = await req.json();

    const createdUser = await prisma.user.create({
      data: {
        userName,
        password,
        email,
      },
    });

    return NextResponse.json({ newUser: createdUser }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}
