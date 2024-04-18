import prisma from '@/lib/db'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(
    _request: NextRequest,
    {
        params,
    }: {
        params: { token: string }
    }
) {
    const { token } = params

    const user = await prisma.user.findFirst({
        where: {
            ActivateToken: {
                some: {
                    AND: [
                        {
                            activatedAt: null,
                        },
                        {
                            createdAt: {
                                gt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
                            },
                        },
                        {
                            token
                        },
                    ],
                },
            },
        },
    })

    if (!user) {
        throw new Error('Token is invalid or expired')
    }

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            active: true,
        },
    })

    await prisma.activateToken.update({
        where: {
            token,
        },
        data: {
            activatedAt: new Date(),
        },
    })

    // make custom success page to show the account is activated and give sign in link below
    redirect('/sign-in')
}