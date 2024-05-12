import SideNav from "@/components/sidenav/sidenav";
export default function Page() {
  return (
    <div className="flex flex-row h-screen">
      <SideNav />
      <div className="flex-grow bg-gray-100"></div>
    </div>
  );
}
