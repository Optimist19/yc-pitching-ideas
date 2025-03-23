"use client"; // Required for hooks in Next.js 13+ with App Router

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const pathname = usePathname(); // Get current route
  const route = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setIsRedirecting(true); // Set loading state
      route.replace("/pitch"); // Redirect to /pitch
    }
  }, [pathname, route]);

  if (isRedirecting) {
    return <div className="pl-[2vw]">Redirecting...</div>; // Show loading message while redirecting
  }

  return null; // Render nothing if not redirecting
}