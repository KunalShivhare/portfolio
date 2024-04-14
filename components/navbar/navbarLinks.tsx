"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export function NavbarLinks(
  props: Omit<ComponentProps<typeof Link>, "className">
) {
  const currentPathName = usePathname();
  return (
    <Link
      {...props}
      className={`pt-12 px-4 pb-2
      hover:bg-orange-700 
      focus-visble:bg-orange-700 ${
        currentPathName === props.href && "bg-orange-700"
      }`}
    ></Link>
  );
}
