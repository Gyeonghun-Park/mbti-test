import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type AvatarProps = { className?: string; children?: ReactNode };
type AvatarImageProps = ComponentPropsWithoutRef<"img"> & {
  height?: number;
  width?: number;
  className?: string;
  src: string;
  alt: string;
};

export const Avatar = ({ className, children }: AvatarProps) => (
  <div
    className={cn(
      "relative flex h-[12.5rem] w-[12.5rem] shrink-0 overflow-hidden rounded-full",
      className,
    )}
  >
    {children}
  </div>
);

export const AvatarImage = ({
  className,
  src,
  alt,
  height = 200,
  width = 200,
  ...props
}: AvatarImageProps) => (
  <Image
    className="aspect-square h-full w-full"
    src={src}
    alt={alt}
    height={height}
    width={width}
    {...props}
  />
);
