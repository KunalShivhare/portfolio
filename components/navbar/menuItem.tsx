import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export function MenuItem(
  props: Omit<ComponentProps<typeof Link>, "className">
) {
  const currentPathName = usePathname();
  return (
    <Link
      {...props}
      className={`flex py-2 justify-center 
      hover:bg-orange-700  ${
        currentPathName === props.href && "bg-orange-700"
      }`}
    ></Link>
  );
}
