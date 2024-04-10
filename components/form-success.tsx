import { CheckCircle } from "lucide-react";

interface FormSuccess {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccess) => {
  if (!message) return null;

  return (
    <div
      className="bg-green-600/15 p-3 rounded-md flex
        items-center gap-x-2 text-sm text-green-500"
    >
      <CheckCircle size={16} />
      {message}
    </div>
  );
};
