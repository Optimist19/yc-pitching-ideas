"use client"; // Mark as a client component

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth";

export default function AuthProvider({
  children,
  session
}: {
  children: ReactNode;
  session: Session | undefined;
}) {


  return <SessionProvider session={session}>{children}</SessionProvider>;
}
