// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
import { usePathname } from "next/navigation";
import Link from "next/link";
// ...

const links = [
  { name: "ホーム", href: "/" },
  {
    name: "データ",
    href: "/data",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  let isActive: boolean;
  return (
    <>
      {links.map((link) => {
        isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
              isActive ? "bg-sky-100" : "bg-gray-50"
            }`}
            href={link.href}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
