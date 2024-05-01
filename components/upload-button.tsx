"use client";

import { UploadButton } from "@/utils/uploadthing";

export default function UploadBtn({ returnedLink, message }: any) {
    return (
        <UploadButton className="ut-button:border ut-button:border-input ut-button:bg-background ut-button:hover:bg-accent ut-button:hover:text-accent-foreground ut-button:text-primary file w-0 ut-allowed-content:hidden
        ut-uploading:bg-green-500 ut-button-uploading:bg-green-500"
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
                // Do something with the response
                // console.log("Files: ", res);
                message(res[0].serverData.message);
                returnedLink(res[0].url);
            }}
            onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
            }}
        />
    );
}