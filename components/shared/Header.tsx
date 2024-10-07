import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b dark:border-gray-800 z-50 shadow-md dark:shadow-primary-black backnavdrop">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="flex flex-row items-center gap-0">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Eventsutra logo"
            className="hidden sm:block"
          />
          <h3 className="text-semibold sm:text-[24px] text-[18px]">
            EVENTSUTRA
          </h3>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex items-center w-45 justify-end gap-8">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
