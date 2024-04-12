import { signIn } from "@/lib/auth";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // const { email } = await req.json();
    const reqBody = await req.json();

    // const existinguser = await prisma.user.findUnique({
    //   where: {
    //     email,
    //   },
    // });

    // if (existinguser) {
    //   return NextResponse.json(
    //     { error: "User already exists" },
    //     { status: 200 }
    //   );
    // }

    await signIn("resend", reqBody)

    // send verfication token email

    return NextResponse.json(
      { success: "User Created!" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ data: e }, { status: 500 });
  }
}


// <form
// action={async (formData) => {
//     "use server"
//     await signIn("resend", formData)
// }}
// >
// <input type="text" name="email" placeholder="Email" />
// <Button type="submit" className="w-full">
//     Create an account
// </Button>
// </form>