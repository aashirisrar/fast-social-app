"use client"

import Link from "next/link";
import {
    CircleUser,
    Home,
    Menu,
    Package,
    Package2,
    PanelTop,
    Search,
    Sparkles,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import axios from "axios";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


const NavbarDashboard = () => {
    const [profilepicture, setProfilePicture] = useState();

    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const response = await axios.post('/api/getprofile');
                setProfilePicture(response.data.user.profilePicture);

            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        }

        fetchUserProfile();
    }, []);


    return (
        // flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6
        <header className="flex h-14 items-center mt-6 px-4 lg:h-[32px] lg:px-6">
            <div className="w-full flex-1">
                <form>
                    <div className="relative ml-[20%]">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full appearance-none bg-background pl-8 shadow-none hidden lg:inline md:inline md:w-2/3  lg:w-1/3"
                        />
                    </div>
                </form>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="relative">
                    {
                        profilepicture ? (
                            <Avatar className="h-9 w-9 cursor-pointer hover:opacity-80 transition">
                                <AvatarImage className="rounded-full" src={profilepicture} alt={profilepicture} />
                                <AvatarFallback>US</AvatarFallback>
                            </Avatar>
                        ) : (<Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>)
                    }
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Link href="/settings">Settings</Link> </DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}

export default NavbarDashboard