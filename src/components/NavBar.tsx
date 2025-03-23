import Image from "next/image";
import logo from "../../public/logo.svg";
import SignInAndOut from "./SignInAndOut";
import CreateCompNav from "./CreateCompNav";
import HomeNavComp from "./HomeNavComp";
import MobileNav from "./MobileNav";

async function NavBar() {
  return (
    <nav className="px-5 py-2">
      <header className="flex items-center justify-between">
        <div className="w-[20vw]">
          <Image src={logo} width={500} height={500} alt="application-logo" />
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center justify-between gap-5 font-semibold text-[20px] ">
            <li>
              <HomeNavComp />
            </li>

            <li>
              <CreateCompNav />
            </li>
            <li>
              <SignInAndOut />
            </li>
          </ul>
        </div>

        <div className=" font-semibold text-[20px] md:hidden">
          <MobileNav />
        </div>
      </header>
    </nav>
  );
}

export default NavBar;
