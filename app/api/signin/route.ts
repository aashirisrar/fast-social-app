import { NextResponse } from "next/server";
import { signIn } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        await signIn("credentials", data);



    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}