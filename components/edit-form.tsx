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
import { useEffect, useState, useTransition } from "react";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import UploadBtn from "./upload-button";

const formSchema = z.object({
  userName: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  bio: z.string(),
  dob: z.string(),
  gender: z.string(),
  image: z.string(),
});

export function EditForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [genderplaceholder, setGenderplaceholder] = useState("Select a gender");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      firstName: "",
      lastName: "",
      bio: "",
      gender: "",
      dob: "1998-01-01",
      image: "",
    },
  });

  function setLink(link: string) {
    form.setValue("image", link);
  }

  function setMessage(message: string) {
    setSuccess(message);
  }

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await axios.post("/api/profile/getprofile");
        const userData = response.data.user;

        const dateOfBir = userData.dateOfBirth.split("T")[0];

        // Set default values for form fields using fetched user data
        form.setValue("userName", userData.name || "");
        form.setValue("firstName", userData.firstName || "");
        form.setValue("lastName", userData.lastName || "");
        form.setValue("bio", userData.bio || "");
        form.setValue("dob", dateOfBir || "1998-01-01");
        form.setValue("gender", userData.gender || "");
        form.setValue("image", userData.profilePicture || "");
        // Set placeholder for gender
        setGenderplaceholder(userData.gender || "Select a gender");

        // form.setValue('password', '');
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }

    fetchUserProfile();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const resp = await axios.post("api/profile/updateprofile", values);
        setError(resp.data.error);
        setSuccess(resp.data.success);
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <div className=" grid w-[350px] gap-6 cen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name:</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type="text"
                          placeholder="e.g Max"
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
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name:</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type="text"
                          placeholder="e.g Robinson"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name:</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="text"
                      placeholder="e.g aashir_israr"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio:</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="text"
                      placeholder="e.g 123456"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth:</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type="date"
                          placeholder="e.g 123456"
                          required
                          {...field}
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
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={genderplaceholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>

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
            <center>
              <div>
                <UploadBtn message={setMessage} returnedLink={setLink} />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
            </center>

            <Button type="submit" className="w-full">
              Update Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
