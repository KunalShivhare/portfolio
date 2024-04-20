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
      className={`px-2
       ${currentPathName === props.href && "bg-[#A0E5D9] text-[#202023]"}`}
    ></Link>
  );
}
