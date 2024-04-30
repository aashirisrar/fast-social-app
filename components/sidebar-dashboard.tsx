"use client"

import Link from "next/link";
import {
    Bell,
    Home,
    Package,
    Package2,
    PanelTop,
    Sparkles,
    Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const routes = [
    {
        label: "Home",
        icon: Home,
        href: "/home",
    },
    {
        label: "Your Profile",
        icon: PanelTop,
        href: "/profile",
    },
    {
        label: "Societies",
        icon: Package,
        href: "/societies",
    },
    {
        label: "Friends",
        icon: Users,
        href: "/friends",
    },
    {
        label: "Discover",
        icon: Sparkles,
        href: "/discover",
    },
];


const SidebarDashboard = () => {
    const pathName = usePathname();

    return (
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Package2 className="h-6 w-6" />
                    <span className="">Connect Inc</span>
                </Link>
                <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                </Button>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                pathName === route.href
                                    ? "bg-muted text-primary"
                                    : "text-muted-foreground "
                            )}
                        >
                            <route.icon className="h-4 w-4" />
                            {route.label}
                        </Link>))}

                </nav>
            </div>
            {/* <div className="mt-auto p-4">
        <Card x-chunk="dashboard-02-chunk-0">
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support
              team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div> */}
        </div>
    )
}

export default SidebarDashboard