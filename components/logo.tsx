import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export function Logo(props: { className?: string, link?: string }) {
  return (
    <Link href={props.link ?? '/'} className={cn("items-center space-x-2 flex", props.className)}>
      <Image src={logo} alt="Logo" width={20} height={24} />
      <span className="font-bold text-xl sm:inline-block">Bev</span>
    </Link>
  );
}
