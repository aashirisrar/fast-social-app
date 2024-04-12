"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z.object({
    userName: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    bio: z.string(),
    dob: z.string(),
    gender: z.string(),
});

export function EditForm() {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            bio: "",
            dob: "",
            gender: "",

        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        startTransition(async () => {
            try {
                const resp = await axios.post("api/updateprofile", values);
                setError(resp.data.error);
                setSuccess(resp.data.success);
                //   location.reload();
                //console.log(resp.data.error);
            } catch (error) {
                console.log(error);
            }
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name:</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    required
                                    type="password"
                                    placeholder="e.g 123456"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name:</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    required
                                    type="password"
                                    placeholder="e.g 123456"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="userName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>User Name:</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    required
                                    type="text"
                                    placeholder="e.g aashir_israr"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bio:</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    required
                                    type="password"
                                    placeholder="e.g 123456"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date of Birth:</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    required
                                    type="password"
                                    placeholder="e.g 123456"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Gender:</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    required
                                    type="password"
                                    placeholder="e.g 123456"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password:</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    required
                                    type="password"
                                    placeholder="e.g 123456"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormError message={error} />
                <FormSuccess message={success} />
                <Button type="submit" className="w-full">
                    Update Profile
                </Button>

            </form>
        </Form>
    );
}
