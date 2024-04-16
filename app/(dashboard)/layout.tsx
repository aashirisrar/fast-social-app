import NavbarDashboard from "@/components/navbar-dashboard";
import SidebarDashboard from "@/components/sidebar-dashboard";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <SidebarDashboard />
            </div>
            <div className="flex flex-col">
                <NavbarDashboard />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;