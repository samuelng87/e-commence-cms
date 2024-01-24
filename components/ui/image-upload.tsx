'use client'

import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ImagePlus, X } from "lucide-react"

declare global {
    var cloudinary: any;
}

interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    disabled,
    onChange,
    onRemove,
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    const onUpload = (result: any) => {
        onChange(result.info.secure_url);
    };


    if (!isMounted) {
        return null;
    }

  return (
    <div>
        <div className="mb-4 flex items-cnter gap-4">
            {value.map((url) => (
                <div key={url} className="relative w-[300px] h-[300px] rounded-md overflow-hidden">
                    <div className="z-10 absolute top-3 right-3">
                        <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="icon">
                            <X className="h-6 w-6" />
                        </Button>
                    </div>
                    <Image
                        alt="image"
                        fill
                        className="object-cover"
                        src={url}
                    />
                </div>
            ))}
        </div>
        {/* https://console.cloudinary.com/ -> lg1pei0x"*/}
        <CldUploadWidget 
        onUpload={onUpload}
        uploadPreset="lg1pei0x"
        options={{
            maxFiles: 1
        }}
    >   
        {({ open }) => {
            const onClick = () => {
                open();
            }

            return (
                <Button
                    type="button"
                    disabled={disabled}
                    variant="secondary"
                    onClick={onClick}
                >
                    <ImagePlus className="h-4 w-4 mr-2" />
                    Upload an Image
                </Button>
            )
        }}
        </CldUploadWidget>
    </div>
  );
}

export default ImageUpload


// https://cloudinary.com 