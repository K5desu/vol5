import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import updateUsernameByEmail from "@/app/api/user/changeUsernameByEmail";
import Logout from "@/components/Oauth/Logout";

export const ProfilePage = ({
  img,
  username,
}: {
  img: string;
  username: string;
}) => {
  const { data: session } = useSession();
  const [usernames, setUsernames] = useState(username);
  const [update, setUpdate] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      {update ? (
        <div>
          <div className="flex items-center border border-gray-300 p-4 rounded-lg w-50">
            {img ? (
              <img
                src={img}
                alt="Profile Picture"
                className="rounded-full w-12 h-12 mr-4"
              />
            ) : (
              "なし"
            )}

            <input
              type="text"
              ref={inputRef}
              className="border border-black border-2"
            />
            <button
              onClick={() => {
                if (inputRef.current && session?.user?.email) {
                  updateUsernameByEmail(
                    session?.user?.email,
                    inputRef.current.value

                    // 以下のコードは省略...
                  );
                  setUsernames(inputRef.current.value);
                  setUpdate(false);
                }
              }}
            >
              Update
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center border border-gray-300 p-4 rounded-lg w-50">
            {img ? (
              <img
                src={img}
                alt="Profile Picture"
                className="rounded-full w-12 h-12 mr-4"
              />
            ) : (
              "なし"
            )}
            <span className="mr-auto text-lg">{usernames}</span>

            <button onClick={() => setUpdate(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-4 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM15 7l-1.586-1.586L13 6l1.586 1.586L15 7z" />
                <path d="M3 19a1 1 0 001-1v-4h-1v4h-1v-4H2v4a1 1 0 001 1z" />
              </svg>
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-lg cursor-pointer">
              <Logout />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
