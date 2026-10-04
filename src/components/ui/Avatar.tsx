import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/content";

interface AvatarProps {
  image: ImageAsset;
  size?: number;
  className?: string;
}

export function Avatar({ image, size = 64, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "border-line relative shrink-0 overflow-hidden rounded-full border bg-[#f0eded] dark:bg-[#2a2a2d]",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes={`${size}px`}
        className="object-cover"
        style={{ objectPosition: image.objectPosition ?? "center" }}
      />
    </div>
  );
}
