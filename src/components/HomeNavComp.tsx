"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function HomeNavComp() {
  const pathname = usePathname();

  // console.log(pathname, "pathname");
  return (
    <Link
      href="/pitch"
      className={`${pathname === "/pitch" ? "text-[#EF4444]" : "text-black"} hover:text-[#EF4444]` }>
      Home
    </Link>
  );
}

export default HomeNavComp;
