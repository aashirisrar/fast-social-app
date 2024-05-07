import { NextResponse } from "next/server";
import { signIn } from "@/lib/auth";

export async function POST(req: Request) {
    const data = await req.json();
    data.redirect = false;
    const response = await signIn("credentials", data);

    try {
        return NextResponse.json({ message: "Successfully Logged In", url: '/home' }, { status: 200 });

    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}