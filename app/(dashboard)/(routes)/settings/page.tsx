import { EditForm } from "@/components/edit-form";
import { PassForm } from "@/components/pass-form";

export default function SettingsPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Settings</h1>
      </div>
      <EditForm />
      <PassForm />
    </>
  );
}
