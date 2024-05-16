"use client"
import SideNav from "@/components/sidenav/sidenav";
import { usePathname } from "next/navigation";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const pathname = usePathname();
   return (
            <html lang="en">
            <body>
            <div className="flex flex-row h-screen">
            <SideNav />
            <div className= "flex-1 ml-64">
              {children}
            </div>
            </div>
            </body>
            </html>
    );
  }