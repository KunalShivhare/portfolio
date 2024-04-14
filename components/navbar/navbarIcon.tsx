"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export function NavbarIcon(
  props: Omit<ComponentProps<typeof Link>, "className">
) {
  const pathName = usePathname();
  return (
    <Link
      {...props}
      className={`pt-8 pb-2 hover:text-orange-700  ${
        pathName === props.href && "text-orange-700"
      }`}
    >
      {`P O R T F O L I O`}
    </Link>
  );
}
