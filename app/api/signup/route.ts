import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const createdEmail = await prisma.user.create({
      data: {
        email,
      },
    });

    return NextResponse.json({ newUser: createdEmail }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}
