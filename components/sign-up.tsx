import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { signIn } from "@/lib/auth"

export function SignIn() {
    return (
        <form className="space-y-4"
            action={async (formData) => {
                "use server"
                await signIn("resend", formData)
            }}
        >
            <label>Email</label>
            <Input type="text" name="email" placeholder="Email" />
            <Button type="submit" className="w-full">
                Create an account
            </Button>
        </form>
    )
}