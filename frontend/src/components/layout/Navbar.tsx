"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {navigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-lg font-medium  transition-colors ${
              isActive
                ? "text-orange-600"
                : "text-stone-800 hover:text-orange-600"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
