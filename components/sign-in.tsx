"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState, useTransition } from "react";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Box } from "lucide-react";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export function SignInFormComponent() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const resp = await axios.post("/api/signin", values);

        router.push(resp.data.url);
      } catch (error: any) {
        if (error.response.status == 500) {
          setError("Invalid Credentials");
          return;
        }
      }
    });
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Connect Inc</h1>
            <p className="text-balance text-muted-foreground">
              Login to your account
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email:</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            type="text"
                            placeholder="lXXXXXX@lhr.nu.edu.pk"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password:</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            type="password"
                            placeholder="e.g 123456"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />

                <Button type="submit" className="w-full mt-8">
                  Login
                </Button>
                <div className="text-center text-sm ">
                  Don&apos;t have an account?{" "}
                  <Link href="/sign-up" className="underline">
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block h-[990px]">
        <Image
          src="/signin.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
