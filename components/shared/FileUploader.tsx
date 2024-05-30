"use client";

import { useCallback, Dispatch, SetStateAction, useState } from "react";
import { UploadDropzone } from "@/app/lib/uploadthing";

import { Button } from "@/components/ui/button";
import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploaderProps) {
  const [images, setImages] = useState<null | string[]>(null);
  return (
    <div>
      <UploadDropzone
        className="ut-label:text-[#16A085] ut-button:bg-[#16A085]"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImages(res.map((item) => item.url));
          console.log("Your images have been uploaded!");
        }}
        onUploadError={(error: Error) => {
          console.log("Something went wrong with images, try again");
        }}
      />
    </div>
  );
}
