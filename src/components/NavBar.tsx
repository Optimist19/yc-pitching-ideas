import Image from "next/image";
import logo from "../../public/logo.svg";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { auth } from "../../auth";
// import { redirect } from "next/navigation";
import SignInAndOut from "./SignInAndOut";
import Link from "next/link";

// import { signIn, auth } from "../../../auth";

async function NavBar() {
  return (
    <nav className="px-5 py-2">
      <header className="flex items-center justify-between">
        <div className="w-[20vw]">
          <Image src={logo} width={500} height={500} alt="application-logo" />
        </div>

        <ul className="flex items-center justify-between gap-5 font-semibold text-[20px]">
          <Link href="/pitchsubmission">
          <li>Create</li>
          
          </Link>
          <SignInAndOut />
        </ul>
      </header>
    </nav>
  );
}

export default NavBar;
