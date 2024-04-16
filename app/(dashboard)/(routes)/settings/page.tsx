import { EditForm } from "@/components/edit-form";

export default function Dashboard() {
    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Settings</h1>
            </div>
            <EditForm />
        </>
    );
}
