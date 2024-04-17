import Link from "next/link";
import { Textarea } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>Create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="First Name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Last Name" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea placeholder="Type your BIO here" id="bio" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="gender">Gender</Label>
              <select name="gender" id="genders">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="mix">Rather not to say</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dob">DOB</Label>
              <Input type="date" name="dob" style={{ width: "fit-content" }} />
            </div>
          </div>
          <Button type="submit" className="w-full mt-10">
            Create an account
          </Button>
        </div>
        <div className="mt-20 text-center text-sm">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
