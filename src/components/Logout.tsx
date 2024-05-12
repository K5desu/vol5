import React from "react";
import { useSession, signOut } from "next-auth/react";

export default function Logout() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <button onClick={() => signOut()}>マイアカウント</button>
      </div>
    );
  }
  return null;
}
