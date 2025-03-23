import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "YC Pitch",
  description: "YC pithing application",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import NavBar from "@/components/NavBar";

// import { SessionProvider } from "next-auth/react";
// import { Session } from "next-auth";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"]
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"]
// });

// export const metadata: Metadata = {
//   title: "YC Pitch",
//   description: "YC pithing application",
//   icons: {
//     icon: "/logo.svg",
//     apple: "/logo.svg"
//   }
// };

// export default function RootLayout({
//   children,
//   session
// }: Readonly<{
//   children: React.ReactNode;
//   session: Session;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <NavBar />
//         <SessionProvider session={session}>{children}</SessionProvider>;{" "}
//       </body>
//     </html>
//   );
// }
