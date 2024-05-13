import React from "react";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status !== "authenticated") {
    return (
      <button
        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3  hover cursor-pointer"
        onClick={() => signIn("google", {}, { prompt: "login" })}
      >
        Googleでログイン
      </button>
    );
  }
  return null;
};
export default Login;
