import SideNav from "@/components/sidenav/sidenav";

export default function Page() {
  fetch("http://localhost:3000/python")
    .then((response) => {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json();
      } else {
        return response.text();
      }
    })
    .then((data) => console.log(data));
  return (
    <div className="flex flex-row h-screen">
      <div className="flex-grow bg-gray-100"></div>
    </div>
  );
}
