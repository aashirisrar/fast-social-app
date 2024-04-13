"use client";

import { UploadButton } from "@/utils/uploadthing";

export default function UploadBtn({ returnedLink }: any) {
    return (
        <UploadButton className="ut-button:border ut-button:border-input ut-button:bg-background ut-button:hover:bg-accent ut-button:hover:text-accent-foreground file w-0 ut-allowed-content:hidden
        ut-uploading:bg-green-500 ut-button-uploading:bg-green-500"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
                // Do something with the response
                // console.log("Files: ", res);
                returnedLink(res[0].url);
                alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
            }}
        />
    );
}