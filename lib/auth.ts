import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import prisma from "./db"
import bcryptjs from "bcryptjs"
import { randomUUID } from "crypto"

export const { auth, handlers, signIn } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
        maxAge: 3000,
    },
    providers: [
        Credentials({
            name: 'Sign in',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: '' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })

                if (!user) {
                    return null
                }

                if (!user.active) {
                    throw new Error('User is not active')
                }

                const isPasswordValid = await bcryptjs.compare(
                    credentials.password,
                    user.password
                )

                if (!isPasswordValid) {
                    return null
                }

                const sessionToken = randomUUID();
                const userIsInSession = await prisma.session.findFirst({
                    where: { userId: user?.id! },
                });
                console.log(userIsInSession);

                const sessionExpiry = new Date();
                sessionExpiry.setHours(sessionExpiry.getHours() + 24);

                if (userIsInSession) {
                    await prisma.session.update({
                        where: { sessionToken: userIsInSession?.sessionToken! },
                        data: { sessionToken: sessionToken, expires: sessionExpiry },
                    });
                } else {
                    await prisma.session.create({
                        data: {
                            sessionToken: sessionToken,
                            userId: user?.id!,
                            expires: sessionExpiry,
                        },
                    });
                }

                return {
                    id: user.id + '',
                    email: user.email,
                    name: user.name,
                }
            },
        }),
    ],
})