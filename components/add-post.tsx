"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { PlusCircleIcon } from "lucide-react"
import { Textarea } from "./ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import axios from "axios";
import UploadBtn from "./upload-button";

const formSchema = z.object({
    content: z.string(),
    image: z.string(),
});


export function AddPost() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            content: "",
            image: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        try {
            const resp = await axios.post("api/addpost", values);
        } catch (error) {
            console.log(error);

        }
    }

    function setLink(link: string) {
        form.setValue("image", link);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="gap-x-1"><PlusCircleIcon size={18} />  New Post</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Post</DialogTitle>
                    <DialogDescription>
                        Add your content and image to post.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid py-1">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Content:</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                id="username"
                                                placeholder="Enter content here"
                                                defaultValue=""
                                                className="col-span-3"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image:</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="hidden"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-center pb-2">
                                <UploadBtn returnedLink={setLink} />
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit">Create Post</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}