"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { blurDataURL } from "@/lib/images";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  containerClassName,
}: OptimizedImageProps) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        className={cn("object-cover", className)}
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority={priority}
        sizes={fill ? sizes : undefined}
      />
    </div>
  );
}
