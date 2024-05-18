// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { name: "ホーム", href: "/", icon: HomeIcon },
  { name: "AIsearch", href: "/AI", icon: AiIcon },
  { name: "記事", href: "/AI/articles", icon: ArticlesIcon },
];

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="black"/>
    </svg>
  );
}

function AiIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15.7797C5 19.6497 8.13 22.7797 12 22.7797C15.87 22.7797 19 19.6497 19 15.7797V11.7797H5V15.7797ZM16.12 4.14973L18.22 2.04973L17.4 1.21973L15.1 3.52973C14.16 3.05973 13.12 2.77973 12 2.77973C10.88 2.77973 9.84 3.05973 8.91 3.52973L6.6 1.21973L5.78 2.04973L7.88 4.14973C6.14 5.41973 5 7.45973 5 9.77973V10.7797H19V9.77973C19 7.45973 17.86 5.41973 16.12 4.14973ZM9 8.77973C8.45 8.77973 8 8.32973 8 7.77973C8 7.22973 8.45 6.77973 9 6.77973C9.55 6.77973 10 7.22973 10 7.77973C10 8.32973 9.55 8.77973 9 8.77973ZM15 8.77973C14.45 8.77973 14 8.32973 14 7.77973C14 7.22973 14.45 6.77973 15 6.77973C15.55 6.77973 16 7.22973 16 7.77973C16 8.32973 15.55 8.77973 15 8.77973Z" fill="black"/>
    </svg>
  );
}

function ArticlesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.8 11.4V6L15.8 2H3.79999C2.68999 2 1.79999 2.9 1.79999 4V18C1.79999 19.1 2.68999 20 3.79999 20H11.2L13.2 18H3.79999V4H14.97L17.8 6.83V13.4L19.8 11.4ZM13.8 14C13.8 15.66 12.46 17 10.8 17C9.13999 17 7.79999 15.66 7.79999 14C7.79999 12.34 9.13999 11 10.8 11C12.46 11 13.8 12.34 13.8 14ZM4.79999 5H13.8V9H4.79999V5ZM18.79 15.25L20.56 17.02L15.57 22H13.8V20.23L18.79 15.25ZM22.05 15.51L21.2 16.36L19.43 14.59L20.28 13.74C20.48 13.54 20.79 13.54 20.99 13.74L22.05 14.8C22.25 15 22.25 15.32 22.05 15.51Z" fill="black"/>
    </svg>
  );
}

export default function NavLinks() {
  const pathname = usePathname();
  let isActive;
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
            <link.icon />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
