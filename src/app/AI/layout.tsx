
import SideNav from "@/components/sidenav/sidenav";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <div className="flex flex-row">
      <SideNav />
      <div className="mx-auto">{children}</div>
    </div>
  );
}
