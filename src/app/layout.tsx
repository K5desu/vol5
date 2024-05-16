"use client"

import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import NextAuthProvider from "@/providers/NextAuth";
import "@/app/globals.css";
import SideNav from "@/components/sidenav/sidenav";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // サイドバーを表示しないページのリスト
  const noSidebarPages = ["/introduction"];

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="flex flex-row h-screen">
            {!noSidebarPages.includes(pathname) && <SideNav />}
            <div className={noSidebarPages.includes(pathname) ? "flex-1" : "flex-1 ml-64"}>
              {children}
            </div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
