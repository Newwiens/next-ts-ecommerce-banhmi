"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      {navigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors ${
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
