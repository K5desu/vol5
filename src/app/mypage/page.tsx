"use client";
import Logout from "@/components/Oauth/Logout";
import { useSession } from "next-auth/react";
import Image from "next/image";
export default function Page() {
  const session = useSession();
  return (
    <div className="block">
      <h1>こんにちは、{session.data?.user?.name}さん</h1>
      <h2>メールは{session.data?.user?.email}</h2>
      <h2>
        Userの画像は
        {session.data?.user?.image ? (
          <Image
            src={session.data?.user?.image}
            alt="user`s image"
            width={100}
            height={100}
          ></Image>
        ) : (
          "ありません"
        )}
      </h2>

      <Logout></Logout>
    </div>
  );
}
