import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

const LOGO_INSTA_LG =
  "https://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png";
const LOGO_INSTA_SM =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";

export default function Header() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/** Left */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image src={LOGO_INSTA_LG} layout="fill" className="object-contain" />
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image src={LOGO_INSTA_SM} layout="fill" className="object-contain" />
        </div>

        {/** Middle */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>

        {/** Right */}
        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          {session ? (
            <>
              <PlusCircleIcon
                onClick={() => setIsOpen(true)}
                className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
              />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="user-img"
                className="h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}
