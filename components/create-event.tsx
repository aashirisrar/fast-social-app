"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {  useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusCircleIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import axios from "axios";
import UploadBtn from "@/components/upload-button";
import { useState } from "react";
import { FormSuccess } from "@/components/form-success";

const formSchema = z.object({
  name: z.string(),
  location: z.string(),
  date: z.string(),
  image: z.string(),
  details: z.string(),
});

export function CreateEvent() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      date: "",
      image: "",
      details: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const resp = await axios.post("api/events/createevent", values);
      setError(resp.data.error);
      setSuccess(resp.data.success);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  function setLink(link: string) {
    form.setValue("image", link);
  }

  function setMessage(message: string) {
    setSuccess(message);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-x-1">
          <PlusCircleIcon size={18} /> New Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
          <DialogDescription>
            Add name, location and details about the event.
          </DialogDescription>
        </DialogHeader>
        <div className="grid py-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Name:</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="e.g Orientation"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location:</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="e.g Front Lawn"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                   <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Details:</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="e.g Come for fun!"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                            <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date:</FormLabel>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        {...field}
                        required
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
                      <Input className="hidden" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center pb-2">
                <UploadBtn message={setMessage} returnedLink={setLink} />
              </div>
              <FormSuccess message={success} />
              <div className="flex justify-end">
                <Button type="submit">Create Event</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
