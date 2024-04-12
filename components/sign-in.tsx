"use client"

import { useState } from "react"
import { signIn } from "@/lib/auth"

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <form
            action={async () => {
                await signIn("credentials", {
                    // Note: The CredentialsProvider is non-opinionated, username/password is the simplest use-case,
                    // but can be configured to work with many other authentication mechanisms and inputs.
                    email,
                    password,
                })
            }}
        >
            <label>
                Email
                <input
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                Password
                <input
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button type="submit">Sign In</button>
        </form>
    )
}